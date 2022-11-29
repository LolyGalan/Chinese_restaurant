import React from "react";
import productos from "../productos.json";
export const MostrarProductos = (props) => {
  return (
    <div>
      <h1>Nuestros Productos</h1>
      {console.log(props.product)}
      <table>
        <thead>
          <tr>
            <th>Number</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {props.product.length > 0 ? (
            props.product.map((producto) => (
              <>
                <tr key={producto.id}>
                  <td> {producto.number} </td>
                  <td>{producto.name} </td>
                  <td>{producto.price} </td>
                </tr>
              </>
            ))
          ) : (
            <tr>
              <td>No hay productos</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};