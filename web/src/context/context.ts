import { createContext } from "react";

interface GameContextProps {
  selectedCard: string;
  setSelectedCard: (casa: string) => void;
  casa: string;
  setCasa: (casa: string) => void;
}

export const GameContext = createContext({} as GameContextProps);
