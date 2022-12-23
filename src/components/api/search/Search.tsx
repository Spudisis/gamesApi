import { ChangeEvent, useCallback } from "react";

import _debounce from "lodash.debounce";
import { useAppDispatch } from "../../../redux/hooks";
import { setSearch } from "../../../redux/slices/axiosParams";
import { SearchView } from "./SearchView";
import { MainLink } from "../../../constants/pageLink";
import { useLocation, useNavigate } from "react-router-dom";

export const Search = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    debounceFn(value);
  };
  const debounceFn = useCallback(
    _debounce((value: string) => {
      if (location.pathname !== MainLink) navigate(MainLink);

      dispatch(setSearch(value));
    }, 300),
    []
  );
  return <SearchView handleChange={handleChange} />;
};
