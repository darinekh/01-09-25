import React from "react";
import Player from "./Player";
import players from "./players";
// Conteneur principal de la liste des joueurs
    // Utilisation de Tailwind pour le style :
function PlayersList() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-wrap justify-center gap-6 p-6">
      {players.map((player, index) => (
        <Player key={index} {...player} />
      ))}
    </div>
  );
}

export default PlayersList;
