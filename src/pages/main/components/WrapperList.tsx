import React from "react";
import styled from "styled-components";
import { listGames } from "../../../@types/get";
import { Filter, Loader, Sort } from "../../../components";
import { Status } from "../../../redux/slices/gamesSlices";
import { ButtonTop } from "./ButtonTop";
import { Cart } from "./Cart";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const ListItems = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 10px;
  @media screen and (min-width: 981px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 10px;
  }
  @media screen and (min-width: 1100px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 10px;
  }
  @media screen and (min-width: 1880px) {
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 10px;
  }
`;
const SearchParams = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media screen and (max-width: 420px) {
    flex-direction: column;
    align-items: center;
  }
  @media screen and (min-width: 980px) {
    display: none;
  }
`;

interface List {
  statusPagination: string;
  status: string;

  items: listGames[];
  scrollTop: () => void;
  heightTop: boolean;
}

export const WrapperList = ({ statusPagination, status, items, scrollTop, heightTop }: List) => {
  return (
    <Wrapper>
      <SearchParams>
        <Sort />
        <Filter />
      </SearchParams>
      <ListItems>
        {status !== Status.LOADING ? (
          items.map((elem: listGames) => (
            <Cart
              name={elem.name}
              rating={elem.rating}
              released={elem.released}
              img={elem.background_image}
              id={elem.id}
              key={elem.id}
            />
          ))
        ) : (
          <Loader />
        )}
        {statusPagination !== Status.SUCCESS && <Loader />}
      </ListItems>
      <ButtonTop top={heightTop} click={() => scrollTop()} />
    </Wrapper>
  );
};
