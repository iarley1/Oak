import { StyledHeader } from "./style";
import logo from "../../asserts/img/logo.jpeg";

export const Header = () => {
  return (
    <StyledHeader>
      <div className="header-box">
        <h1>
          <img src={logo} alt="" />
        </h1>
        <a target="_blank" href="https://www.oaktecnologia.com/">Mais informações</a>
      </div>
    </StyledHeader>
  );
};
