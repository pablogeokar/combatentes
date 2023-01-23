'use client'

import styles from './home.module.scss'
import { signIn, useSession, signOut } from 'next-auth/react'
import { GameController, Plus, PaperPlaneRight, GooglePlayLogo } from 'phosphor-react'

async function getRooms() {
  const response = await fetch('/api/rooms')
  return await response.json()
}


export default function Home() {

  const { data: session } = useSession()

  async function handleCriaSala() {
    if (!session) return signIn('google')

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

    if (response.error) {
      alert(response.error)
    }

  }

  return (
    <div className={styles.page}>
      <div className={styles.salas}>


        <h1>Entre em partida</h1>
        <h1>ou crie uma!</h1>
        <button onClick={handleCriaSala} className={styles.btnWhite}>Criar uma partida agora<Plus size={24} /></button>
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

      {session ?
        <div className={styles.usuario}>

          <div>
            <span>{session.user?.name}</span>
            <span onClick={() => signOut()}>Sair</span>
          </div>
          <img src={session.user?.image ? session.user?.image as string : '/user.png'} alt={session.user?.name as string} onError={(e: any) => { e.target.onError = null; e.target.src = "/user.png" }} />
        </div>
        :
        <button className={styles.btnLogin} onClick={() => signIn('google')}>Login com Google <GooglePlayLogo /></button>
      }

    </div>
  )
}
