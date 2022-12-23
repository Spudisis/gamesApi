import styled from "styled-components";
import { css } from "styled-components";

export const CartGame = styled.div`
  width: 100%;
  background-color: #202020;
  border-radius: 12px;
  margin: 10px 0px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (min-width: 1500px) {
    max-width: 400px;
    min-height: 350px;
  }
  ${({ full }: any) =>
    full &&
    css`
      @media screen and (min-width: 1500px) {
        max-width: none;
      }

      @media screen and (max-width: 500px) {
        width: 320px;
      }
      @media screen and (max-width: 320px) {
        width: 100%;
      }
      @media screen and (min-width: 980px) {
        width: 959px;
        height: auto;
      }
    `}
`;
export const ImageBlock = styled.div`
  width: 100%;
  object-fit: cover;

  img {
    // cursor: pointer;
    object-fit: cover;
    width: 480px;
    height: 270px;
    @media screen and (max-width: 1880px) {
      width: 100%;
      height: 200px;
      max-height: 200px;
    }
  }
  overflow: hidden;
  ${({ slider }: any) =>
    slider &&
    css`
      img {
        @media screen and (max-width: 500px) {
          width: 320px;
          height: 200px;
        }
        @media screen and (min-width: 500px) {
          width: 480px;
          height: auto;
          max-height: none;
        }
        @media screen and (min-width: 980px) {
          min-width: 959px;
          height: auto;
        }
      }
      display: flex;
      position: relative;
      transition: 0.3s;

      div {
        display: flex;
        position: relative;
        transition: 0.5s;
        right: ${({ countImg, offset }: any) => (countImg || offset ? countImg * 320 - offset + "px" : "0px")};
        @media screen and (min-width: 500px) {
          right: ${({ countImg, offset }: any) => (countImg || offset ? countImg * 480 - offset + "px" : "0px")};
        }
        @media screen and (min-width: 980px) {
          right: ${({ countImg, offset }: any) => (countImg || offset ? countImg * 959 - offset + "px" : "0px")};
        }
      }

      button {
        cursor: pointer;
        position: absolute;
        background-color: rgba(0, 0, 0, 0);
        border: none;
        outline: none;
        width: 100px;
        height: 100%;
        z-index: 100;
        @media screen and (min-width: 980px) {
          width: 200px;
        }
        &:first-child {
          left: 0;
          top: 0;
        }
        &:last-child {
          right: 0;
          top: 0;
        }
        &:hover {
          color: gold;
        }
      }
    `}
`;
export const InfoBlock = styled.div`
  color: white;
  padding: 10px;
`;
export const Line = styled.div`
  display: flex;
  p:first-child {
    padding-right: 10px;
  }
`;
export const Text = styled.p`
  margin: 0px;
  padding: 0px;
  font-size: ${({ size }: any) => (size ? size + "px" : "16px")};
  color: ${({ color }: any) => (color ? color : "white")};
  @media screen and (max-width: 500px) {
    font-size: 16px;
  }
  &::after {
    ${({ rating }: any) =>
      rating &&
      css`
        content: "★";
      `}
  }
  a {
    color: inherit;
    &:hover {
      color: rgba(255, 255, 255, 0.5);
    }
  }
  ${({ full }: any) =>
    full &&
    css`
      @media screen and (min-width: 980px) {
        font-size: ${({ size }: any) => (size ? +size + 10 + "px" : "20px")};
      }
    `}
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px;
`;
export const Button = styled.button`
  background-color: inherit;
  outline: none;
  color: white;
  border: none;
  border-bottom: 1px solid white;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    color: rgba(255, 255, 255, 0.5);
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  }
`;
