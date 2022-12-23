import React from "react";
import { platforms } from "../../../api/index";
import { useAppDispatch } from "../../../redux/hooks";
import { setPlatforms } from "../../../redux/slices/axiosParams";
import { platform } from "../../../@types/get";
import { FilterView } from "./FilterView";
import { useLocation, useNavigate } from "react-router-dom";
import { MainLink } from "../../../constants/pageLink";

export const Filter = () => {
  const [modal, setModal] = React.useState(false);
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const [platformsMas, setPlatformsMas] = React.useState<platform[]>([]);
  const [selectPlatform, setSelectPlatform] = React.useState(0);
  const [namePlatform, setNamePlatform] = React.useState("any");
  React.useEffect(() => {
    getPlatforms();
  }, []);

  React.useEffect(() => {
    dispatch(setPlatforms(selectPlatform));
  }, [selectPlatform]);

  const getPlatforms = async () => {
    const data = await platforms();
    setPlatformsMas(data.results);
  };

  const handleClickLi = (id: number, name: string) => {
    setSelectPlatform(id);
    setModal(false);
    if (location.pathname !== MainLink) navigate(MainLink);
    setNamePlatform(name);
  };
  return (
    <FilterView
      platforms={platformsMas}
      modal={modal}
      setModal={(n: boolean) => setModal(n)}
      handleClickLi={(n: number, name: string) => handleClickLi(n, name)}
      namePlatform={namePlatform}
    />
  );
};
