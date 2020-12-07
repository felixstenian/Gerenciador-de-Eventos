import styled from "styled-components";
import { shade } from "polished";

import background from "../../assets/fundo.png";

export const Container = styled.div`
  height: 100vh;
  
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  align-items: center;

  background: rgb(81, 172, 255);

  width: 25vw;

  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 5px;
    width: 30vw;
    padding: 20px;
    margin-right: 150px;
    background: #fff;

    > a {
      color: rgba(0, 0, 0, 0.7);
      font-size: 1.1rem;
      opacity: 0.8;
      text-decoration: none;
      transition: background 0.2s;

      display: flex;
      align-items: center;

      svg {
        margin-right: 7px;
      }

      &:hover {
        /* color: ${shade(0.05, "rgba(0, 0, 0, 0.6)")}; */
        opacity: 1;
      }
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${background}) no-repeat;
  background-size: cover;
`;
