import React from "react";
import { useForm } from "react-hook-form";
export const Promos = (props) => {
  const {  handleSubmit } = useForm();
  const onSubmit = (data, e) => {
    props.promoOrder(data);
    e.target.reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <button>Promociones para tu pedido</button>
      </form>
    </div>
  );
};
