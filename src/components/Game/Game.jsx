import { useContext } from "react";
import GameContext from "../../contexts/gameContext/GameContext";
import Statistics from "./statistics/statistics";
import Board from "./board/board";

const Game = () => {
  const { isGameActive, setIsGameActive } = useContext(GameContext);

  return (
    <div>
      <div>{isGameActive && <Board />}</div>
      <Statistics></Statistics>
    </div>
  );
};

export default Game;
