import BingAPI from "../../services/WallpapperBing";
import { Container } from "./styled";
import { useState, useEffect } from "react";
import { Header } from "../../components/Header/Header";
import { Middle } from "../../components/Middle/Middle";
export const Home = () => {
  const [wallpaper, setWallpaper] = useState("");
  BingAPI.get().then((response) => {
    setWallpaper(response.data.images[0].url);
  });
  return (
    <Container bgImage={wallpaper}>
      <Header />
      <Middle />
    </Container>
  );
};
