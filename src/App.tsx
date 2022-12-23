import { Routes, Route } from "react-router-dom";
import { Game, Main } from "./pages/index";
import styled from "styled-components";
import { Header } from "./components/index";
import { GameLink, MainLink } from "./constants/pageLink";

const BlockApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainBlock = styled.main`
  display: flex;
  justify-content: center;
  margin: 0 auto;

  @media screen and (max-width: 980px) {
    max-width: 480px;
  }
`;

function App() {
  return (
    <BlockApp>
      <Header />
      <MainBlock>
        <Routes>
          <Route path={MainLink} element={<Main />} />
          <Route path={GameLink} element={<Game />} />
        </Routes>
      </MainBlock>
      <footer></footer>
    </BlockApp>
  );
}

export default App;
