import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import NavBar from "./components/NavBar";
import {
  StyledContent,
  StyledHome,
  StyledDiv,
} from "./components/styles/home.styled";
import Favourites from "./pages/Favourites";
import Home from "./pages/Home";

function App() {
  return (
    <StyledHome className="App">
      <NavBar />
      <StyledContent>
        <Header />
        <StyledDiv>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favs" element={<Favourites />} />
          </Routes>
        </StyledDiv>
      </StyledContent>
    </StyledHome>
    /*     <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favs" element={<Favourites />} />
      </Routes>
    </div>
  ); */
  );
}

export default App;
