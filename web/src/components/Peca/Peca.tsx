'use client'

import styles from './Peca.module.scss'
import { useGameContext } from '../../context/hook';

interface PecaProps {
  id: string
  nome: 'Bandeira' | 'Bomba' | 'Soldado' | 'Cabo' | 'Sargento' | 'Tenente' | 'Capitao' | 'Major' | 'Coronel' | 'General' | 'Marechal' | 'Espiao'
}

export default function Peca({ id, nome }: PecaProps) {

  const { setSelectedCard } = useGameContext()

  function SelectCard(e: any) {
    setSelectedCard(e.target.id)
  }


  let image
  switch (nome) {
    case 'Bandeira':
      image = '/pecas/bandeira.png'
      break;
    case 'Bomba':
      image = '/pecas/bomba.png'
      break;
    case 'Soldado':
      image = '/pecas/soldado.png'
      break;
    case 'Cabo':
      image = '/pecas/cabo.png'
      break;
    case 'Sargento':
      image = '/pecas/sargento.png'
      break;
    case 'Tenente':
      image = '/pecas/tenente.png'
      break;
    case 'Capitao':
      image = '/pecas/capitao.png'
      break;
    case 'Major':
      image = '/pecas/major.png'
      break;
    case 'Coronel':
      image = '/pecas/coronel.png'
      break;
    case 'General':
      image = '/pecas/general.png'
      break;
    case 'Marechal':
      image = '/pecas/marechal.png'
      break;
    case 'Espiao':
      image = '/pecas/spy.png'
      break;
    default:
      break;
  }

  return (
    <div
      id={id}
      className={styles.card}
      onClick={(e) => SelectCard(e)}
    >
      <img src={image} alt='' className={styles.image} />
    </div>
  )
}