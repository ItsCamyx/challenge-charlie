import SearchIcon from "@mui/icons-material/TravelExplore";
import { Container, DivIcon, InputText, SearchContainer } from "./styled";
export const Header = () => {
  return (
    <Container>
      <h1>ClimaWeb</h1>
      <SearchContainer>
        <DivIcon>
          <SearchIcon />
        </DivIcon>
        <div>
          <InputText type="text" placeholder="Digite aqui sua cidade" />
        </div>
      </SearchContainer>
    </Container>
  );
};
