import styled from "styled-components";
import * as Color from "color";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(https://www.bing.com${(props) => props.bgImage});
  background-repeat: no-repeat;
  background-size: cover;
`;
export const Content = styled.div`
  display: flex;
  width: 95%;
  height: 600px;
  justify-content: space-around;
  font-weight: 700;
  background-color: ${(props) => Color(props.color).alpha(0.5)};
  border-radius: 15px;
  h1 {
    margin-top: 3rem;
  }
`;
