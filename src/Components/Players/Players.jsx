import { useEffect, useState } from "react";
import Player from "../Player/Player";

const Players = ({handleChossePlayer}) => {
  const [players , setPlayers] = useState([]);

  useEffect(() => {
    fetch('players.json')
    .then(res => res.json())
    .then(data => setPlayers(data));
  },[])

  return (
    <div className="grid md:grid-cols-3 gap-5 grid-cols-1 mb-12">
        {
          players.map(p => <Player
              key={p.id}
            handleChossePlayer={handleChossePlayer}
             p = {p}  ></Player> )
        } 
    </div>
  );
};

export default Players;