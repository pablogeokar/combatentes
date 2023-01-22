"use client"

import { GameContextProvider } from '@/context'
import './global.css'
import Providers from './providers'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Providers>
      <GameContextProvider>
        <html lang="pt-br">
          <head />
          <body>{children}</body>
        </html>
      </GameContextProvider>
    </Providers>
  )
}
