import styled from "styled-components";

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;

  -moz-box-shadow: 3px 3px 5px 1px #ccc;
  -webkit-box-shadow: 3px 3px 5px 1px #ccc;
  box-shadow: 3px 3px 5px 1px #ccc;
`;

export const Content = styled.div`
  height: 10vh;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  nav {
    display: flex;
    align-items: center;

    img {
      width: 5vw;
    }

    h3 {
      font-size: 1.6rem;
      margin-left: 45px;
      p {
        font-size: 1.4rem;
      }
    }
  }

  aside {
    display: flex;
    align-items: center;
  }

  @media (max-width: 700px) {
    nav {
      img {
        width: 10vw;
      }
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #eee;
  align-items: center;

  strong {
    margin: 0 15px;
    font-size: 1.2rem;
    p {
      font-size: 10px;
      color: rgba(0, 170, 170, 0.9);
    }
  }

  img {
    width: 3vw;
    border-radius: 20px;
  }

  button {
    background: transparent;
    padding: 2px;
    height: 10%;
    color: #fff;
    border: 0;
    margin-left: 25px;
    margin-top: 7px;
  }

  div {
    text-align: right;
    margin-right: 10px;

    a {
      display: block;
      margin-top: 2px;
      font-size: 13px;
      color: #333;

      &:hover {
        color: #16fb80;
      }
    }
  }
`;
