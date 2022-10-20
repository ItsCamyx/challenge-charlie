import styled from "styled-components";
import * as Color from "color";

export const Content = styled.div`
  display: flex;
  width: 100%;
  min-height: 600px;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  font-weight: 700;
  background-color: ${(props) => Color(props.color).alpha(0.5)};
  border-radius: 15px;
  margin-top: 16px;

  p {
    font-size: 16px;
  }
`;
export const ContainerWeatherData = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;
export const ContentImgLeft = styled.div`
  display: flex;
  img {
    width: 300px;
    height: 300px;
  }
`;
export const ContentDetailsRight = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  background-color: ${(props) => Color(props.color)};
`;

export const TomorrowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;
export const NextDaysContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;
