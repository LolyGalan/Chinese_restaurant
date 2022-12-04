import React, { useState } from "react";
import { useForm } from "react-hook-form";
export const AddProductOrder = (props) => {
  const { register, errors, handleSubmit } = useForm();
  const onSubmit = (data, e) => {
    e.preventDefault();
    const numeroValido = data.number;
    if (numeroValido == 12 || numeroValido == 21 || numeroValido == 37) {
      props.addProductOrder(data);
    }

    e.target.reset();
  };

  return (
    <div>
      <h2>Haz tú pedido</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Número del producto"
          {...register("number", {
            required: true,
            message: "Campo Requerido",
          })}
        />
        <div>{errors?.number?.message}</div>
        <button>Añadir a tu pedido</button>
      </form>
      <hr />
      <hr />
      <hr />
      <hr />
    </div>
  );
};
