import { CartGame, InfoBlock, Line, Text, Wrapper, Button } from "../../../components/index";
import { Slider } from "./slider/slider";

interface propFullCart {
  id: number;
  name: string;
  rating: number;
  released: string;
  img: string;
  description: string;
  website: string;
}

export const FullCart = ({ id, name, rating, released, img, description, website }: propFullCart) => {
  return (
    <CartGame full>
      <Slider id={id} img={img} />
      <InfoBlock>
        <Line>
          <Text size="24" full>
            {name}
          </Text>
          <Text size="24" full color="gold" rating>
            {rating}
          </Text>
        </Line>
        <Text full>Date released: {released}</Text>
        <Text full>
          Website:{" "}
          <a target="_blank" href={website}>
            {name}
          </a>
        </Text>
        <Text full size="22">
          About
        </Text>
        <Text full>{description}</Text>
      </InfoBlock>
    </CartGame>
  );
};
