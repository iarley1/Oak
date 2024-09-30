import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        font-family: "Fredoka", sans-serif;
    }

 main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
 }

 .container {
    display: flex;
    justify-content: space-between;
    width: 1200px;
    padding: 0 20px;
    margin-top: 20px;
    max-width: 100%;
 }

 @media (max-width: 660px) {
   .container {
      flex-direction: column;
   }
 }
`;
