import React from "react";
import { useForm } from "react-hook-form";
export const Promos = (props) => {
  const { register, errors, handleSubmit } = useForm();
  const onSubmit = (data, e) => {
    console.log(data);
    props.promoOrder(data);
    e.target.reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <button>Promociones</button>
      </form>
    </div>
  );
};
