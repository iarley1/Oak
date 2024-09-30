import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  gap: 10px;
  border: 1px solid #DCDCDC;
  padding: 20px;
  max-height: 390px;

  .input-box {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .input-box div {
    display: flex;
    gap: 5px;
    align-items: center;
  }

  .input-box input {
    height: 30px;
    border-radius: 6px;
    padding: 0 10px;
    outline: none;
    border: 1px solid #696969;
  }

  .input-box p {
    display: flex;
    gap: 5px;
    cursor: default;
  }

  .input-box div > input {
    cursor: pointer;
  }

  button {
    background: none;
    cursor: pointer;
    padding: 10px;
    border: 1px solid #696969;
    border-radius: 4px;

    &:hover {
        background-color: #202020;
        color: #ffffff;
        transition: 0.2s ease-in;
    }
  }
`;
