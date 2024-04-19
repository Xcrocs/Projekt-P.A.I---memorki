import { createContext, useState } from "react";
import cardsStuff from "../../../recources/cards.json";

export const GameContext = createContext();

export const GameProvider = (props) => {
  const { children } = props;
  const [cards, setCards] = useState(cardsStuff);
  const [timeElapsed, setTimeElapsed] = useState();
  const [isGameActive, setIsGameActive] = useState();

  return (
    <GameContext.Provider
      value={{
        cards,
        setCards,
        timeElapsed,
        setTimeElapsed,
        isGameActive,
        setIsGameActive,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContext;
