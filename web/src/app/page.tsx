'use client'

import styles from './home.module.scss'
import { signIn, useSession, signOut } from 'next-auth/react'
import { GooglePlayLogo } from 'phosphor-react'
import Salas from './../components/Salas/Salas';


export default function Home() {

  const { data: session } = useSession()

  return (
    <div className={styles.page}>

      <Salas />

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

      <div className={styles.footer} />

    </div>
  )
}
