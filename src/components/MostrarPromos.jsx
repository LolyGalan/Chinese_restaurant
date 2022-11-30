import React from "react";
export const MostrarPromos = (props) => {
  return (
    <div>
      <h2>Promociones</h2>
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
