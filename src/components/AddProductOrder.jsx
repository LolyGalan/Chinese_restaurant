import React from "react";
import { useForm } from "react-hook-form";
export const AddProductOrder = (props) => {
  const { register, errors, handleSubmit } = useForm();
  const onSubmit = (data, e) => {
    console.log(data);
    props.addProductOrder(data);
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
    </div>
  );
};
