import { useContext } from "react";
import { GameContext } from "./context";

export const useGameContext = () => {
  const context = useContext(GameContext);
  return context;
};
