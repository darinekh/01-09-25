// src/App.jsx
import React from "react";
import PlayersList from "./PlayersList";

function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-6 text-blue-700">
        Tunisian Football Players ⚽
      </h1>
      <PlayersList />
    </div>
  );
}

export default App;
