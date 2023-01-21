'use client'

import css from './home.module.css'
import { Tabuleiro, Peca } from '@/components';

export default function Home() {

  const bombas = [...Array(6)]
  const soldados = [...Array(8)]

  return (
    <div className={css.page}>
      <Tabuleiro />
      <div className={css.cards}>
        <Peca id="bandeira" nome='Bandeira' />
        {
          bombas.map((_, index) => (<Peca key={index} nome='Bomba' id={`bomba-${index}`} />))
        }
        {
          soldados.map((_, index) => (<Peca key={index} nome='Soldado' id={`soldado-${index}`} />))
        }
      </div>
    </div>
  )
}
