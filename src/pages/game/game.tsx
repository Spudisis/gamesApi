import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Loader } from "../../components/index";
import { ButtonBack } from "./components/ButtonBack";
import { FullCart } from "./components/Cart";
import styled from "styled-components";
import { gameDetail } from "../../@types/get";
import { InfoGame } from "../../api/index";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Game = () => {
  let { id } = useParams();
  const [game, setGame] = React.useState<gameDetail>({
    id: 0,
    slug: "string",
    name: "string",
    name_original: "string",
    description: "string",
    description_raw: "string",
    metacritic: 0,
    metacritic_platforms: [
      {
        metascore: 0,
        url: "string",
      },
    ],
    released: "2022-12-20",
    tba: true,
    updated: "2022-12-20T17:03:08Z",
    background_image: "http://example.com",
    background_image_additional: "string",
    website: "http://example.com",
    rating: 0,
    rating_top: 0,
    ratings: {},
    reactions: {},
    added: 0,
    added_by_status: {},
    playtime: 0,
    screenshots_count: 0,
    movies_count: 0,
    creators_count: 0,
    achievements_count: 0,
    parent_achievements_count: "string",
    reddit_url: "string",
    reddit_name: "string",
    reddit_description: "string",
    reddit_logo: "http://example.com",
    reddit_count: 0,
    twitch_count: "string",
    youtube_count: "string",
    reviews_text_count: "string",
    ratings_count: 0,
    suggestions_count: 0,
    alternative_names: ["string"],
    metacritic_url: "string",
    parents_count: 0,
    additions_count: 0,
    game_series_count: 0,
    esrb_rating: {
      id: 0,
      slug: "everyone",
      name: "Everyone",
    },
    platforms: [
      {
        platform: {
          id: 0,
          slug: "string",
          name: "string",
        },
        released_at: "string",
        requirements: {
          minimum: "string",
          recommended: "string",
        },
      },
    ],
  });
  const navigate = useNavigate();
  React.useEffect(() => {
    getData();
  }, [id]);

  const getData = async () => {
    const data = await InfoGame(Number(id));
    console.log(data.data);
    setGame(data.data);
  };

  const getBack = () => {
    navigate("/");
  };

  return (
    <>
      {game && id ? (
        <Wrapper>
          <FullCart
            id={game.id}
            name={game.name}
            rating={game.rating}
            released={game.released}
            img={game.background_image}
            description={game.description_raw}
            website={game.website}
          />
        </Wrapper>
      ) : (
        <Loader />
      )}
      <ButtonBack getBack={() => getBack()} />
    </>
  );
};
