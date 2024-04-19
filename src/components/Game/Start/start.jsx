import { useContext } from "react";
import GameContext from "../../../contexts/gameContext/GameContext";

const start = () => {
  const { isGameActive, setIsGameActive } = useContext(GameContext);

  const handleButtonClick = () => {
    setIsGameActive(true);
  };

  return <button onClick={handleButtonClick}></button>;
};
