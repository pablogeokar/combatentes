'use client'

import styles from './home.module.scss'
import { GameController } from 'phosphor-react'

export default function Home() {

  return (
    <div className={styles.page}>
      <div className={styles.salas}>

        <GameController size={96} className={styles.icon} />
        <h1>Entre em uma</h1>
        <h1>PARTIDA</h1>
        <h2>ou crie a sua!</h2>
        <hr />

        <div className={styles.partidas}>
          <span>Pablo George</span>
          <h4>X</h4>
          <span>Romário Torres</span>
          <button className={styles.btn}>Jogar</button>
        </div>
        <hr />

        <div className={styles.partidas}>
          <span>Pablo George</span>
          <h4>X</h4>
          <span>Romário Torres</span>
          <button className={styles.btn}>Jogar</button>
        </div>
        <hr />


      </div>


      <div className={styles.footer} />

    </div>
  )
}
