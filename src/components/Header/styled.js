import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 200px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
`;
export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const DivIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background-color: black;
  width: 48px;
  height: 48px;
`;
export const InputText = styled.input`
  height: 47px;
  width: 97%;
  border-radius: 4px;
  padding: 0 10px;
  color: black;
  font-size: 16px;
`;
