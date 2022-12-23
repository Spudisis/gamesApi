import { ImageBlock } from "../../../../components/index";
import { Screenshots } from "../../../../@types/get";

interface slider {
  length: number;
  offset: number;
  countImg: number;
  images: Screenshots[];
  handleOver: (n: string) => void;
  handleOut: (n: string) => void;
  handleClick: (n: string) => void;
}

export const SliderView = ({ length, offset, countImg, images, handleOver, handleOut, handleClick }: slider) => {
  return (
    <div>
      <ImageBlock slider offset={offset} countImg={countImg}>
        <button
          onMouseOver={() => {
            countImg !== 0 && handleOver("back");
          }}
          onMouseOut={() => {
            countImg !== 0 && handleOut("back");
          }}
          onClick={() => {
            handleClick("back");
          }}
        ></button>
        <div>{images && images.map((elem: Screenshots) => <img src={elem.image} alt="" key={elem.id} />)}</div>
        <button
          onMouseOver={() => {
            length - 1 !== countImg && handleOver("next");
          }}
          onMouseOut={() => {
            length - 1 !== countImg && handleOut("next");
          }}
          onClick={() => {
            handleClick("next");
          }}
        ></button>
      </ImageBlock>
    </div>
  );
};
