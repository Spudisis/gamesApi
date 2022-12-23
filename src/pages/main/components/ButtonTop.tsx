import { AbsoluteButton } from "../../../components";

type Top = {
  click: () => void;
  top: boolean;
};

export const ButtonTop = ({ click, top }: Top) => {
  return (
    <AbsoluteButton goTop top={top} onClick={() => click()}>
      Top
    </AbsoluteButton>
  );
};
