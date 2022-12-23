import styled from "styled-components";
import { AbsoluteButton } from "../../../components/index";

type ButtonBack = {
  getBack: () => void;
};

export const ButtonBack = ({ getBack }: ButtonBack) => {
  return <AbsoluteButton onClick={() => getBack()}>Back</AbsoluteButton>;
};
