import BingAPI from "../../services/WallpapperBing";
import { Container, Content } from "./styled";
import { useState, useEffect } from "react";

export const Home = () => {
  const [wallpaper, setWallpaper] = useState("");
  BingAPI.get().then((response) => {
    setWallpaper(response.data.images[0].url);
  });
  return (
    <Container bgImage={wallpaper}>
      <Content color="yellow">
        <h1>Teste</h1>
      </Content>
    </Container>
  );
};
