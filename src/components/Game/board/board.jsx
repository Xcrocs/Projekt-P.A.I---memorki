import { useContext } from "react";
import GameContext from "../../../contexts/gameContext/GameContext";
import Square from "./square/square";

const Board = () => {
  const { cards, setCards } = useContext(GameContext);

  return (
    <div>
      {cards.map((card) => (
        <Square />
      ))}
    </div>
  );
};

export default Board;
