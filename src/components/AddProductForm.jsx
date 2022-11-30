import React from "react";
import { useForm } from "react-hook-form";
export const AddProductForm = (props) => {
  const { register, errors, handleSubmit } = useForm();
  const onSubmit = (data, e) => {
    console.log(data);
    props.addProduct(data);
    e.target.reset();
  };
  return (
    <div>
      <h2>Añade un nuevo producto</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Número</label>
        <input
          type="text"
          {...register("number", {
            required: true,
            message: "Campo Requerido",
          })}
        />
        <div>{errors?.number?.message}</div>
        <label>Nombre</label>
        <input
          type="text"
          {...register("name", {
            required: true,
            message: "Campo Requerido",
          })}
        />
        <div>{errors?.name?.message}</div>
        <label>Price</label>
        <input
          type="text"
          {...register("price", {
            required: true,
            message: "Campo Requerido",
          })}
        />
        <div>{errors?.price?.message}</div>
        <button>Añadir producto</button>
      </form>
    </div>
  );
};
