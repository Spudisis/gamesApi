import React from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import { MainLink } from "../../../constants/pageLink";

import { useAppDispatch } from "../../../redux/hooks";
import { selectAxiosParams, setAscDescParam, setOrder } from "../../../redux/slices/axiosParams";
import { SortView } from "./SortView";

export const Sort = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const { order, ascDesc } = useSelector(selectAxiosParams);
  const [orderChange, setOrderChange] = React.useState(order);
  const [ascDescP, setAscDesc] = React.useState(ascDesc);
  const [modal, setModal] = React.useState(false);
  React.useEffect(() => {
    setModal(false);
    dispatch(setOrder(orderChange));
  }, [orderChange]);
  React.useEffect(() => {
    orderChange !== "relevance" && dispatch(setAscDescParam(ascDescP));
  }, [ascDescP]);
  const handleClickLi = (n: string) => {
    setOrderChange(n);
    if (location.pathname !== MainLink) navigate(MainLink);
  };
  return (
    <SortView
      modal={modal}
      setModal={(modal) => setModal(modal)}
      orderChange={orderChange}
      ascDesc={ascDescP}
      setAscDesc={(n: boolean) => setAscDesc(n)}
      handleClickLi={(n: string) => handleClickLi(n)}
    />
  );
};
