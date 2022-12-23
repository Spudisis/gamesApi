import React from "react";

import { CartGame, ImageBlock, InfoBlock, Line, Text, Wrapper, Button } from "../../../components/index";
import { Link } from "react-router-dom";
import { GameLink } from "../../../constants/pageLink";

interface propCart {
  name: string;
  rating: number;
  released: string;
  img: string;
  id: number;
}

export const Cart = React.memo(({ name, rating, released, img, id }: propCart) => {
  return (
    <CartGame>
      <div>
        <ImageBlock>{img ? <img src={img} alt={name} /> : "not found"}</ImageBlock>
        <InfoBlock>
          <Line>
            <Text size="24">{name}</Text>
            <Text size="24" color="gold" rating>
              {rating}
            </Text>
          </Line>
          <Text>{released}</Text>
        </InfoBlock>
      </div>

      <Wrapper>
        <Link to={GameLink.slice(0, -3) + id}>
          <Button>Details</Button>
        </Link>
      </Wrapper>
    </CartGame>
  );
});
