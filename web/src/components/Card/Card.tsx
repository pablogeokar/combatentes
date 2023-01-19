'use client'

import { useEffect, useState } from 'react';
import styles from './Card.module.css'
import { useGameContext } from './../../context/hook';

interface CardProps {
  id: string
  cardType: 'Bandeira' | 'Bomba'
}



export default function Card({ id, cardType }: CardProps) {

  const { setSelectedCard } = useGameContext()

  function SelectCard(e: any) {
    setSelectedCard(e.target.id)
  }


  let image
  switch (cardType) {
    case 'Bandeira':
      image = '/pecas/bandeira.png'
      break;
    case 'Bomba':
      image = '/pecas/bomba.png'
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