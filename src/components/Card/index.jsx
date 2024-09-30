import { useContext, useEffect, useState } from "react";
import { StyledCard } from "./style";
import { ProductContext } from "../../context/productContext";

export const Card = () => {
  const { product, setProduct } = useContext(ProductContext);
  const [order, setOrder] = useState(() => {
    const savedOrder = localStorage.getItem("order");
    return savedOrder ? JSON.parse(savedOrder) : false;
  });

  const deleteProduct = (id) => {
    const newProduct = product.filter((product) => product.id !== id);
    setProduct(newProduct);
  };

  const sortedProducts = order
    ? [...product].sort((a, b) => a.value - b.value)
    : product;

  useEffect(() => {
    localStorage.setItem("order", JSON.stringify(order));
  }, [order]);

  const handlerOrder = () => {
    setOrder(!order);
  };

  return product.length !== 0 ? (
    <StyledCard order={order}>
      <button onClick={handlerOrder} className="order-button">
        {order ? "Desordenar" : "Ordem crescente"}
      </button>
      {sortedProducts.map((element) => (
        <li key={element.id}>
          <div>
            <h2>
              Nome: <span>{element.name}</span>
            </h2>
            <p>
              Valor:{" "}
              <span>
                {element.value.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
            </p>
            <p>
              Disponivel para compra:{" "}
              <span>{element.avaliable ? "Sim" : "Não"}</span>
            </p>
          </div>
          <button onClick={() => deleteProduct(element.id)}>Excluir</button>
        </li>
      ))}
    </StyledCard>
  ) : null;
};
