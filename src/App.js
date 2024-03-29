import { Routes, Route } from "react-router-dom";

import Header from "./components/organisms/Header";
import NavBar from "./components/organisms/NavBar";
import {
  StyledContent,
  StyledHome,
  StyledDiv,
} from "./components/styles/home.styled";
import AlbumDetail from "./pages/AlbumDetail";
import Favourites from "./pages/Favourites";
import Home from "./pages/Home";

function App() {
  return (
    <StyledHome className="App">
      <NavBar />
      <StyledContent>
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favs" element={<Favourites />} />
            <Route path="/:id" element={<AlbumDetail />} />
          </Routes>
        </div>
      </StyledContent>
    </StyledHome>
  );
}

export default App;
