import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 120px;
  background-color: #ffffff;
  box-shadow: 0px 4px 32px -12px #00000040;

  .header-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1200px;
    padding: 0 20px;
  }

  .header-box a {
    text-decoration: none;
    background-color: #E9ECEF;
    padding: 10px 15px;
    border-radius: 6px;
    color: #212529;
    font-weight: 600;
    font-size: 0.875rem;
  }

  .header-box a:hover {
    background-color: #212529;
    transition: 0.3s;
    color: #ffffff;
  }

  .header-box h1 {
    cursor: pointer;
  }

  h1 > img {
    width: 120px;
  }
`;
