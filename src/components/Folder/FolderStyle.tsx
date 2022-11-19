import styled from "styled-components";
export const Section: any = styled.section`
  background-color: #ced8ed;
  height: 100vh;
  position: relative;
  width: 100%;
  .middle {
    position: absolute;
    background-color: white;
    margin-top: 100px;
    margin-left: 15%;
    width: 70%;
    border-radius: 5px;
  }
  .root {
    margin-left: 20px;
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    svg {
      height: 40px;
      width: 25px;
      margin-right: 10px;
    }
    .root-add {
      color: green;
      font-size: 23px;
      margin-left: 10px;
      cursor: pointer;
    }
    .root-title {
      background-color: yellow;
      width: auto;
      padding-left: 10px;
      padding-right: 10px;
      border-radius: 10px;
    }
  }
  .root-folder {
    /* margin-left: 90px; */
    padding-bottom: 20px;
    margin-top: 10px;
    .subfolder {
      display: flex;
      .subfolder-heading {
        background-color: yellow;
        width: 200px;
        padding-left: 10px;
        padding-right: 10px;
        border-radius: 10px;
        margin-bottom: 5px;
      }
      svg {
        height: 40px;
        width: 25px;
        margin-right: 10px;
        cursor: pointer;
      }
      .root-add {
        color: green;
        font-size: 23px;
        margin-left: 30px;
        cursor: pointer;
      }
      .root-del {
        color: red;
        font-size: 23px;
        margin-left: 10px;
        cursor: pointer;
      }
    }
  }
`;
