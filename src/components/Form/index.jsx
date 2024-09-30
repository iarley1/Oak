import { useForm } from "react-hook-form";
import { StyledForm } from "./style";
import { FormSchema } from "./formSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../context/productContext";

export const Form = () => {
  const { register, handleSubmit, reset } = useForm({
    mode: "onTouched",
    resolver: yupResolver(FormSchema),
  });

  const { product, setProduct } = useContext(ProductContext);

  const submit = (data) => {
    const newData = {
        id: product.length > 0 ? product[product.length - 1].id + 1 : 1,
        ...data
      }
    setProduct([...product, newData]);
    reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <div className="input-box">
        <label htmlFor="">Nome do produto</label>
        <input type="text" {...register("name")} />
      </div>
      <div className="input-box">
        <label htmlFor="">Descrição do produto</label>
        <input type="text" {...register("description")} />
      </div>
      <div className="input-box">
        <label htmlFor="">valor do produto</label>
        <input type="number" {...register("value")} />
      </div>
      <div className="input-box">
        <p htmlFor="">Disponivel para venda</p>
        <div>
          <input
            type="radio"
            value="true"
            name="available"
            {...register("avaliable")}
          />
          <label htmlFor="true">Sim</label>
        </div>
        <div>
          <input
            type="radio"
            value="false"
            name="available"
            {...register("avaliable")}
          />
          <label htmlFor="false">Não</label>
        </div>
      </div>
      <button type="submit">Cadastrar</button>
    </StyledForm>
  );
};
