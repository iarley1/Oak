import { useForm } from "react-hook-form";
import { StyledForm } from "./style";
import { FormSchema } from "./formSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { ProductContext } from "../../context/productContext";

export const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(FormSchema),
  });

  const { product, setProduct } = useContext(ProductContext);

  const submit = (data) => {
    const newData = {
      id: product.length > 0 ? product[product.length - 1].id + 1 : 1,
      ...data,
    };
    setProduct([...product, newData]);
    reset();
  };

  return (
    <StyledForm
      errorsName={errors.name}
      errorsDescription={errors.description}
      errorsValue={errors.value}
      onSubmit={handleSubmit(submit)}
    >
      <div className="input-box">
        <label htmlFor="">Nome do produto</label>
        <input className="input-name" type="text" {...register("name")} />
        {errors.name && <p className="erro-input">{errors.name.message}</p>}
      </div>
      <div className="input-box">
        <label htmlFor="">Descrição do produto</label>
        <input
          className="input-description"
          type="text"
          {...register("description")}
        />
        {errors.description && (
          <p className="erro-input">{errors.description.message}</p>
        )}
      </div>
      <div className="input-box">
        <label htmlFor="">valor do produto</label>
        <input
          className="input-value"
          type="number"
          step="0.01"
          {...register("value")}
        />
        {errors.value && <p className="erro-input">{errors.value.message}</p>}
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
        {errors.avaliable && (
          <p className="erro-input">{errors.avaliable.message}</p>
        )}
      </div>
      <button type="submit">Cadastrar</button>
    </StyledForm>
  );
};
