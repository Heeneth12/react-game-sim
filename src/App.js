// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateList from "./pages/CreateList";
import About from "./pages/About";
import GamePlayer from "./pages/GamePlayer";
import { GameProvider } from "./GameContext"; // Import the GameProvider

function App() {
  return (
    <GameProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateList />} />
          <Route path="/about" element={<About />} />
          <Route path="/game-player" element={<GamePlayer />} />
        </Routes>
      </Router>
    </GameProvider>
  );
}

export default App;
