import React from "react";
import productos from "../productos.json";
import { FormComp } from "./FormComp";

export const MostrarProdPed = (props) => {
  const pedidoProps = props.pedido;
  const productosProps = props.product;
  return (
    <div>
      <h2>Nuestros Productos</h2>
      <FormComp p={productosProps} />
      <button
        className="button"
        onClick={() => {
          props.setAñadir(true);
        }}
      >
        Añadir producto
      </button>
      <button
        className="button2"
        onClick={() => {
          props.setPedir(true);
        }}
      >
        Hacer un pedido
      </button>
      <hr />
      <hr />
      <hr />
      <hr />
      {pedidoProps.length > 0 && (
        <div>
          <h2>Pedido</h2>
          <FormComp p={pedidoProps} />
        </div>
      )}
    </div>
  );
};
