import Weather from "../../assets/WeatherIcons/2.svg";
import {
  ContainerWeatherData,
  Content,
  ContentImgLeft,
  ContentDetailsRight,
  TomorrowContainer,
  NextDaysContainer,
} from "./styled";
export const Middle = () => {
  return (
    <Content color="#FFEF5C">
      <div>
        <p>Previsão do tempo</p>
        <p>Rio de Janeiro, RJ</p>
      </div>
      <ContainerWeatherData>
        <ContentImgLeft>
          <img src={Weather} alt=""></img>
        </ContentImgLeft>
        <ContentDetailsRight color="#F5D90A">
          <div>
            <p>Hoje</p>
            <p>32º</p>
          </div>
          <div>
            <p>Ensolarado</p>
          </div>
          <div>
            <p>Vento: NO 6.4KM/H</p>
            <p>Umidade: 80%</p>
            <p>Pressão: 1003hPA</p>
          </div>
        </ContentDetailsRight>
      </ContainerWeatherData>

      <TomorrowContainer>
        <p>Amanhã</p>
        <p>32º</p>
      </TomorrowContainer>

      <NextDaysContainer>
        <p>Depois de Amanhã</p>
        <p>30º</p>
      </NextDaysContainer>
    </Content>
  );
};
