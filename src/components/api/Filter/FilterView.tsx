import { platform } from "../../../@types/get";
import { Wrapper, Modal, OrderBy } from "../searchParamStyled";

interface Filter {
  modal: boolean;
  setModal: (modal: boolean) => void;
  platforms: platform[];
  handleClickLi: (n: number, name: string) => void;
  namePlatform: string;
}

export const FilterView = ({ modal, setModal, platforms, handleClickLi, namePlatform }: Filter) => {
  return (
    <Wrapper>
      <OrderBy>
        Select:
        <button onClick={() => setModal(!modal)}>{namePlatform}</button>
        {modal && (
          <Modal overflow="auto" height="300">
            <ul>
              <li onClick={() => handleClickLi(0, "any")}>any</li>
              {platforms.length !== 0 &&
                platforms.map((elem: platform) => (
                  <li onClick={() => handleClickLi(elem.id, elem.name)} key={elem.id}>
                    {elem.name}
                  </li>
                ))}
            </ul>
          </Modal>
        )}
      </OrderBy>
    </Wrapper>
  );
};
