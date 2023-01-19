import React, { useState } from "react"
import { GameContext } from "./context"

interface GameProviderProps {
  children: React.ReactNode
}

export const GameContextProvider = ({ children }: GameProviderProps) => {
  const [casa, setCasa] = useState('')
  const [selectedCard, setSelectedCard] = useState('')
  // const [cardPosition, setCardPosition] = useState({ top: 0, left: 0 })

  return (
    <GameContext.Provider value={{
      casa, setCasa, selectedCard, setSelectedCard
      //cardPosition, setCardPosition
    }}>
      {children}
    </GameContext.Provider>
  )
}
