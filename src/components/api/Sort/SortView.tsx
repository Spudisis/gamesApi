import { Wrapper, Modal, OrderBy } from "../searchParamStyled";

interface Sort {
  modal: boolean;
  setModal: (modal: boolean) => void;
  orderChange: string;
  ascDesc: boolean;
  setAscDesc: (ascDesc: boolean) => void;
  handleClickLi: (n: string) => void;
}
export const SortView = ({ modal, setModal, orderChange, ascDesc, setAscDesc, handleClickLi }: Sort) => {
  return (
    <Wrapper>
      <OrderBy>
        Order by:
        <button onClick={() => setModal(!modal)}>{orderChange}</button>
        <button onClick={() => setAscDesc(!ascDesc)}>{ascDesc ? "ᐯ" : "ᐱ"}</button>
        {modal && (
          <Modal>
            <ul>
              <li onClick={() => handleClickLi("relevance")}>Relevance</li>
              <li onClick={() => handleClickLi("released")}>Release date</li>
              <li onClick={() => handleClickLi("rating")}>Rating</li>
            </ul>
          </Modal>
        )}
      </OrderBy>
    </Wrapper>
  );
};
