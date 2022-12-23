import styled from "styled-components";
import { css } from "styled-components";
export const AbsoluteButton = styled.button`
  position: fixed;
  bottom: 25px;
  right: 25px;
  width: 80px;
  height: 50px;
  background-color: #151515;
  opacity: 0.9;
  color: white;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  &:hover {
    opacity: 1;
    border: 1px solid #151515;
    background-color: #202020;
  }
  @media screen and (min-width: 880px) {
    width: 140px;
    height: 90px;
    font-size: 24px;
    background-color: #202020;
    &:hover {
      opacity: 1;
      border: 1px solid #151515;
      background-color: #151515;
      color: gold;
    }
  }
  transition: 0.3s;
  ${({ goTop }: any) =>
    goTop &&
    css`
      display: ${({ top }: any) => (top ? "block" : "none")};
    `};
`;
