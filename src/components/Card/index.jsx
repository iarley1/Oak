import { useContext } from "react";
import { StyledCard } from "./style";
import { ProductContext } from "../../context/productContext";

export const Card = () => {
  const { product, setProduct } = useContext(ProductContext);

  const deleteProduct = (id) => {
    const newProduct = product.filter((product) => product.id !== id);
    setProduct(newProduct);
  };

  return product.length !== 0 ? (
    <StyledCard>
      <button className="order-button">Ordem crescente</button>
      {product.map((element) => (
        <li key={element.id}>
          <div>
            <h2>Nome: {element.name}</h2>
            <span>
              Valor:{" "}
              {element.value.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
          </div>
          <button onClick={() => deleteProduct(element.id)}>Excluir</button>
        </li>
      ))}
    </StyledCard>
  ) : null;
};
