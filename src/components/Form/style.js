import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid #dcdcdc;
  padding: 20px;
  height: max-content;

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

  input {
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

  .input-name {
    border-color: ${(props) => (props.errorsName ? "#ff0000" : "#696969")};
  }

  .input-description {
    border-color: ${(props) =>
      props.errorsDescription ? "#ff0000" : "#696969"};
  }

  .input-value {
    border-color: ${(props) => (props.errorsValue ? "#ff0000" : "#696969")};
  }

  .erro-input {
    color: #ff0000;
    font-size: 14px;
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

  @media (min-width: 660px) {
    width: 350px;
  }
`;
