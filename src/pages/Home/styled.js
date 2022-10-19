import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: ${(props) => props.inputBgImg};
  background-repeat: no-repeat;
  background-size: cover;
`;
