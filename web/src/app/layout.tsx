"use client"

import { GameContextProvider } from '@/context'
import './global.css'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <GameContextProvider>
      <html lang="pt-br">
        <head />
        <body>{children}</body>
      </html>
    </GameContextProvider>
  )
}
