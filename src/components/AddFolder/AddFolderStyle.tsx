import styled from "styled-components";
export const Section: any = styled.section`
  background-color: #ced8ed;
  height: 100vh;
  position: relative;
  width: 100%;
  .form {
    position: absolute;
    background-color: white;
    margin-top: 150px;
    margin-left: 25%;
    width: 50%;
    border-radius: 5px;
    .title {
      display: flex;
      justify-content: center;
      margin-top: 20px;
      h1 {
        font-family: Open Sans;
      }
    }
    .username {
      width: 90%;
      display: flex;
      margin-left: 5%;
      margin-top: 40px;
      padding-bottom: 10px;
      background: #f2f2f3;
      margin-bottom: 10px;
      border-radius: 10px;
    }
    input {
      background: transparent;
      border: none;
      width: 100%;
      height: 100%;
      outline: none;
      padding-left: 10px;
      padding-top: 15px;
      font-size: 21px;
    }

    input::placeholder {
      color: darkgray;
      font-size: 21px;
    }
    .button {
      display: flex;
      justify-content: space-around;
      padding-bottom: 30px;
      .cancle {
        width: 100px;
        background: #e30b28;
        padding-top: 10px;
        padding-bottom: 10px;
        margin-top: 20px;
        border-radius: 10px;
        font-size: 20px;
        transition: 0.4s;
        font-family: Open Sans;
        color: aliceblue;
        font-weight: bold;
      }
      .add {
        width: 100px;
        background: #138027;
        padding-top: 10px;
        padding-bottom: 10px;
        margin-top: 20px;
        border-radius: 10px;
        font-size: 20px;
        transition: 0.4s;
        font-family: Open Sans;
        color: aliceblue;
        font-weight: bold;
      }
      button:hover {
        width: 110px;
      }
    }
  }
`;
