import React, { useContext, useState } from "react";
import { contexto } from "./CartContext";
import CartList from "./CartList";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import Form from "./Form";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

const CartListContainer = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    emailConfirmation: "",
    phone: "",
  });

  const { carrito, vaciarCarrito, precioTotal } = useContext(contexto);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const objOrden = {
      buyer: {
        name: data.name,
        phone: data.phone,
        email: data.email,
        emailConfirmation: data.emailConfirmation,
      },
      cart: carrito.map((prod) => {
        return {
          cantidad: prod.quantity,
          id: prod.id,
          titulo: prod.title,
          precio: prod.price,
        };
      }),
      total: precioTotal,
      date: serverTimestamp(),
    };

    const ref = collection(db, "orders");
    if(data.email === data.emailConfirmation){
      addDoc(ref, objOrden)
        .then((response) =>
          swal({
            title: "Congratulations, your purchase has been successfully completed.!",
            text: `Your purchase code is ${response.id}`,
            icon: "success",
          })
        )
        .catch((reject) =>
          swal({
            title: "Error at checkout",
            text: "We are sorry but at this moment it is not possible to finalize the purchase, please try again later.",
            icon: "error",
          })
        );
  
      vaciarCarrito();
    }
    else{
      swal({
        title:'Purchase not completed',
        text:'Please verify that the email and your confirmation match.',
        icon:'error',
      })
    }
  };

  const vaciar = () => {
    carrito.length > 0
      ? vaciarCarrito()
      : swal({
          title: "The cart is already empty",
          icon: "info",
        });
  };

  if (carrito.length > 0) {
    return (
      <>
        <div className="div-carrito">
          <CartList productos={carrito} />
        </div>
        <div className="div-vaciar-carrito">
          <h3>Precio total: ${precioTotal}</h3>
          <button className="vaciarCarrito" onClick={vaciar}>
            Empty cart
          </button>
        </div>
        <Form
          handleChange={handleChange}
          data={data}
          handleSubmit={handleSubmit}
        />
      </>
    );
  } else {
    return (
      <div className="div-carrito">
        <h3>No hay productos en el carrito</h3>
        <Link className="volver-a-comprar" to={"/"}>
          Volver a comprar
        </Link>
      </div>
    );
  }
};

export default CartListContainer;
