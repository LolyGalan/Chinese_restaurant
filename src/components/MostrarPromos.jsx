import React from "react";
export const MostrarPromos = (props) => {
  return (
    <div>
      <h1>Promociones</h1>
      {console.log(props.promo)}
      <div>
        {props.promo.length > 0 ? (
          props.promo.map((prom) => {
            <p>{prom} </p>;
          })
        ) : (
          <p>No hay promociones</p>
        )}
      </div>
    </div>
  );
};
