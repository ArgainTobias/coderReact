import React, { createContext, useState } from "react";
import swal from "sweetalert";
import { collectionProd } from "../firebase";
import { getDocs } from "firebase/firestore";

export const contexto = createContext();

const Provider = contexto.Provider;

export const CartContext = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const [cantidadTotal, setCantidadTotal] = useState(0);
  const [precioTotal, setPrecioTotal] = useState(0);
  const ref = collectionProd;
  const consulta = getDocs(ref);

  let copiaCarrito = carrito.slice();

  const isInCart = (id) => carrito.some((prod) => prod.id === id);

  const agregarProducto = (prodId, cantidad, prodPrecio) => {
    let estaId = isInCart(prodId);

    consulta.then((res) => {
      if (!estaId) {
        swal({
          title: "Your order has been confirmed",
          icon: "success",
        });

        let producto = res.docs.find((prod) => prod.id === prodId);

        copiaCarrito.push({
          ...producto.data(),
          id: prodId,
          quantity: cantidad,
        });

        setCarrito(copiaCarrito);
        setCantidadTotal(cantidadTotal + cantidad);
        setPrecioTotal(precioTotal + prodPrecio * cantidad)
      } 
      else {
        swal({
          title: "You have already selected a quantity of this product",
          icon: "error",
        });
      }
    });
  };

  const eliminarProducto = (prodId) => {
    let estaId = isInCart(prodId);

    if (estaId) {
      let producto = carrito.find((prod) => prod.id === prodId);

      const indice = copiaCarrito.indexOf(producto);

      copiaCarrito.splice(indice, 1);
      setCarrito(copiaCarrito);
      setCantidadTotal(cantidadTotal - producto.quantity);

      setPrecioTotal(precioTotal - producto.price * producto.quantity)

      swal({
        title: "The product has been successfully disposed of",
        icon: "success",
      });
    }
  };

  const finalizarCompra = () => {
    setCarrito([]);

    setCantidadTotal(cantidadTotal - cantidadTotal);

    setPrecioTotal(0);
  }

  const vaciarCarrito = () => {

    setCarrito([]);

    setCantidadTotal(cantidadTotal - cantidadTotal);

    setPrecioTotal(0);

    swal({
      title: "Cart has been emptied",
      icon: "info",
    });
  };

  const valorDelContexto = {
    carrito: carrito,
    cantidadTotal: cantidadTotal,
    precioTotal: precioTotal,
    agregarProducto: agregarProducto,
    eliminarProducto: eliminarProducto,
    vaciarCarrito: vaciarCarrito,
    finalizarCompra : finalizarCompra,
  };

  return <Provider value={valorDelContexto}>{children}</Provider>;
};
