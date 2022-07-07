import React, { useContext, useState } from "react";
import { contexto } from "./CartContext";
import CartList from "./CartList";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import Form from "./Form";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

const CartListContainer = () => {

  const [data, setData] = useState({ name:"", email:"", phone:"" }); //para esto recomiendan mas usar useReducer()

  const {carrito, vaciarCarrito, precioTotal} = useContext(contexto);

  const handleChange = (e) => {
    setData({
        ...data,
        [e.target.name]: e.target.value
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const objOrden = {
        buyer: {
            name: data.name,
            phone: data.phone,
            email: data.email,
        },
        cart: carrito.map((prod)=> {
            return{

                cantidad: prod.quantity,
                id:prod.id,
                titulo: prod.title,
                precio: prod.price,    

            }
        }),
        total: precioTotal,
        date: serverTimestamp(),
    };

    const ref = collection(db, "orders")
    addDoc(ref, objOrden)
        .then((response) => swal({
            title: 'Felicidades, su compra ha sido finalizada correctamente!',
            text: `Su codigo de compra es ${response.id}`,
            icon: 'success'
        }))
        .catch((reject) => swal({
            title:'Error al finalizar la compra',
            text: 'Lo lamentamos pero en este momento no es posible finalizar al compra, vuelva a intentarlo mas tarde',
            icon: 'error'
        }));

    vaciarCarrito();

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
            <button className='vaciarCarrito' onClick={vaciar}>Empty cart</button>
        </div>
        <Form handleChange={handleChange} data={data} handleSubmit={handleSubmit}/>
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
