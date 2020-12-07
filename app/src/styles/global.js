import { createGlobalStyle } from "styled-components";
import 'antd/dist/antd.css';

export default createGlobalStyle`
  :root {
    font-size: 60%;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
      outline: 0;
    }

  /* html, body, #root {
    height: 100vh;
  } */

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font-family: "Poppins";
    font-size: 1.6rem;
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }


  @media (min-width: 700px) {
    :root {
      font-size: 70%
    }
  }

`;
