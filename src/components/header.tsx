import styled from "styled-components";
import { Filter, Search, Sort } from "./index";

const Wrapper = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  padding: 0px 10px;
  @media screen and (max-width: 979px) {
    height: 60px;
  }
  @media screen and (min-width: 980px) {
    justify-content: space-between;
  }
  @media screen and (max-width: 980px) {
    width: auto;
  }
  @media screen and (min-width: 1500px) {
    max-width: 1220px;
  }
  @media screen and (min-width: 1880px) {
    max-width: 1500px;
  }
`;
const HeaderBlock = styled.header`
  width: 100%;

  @media screen and (max-width: 980px) {
    width: auto;
  }
  @media screen and (min-width: 980px) {
    position: sticky;
    top: 0;

    background-color: #151515;
  }
`;
const BigBlock = styled.div`
  display: none;
  @media screen and (min-width: 980px) {
    display: flex;
    width: 900px;
    justify-content: flex-left;
  }
`;
export const Header = () => {
  return (
    <HeaderBlock>
      <Wrapper>
        <BigBlock>
          <Filter />
          <Sort />
        </BigBlock>
        <Search />
      </Wrapper>
    </HeaderBlock>
  );
};
