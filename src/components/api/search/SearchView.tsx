import { ChangeEvent } from "react";
import styled from "styled-components";
const InputSearch = styled.input`
  font-size: 14px;

  font-weight: 400;
  width: 190px;
  padding: 0 12px 0 38px;
  line-height: 14px;
  color: hsla(0, 0%, 100%, 0.6);
  background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIG9wYWNpdHk9Jy40JyB3aWR0aD0nMzEnIGhlaWdodD0nMzEnIHZpZXdCb3g9JzAgMCAxNCAxNCc+PHBhdGggZmlsbD0nI0ZGRicgZmlsbC1ydWxlPSdldmVub2RkJyBkPSdNOS4yMDIgMy4wMjZhNC4zNjcgNC4zNjcgMCAxMC02LjE3NiA2LjE3NiA0LjM2NyA0LjM2NyAwIDEwNi4xNzYtNi4xNzZtNC41NDMgMTAuNzE5YS44NzUuODc1IDAgMDEtMS4yMzYgMGwtMi43NTEtMi43NTJjLTIuMzk1IDEuNzktNS43OTEgMS42MjEtNy45NjctLjU1NWE2LjExMyA2LjExMyAwIDAxMC04LjY0NyA2LjExMyA2LjExMyAwIDAxOC42NDcgMGMyLjE3NiAyLjE3NiAyLjM0NiA1LjU3Mi41NTUgNy45NjdsMi43NTIgMi43NTFjLjM0LjM0MS4zNC44OTQgMCAxLjIzNicvPjwvc3ZnPg==)
    no-repeat scroll 16px;
  background-size: 14px;
  background-color: hsla(0, 0%, 100%, 0.16);
  border: none;
  outline: none;
  transition: color 0.3s, background-color 0.3s, opacity 0.3s;
  border-radius: 16px;
  &:hover {
    background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxNCcgaGVpZ2h0PScxNCcgdmlld0JveD0nMCAwIDE0IDE0Jz48cGF0aCBmaWxsLXJ1bGU9J2V2ZW5vZGQnIGQ9J005LjIwMiAzLjAyNmE0LjM2NyA0LjM2NyAwIDEwLTYuMTc2IDYuMTc2IDQuMzY3IDQuMzY3IDAgMTA2LjE3Ni02LjE3Nm00LjU0MyAxMC43MTlhLjg3NS44NzUgMCAwMS0xLjIzNiAwbC0yLjc1MS0yLjc1MmMtMi4zOTUgMS43OS01Ljc5MSAxLjYyMS03Ljk2Ny0uNTU1YTYuMTEzIDYuMTEzIDAgMDEwLTguNjQ3IDYuMTEzIDYuMTEzIDAgMDE4LjY0NyAwYzIuMTc2IDIuMTc2IDIuMzQ2IDUuNTcyLjU1NSA3Ljk2N2wyLjc1MiAyLjc1MWMuMzQuMzQxLjM0Ljg5NCAwIDEuMjM2Jy8+PC9zdmc+)
      no-repeat scroll 16px;
    background-color: white;
    color: black;
  }
  @media screen and (min-width: 980px) {
    height: 50px;
    font-size: 20px;
    margin: 10px 0px;
    width: 100%;
    max-width: 400px;
  }
  @media screen and (max-width: 979px) {
    width: 100%;
    height: 28px;
  }
`;

interface search {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
export const SearchView = ({ handleChange }: search) => {
  return (
    <InputSearch onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)} placeholder="Найти"></InputSearch>
  );
};
