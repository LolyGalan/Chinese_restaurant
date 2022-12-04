import React from "react";

export const FormComp = (props) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Number</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {props.p.length > 0 ? (
            props.p.map((elem) => (
              <>
                <tr key={elem.id}>
                  <td> {elem.number} </td>
                  <td>{elem.name} </td>
                  <td>{elem.price} </td>
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
