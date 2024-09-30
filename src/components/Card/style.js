import styled from "styled-components";

export const StyledCard = styled.ul`
  display: flex;
  flex-direction: column;
  border: 1px solid #DCDCDC;
  border-radius: 8px;
  padding: 20px;
  width: 400px;
  gap: 10px;

  .order-button {
    padding: 10px;
    cursor: pointer;
  }

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #DCDCDC;
    padding: 20px;
    border-radius: 8px;
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
`;
