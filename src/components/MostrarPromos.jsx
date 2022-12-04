import React from "react";
export const MostrarPromos = (props) => {
  return (
    <div>
      <h2>Promociones que puedes elegir</h2>
      <div>
        {props.promo.length > 0 ? (
          props.promo.map((pr) => <p className="parpadea">{pr} </p>)
        ) : (
          <p>No hay promociones</p>
        )}
      </div>
    </div>
  );
};
