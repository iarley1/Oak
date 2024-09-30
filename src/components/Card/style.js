import styled from "styled-components";

export const StyledCard = styled.ul`
  display: flex;
  flex-direction: column;
  border: 1px solid #dcdcdc;
  border-radius: 8px;
  padding: 20px;
  gap: 10px;
  height: max-content;

  .order-button {
    padding: 10px;
    cursor: pointer;
    border: 1px solid #dcdcdc;
    background-color: ${(props) =>
      props.order === false ? "#ffffff" : "#212529"};
    border-radius: 4px;
    color: ${(props) => (props.order === false ? "#000000" : "#ffffff")};
    &:hover {
      background-color: #212529;
      color: #ffffff;
      transition: 0.2s ease-in;
    }
  }

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #dcdcdc;
    padding: 20px;
    border-radius: 8px;
  }

  p {
    color: #212529;
  }

  li div > h2 {
    font-weight: 300;
  }

  li button {
    cursor: pointer;
    padding: 5px 10px;
    background-color: #ffffff;
    border-radius: 4px;
    font-weight: 600;
    border: none;
    &:hover {
      background-color: #700000;
      color: #ffffff;
      transition: 0.3s ease-in;
    }
  }

  @media (min-width: 660px) {
    width: 450px;
  }
`;
