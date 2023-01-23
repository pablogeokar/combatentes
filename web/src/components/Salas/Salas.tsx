import { useEffect, useState } from 'react'
import { GameController, Plus } from 'phosphor-react'
import { signIn, useSession } from 'next-auth/react'
import styles from './Salas.module.scss'

interface SalasData {
  id: string
  player1_id: string
  player1_name: string
  player2_id: string
  player2_name: string
}

export default function Salas() {
  const { data: session } = useSession()
  const [salas, setSalas] = useState<SalasData[]>([])

  async function handleCriaSala() {
    if (!session) signIn('google')

    if (session) {

      const post = await fetch('/api/rooms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          player1_id: session.user?.id,
          player1_name: session.user?.name
        })
      })

      const response = await post.json()

      fetchData()

      if (response.error) {
        alert(response.error)
      }
    }
  }

  const fetchData = () => {
    fetch('/api/rooms/').then(response => {
      return response.json()
    }).then(data => {
      console.log(data)
      setSalas(data)
    })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className={styles.salas}>
      <h1>Entre em partida</h1>
      <h1>ou crie uma!</h1>
      <button onClick={handleCriaSala} className={styles.btnWhite}>Criar uma partida agora<Plus size={24} /></button>
      <hr />
      {
        salas ?
          salas.map(item => (
            <div key={item.id}>
              <div className={styles.partidas} >
                <span>{item.player1_name}</span>
                <h4>X</h4>
                <button className={styles.btnEntrar}>Entre agora <GameController size={24} /></button>
              </div>
              <hr />
            </div>
          ))
          :
          <h2>Carregando...</h2>
      }
    </div>
  )
}

/**
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
               */