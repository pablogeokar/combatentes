'use client'

import styles from './home.module.scss'
import { GameController, Plus, PaperPlaneRight } from 'phosphor-react'

export default function Home() {

  return (
    <div className={styles.page}>
      <div className={styles.salas}>


        <h1>Entre em uma</h1>
        <h1>sala ou crie uma!</h1>
        <button className={styles.btnWhite}>Criar uma sala <Plus size={24} /></button>
        <hr />

        <div className={styles.partidas}>
          <span>Pablo George</span>
          <h4>X</h4>
          <span>Romário Torres</span>
          <button className={styles.btn}>Começar<PaperPlaneRight size={24} /></button>
        </div>
        <hr />

        <div className={styles.partidas}>
          <span>Pablo George</span>
          <h4>X</h4>
          <span>Romário Torres</span>
          <button className={styles.btn}>Começar<PaperPlaneRight size={24} /></button>
        </div>
        <hr />

        <div className={styles.partidas}>
          <span>Pablo George</span>
          <h4>X</h4>
          <button className={styles.btnEntrar}>Entre agora <GameController size={24} /></button>
        </div>
        <hr />


      </div>


      <div className={styles.footer} />

    </div>
  )
}
