import React from "react";
export const MostrarPedido = (props) => {
  return (
    <div>
      <h1>Pedido</h1>
      {console.log(props.pedido)}
      <table>
        <thead>
          <tr>
            <th>Number</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {props.pedido.length > 0 ? (
            props.pedido.map((ped) => (
              <tr>
                <td> {ped.number} </td>
                <td>{ped.name} </td>
                <td>{ped.price} </td>
              </tr>
            ))
          ) : (
            <tr>
              <td>No hay pedido</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
