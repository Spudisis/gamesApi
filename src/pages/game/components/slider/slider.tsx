import React from "react";
import { ScreenshotsGame } from "../../../../api/index";
import { ImageBlock, Loader } from "../../../../components/index";
import { Screenshots } from "../../../../@types/get";
import { SliderView } from "./sliderView";

interface SliderProp {
  id: number;
  img: string;
}

export const Slider = ({ id, img }: SliderProp) => {
  const [offset, setOffset] = React.useState(0);
  const [countImg, setCountImg] = React.useState(0);
  const [images, setImg] = React.useState<Screenshots[]>([]);
  const [status, setStatus] = React.useState(false);
  const getImage = async (id: string) => {
    const data = await ScreenshotsGame(id);
    console.log(data.data);
    setImg(data.data.results);
    setStatus(true);
  };

  React.useEffect(() => {
    getImage(id.toString());
  }, [id]);
  React.useEffect(() => {
    let timerSlide = setTimeout(() => {
      images.length - 1 !== countImg ? setCountImg((countImg) => countImg + 1) : setCountImg(0);
    }, 5000);
    return () => {
      clearTimeout(timerSlide);
    };
  }, [countImg]);
  const handleOver = (button: string) => {
    button === "next" ? setOffset((offset) => offset - 50) : setOffset((offset) => offset + 50);
  };
  const handleOut = (button: string) => {
    button === "next" ? setOffset((offset) => offset + 50) : setOffset((offset) => offset - 50);
  };
  const handleClick = (button: string) => {
    if (countImg === images.length - 1 && button === "next") {
      setOffset((offset) => offset - 50);
      setCountImg(0);
    } else if (countImg === 0 && button === "back") {
      setCountImg(images.length - 1);
      setOffset((offset) => offset + 50);
    } else {
      button === "next"
        ? images.length - 1 !== countImg && setCountImg((countImg) => countImg + 1)
        : countImg !== 0 && setCountImg((countImg) => countImg - 1);
      if (countImg !== images.length - 1)
        if (countImg + 1 === images.length - 1 && button === "next") {
          setOffset((offset) => offset + 50);
        }
      if (countImg !== 0)
        if (countImg - 1 === 0 && button === "back") {
          setOffset((offset) => offset - 50);
        }
    }
  };

  return (
    <>
      {!status ? (
        <Loader />
      ) : images.length !== 0 ? (
        <SliderView
          length={images.length}
          offset={offset}
          countImg={countImg}
          images={images}
          handleOver={(n: string) => handleOver(n)}
          handleOut={(n: string) => handleOut(n)}
          handleClick={(n: string) => handleClick(n)}
        />
      ) : (
        <ImageBlock>
          <img src="" alt={img} />
        </ImageBlock>
      )}
    </>
  );
};
