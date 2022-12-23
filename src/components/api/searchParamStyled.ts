import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  @media screen and (max-width: 420px) {
    width: 100%;
  }
`;
export const OrderBy = styled.div`
  border-radius: 15px;
  height: 55px;
  display: flex;
  align-items: center;
  color: white;
  width: auto;
  min-width: 150px;
  padding: 10px 16px;
  background-color: hsla(0, 0%, 100%, 0.07);
  border-radius: 8px;
  font-size: 16px;
  border: none;
  transition: color 0.3s;
  position: relative;
  margin: 0px 10px;
  button {
    color: white;
    outline: none;
    border: none;

    background-color: rgba(0, 0, 0, 0);
    cursor: pointer;
    transition: color 0.5s;
    &:hover {
      color: rgba(255, 255, 255, 0.5);
    }
  }

  @media screen and (max-width: 420px) {
    margin: 5px 10px;
    width: 100%;
    justify-content: center;
    font-size: 20px;
  }

  @media screen and (max-width: 500px) {
    font-size: 12px;
  }
  @media screen and (max-width: 420px) {
    font-size: 16px;
  }
`;
export const Modal = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  height: ${({ height }: any) => (height ? height + "px" : "130px")};
  top: 60px;
  width: 180px;
  background-color: #202020;
  border-radius: 8px;
  left: 0px;
  z-index: 101;
  overflow: ${({ overflow }: any) => (overflow ? overflow : "hidden")};
  ul {
    height: inherit;
    width: 100%;
    padding: 0;
    margin: 0;
  }
  ul li {
    padding: 10px;
    color: white;
    text-align: center;
    list-style-type: none;
    transition: 0.3s;
    cursor: pointer;
    &:hover {
      background-color: black;
    }
  }
  @media screen and (max-width: 530px) {
    border-radius: 0px;
    position: fixed;
    right: 0;
    top: 0px;
    width: 100%;
    height: 100%;
  }
`;
