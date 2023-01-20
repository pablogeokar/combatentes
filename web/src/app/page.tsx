'use client'

import css from './home.module.css'
import { Tabuleiro, Card } from '@/components';

export default function Home() {

  const bombas = [...Array(6)]
  const soldados = [...Array(8)]

  return (
    <>
      <div className={css.page}>
        <Tabuleiro />
      </div>
      <div style={{ display: 'flex', padding: '16px', gap: '16px' }}>
        <Card id="bandeira" cardType='Bandeira' />
        {
          bombas.map((_, index) => (<Card key={index} cardType='Bomba' id={`bomba-${index}`} />))
        }
        {
          soldados.map((_, index) => (<Card key={index} cardType='Soldado' id={`soldado-${index}`} />))
        }
      </div>
    </>
  )
}
