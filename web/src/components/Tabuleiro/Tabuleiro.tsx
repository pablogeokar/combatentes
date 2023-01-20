import styles from './Tabuleiro.module.scss'
import { useGameContext } from './../../context/hook';

export default function Tabuleiro() {

  const { selectedCard, setSelectedCard } = useGameContext()

  const casas = []

  const letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']

  const lagos = ['C5', 'C6', 'D5', 'D6', 'G5', 'G6', 'H5', 'H6']

  const player1 = [
    'A1', 'B1', 'C1', 'D1', 'E1', 'F1', 'G1', 'H1', 'I1', 'J1',
    'A2', 'B2', 'C2', 'D2', 'E2', 'F2', 'G2', 'H2', 'I2', 'J2',
    'A3', 'B3', 'C3', 'D3', 'E3', 'F3', 'G3', 'H3', 'I3', 'J3',
    'A4', 'B4', 'C4', 'D4', 'E4', 'F4', 'G4', 'H4', 'I4', 'J4'
  ]

  const player2 = [
    'A7', 'B7', 'C7', 'D7', 'E7', 'F7', 'G7', 'H7', 'I7', 'J7',
    'A8', 'B8', 'C8', 'D8', 'E8', 'F8', 'G8', 'H8', 'I8', 'J8',
    'A9', 'B9', 'C9', 'D9', 'E9', 'F9', 'G9', 'H9', 'I9', 'J9',
    'A10', 'B10', 'C10', 'D10', 'E10', 'F10', 'G10', 'H10', 'I10', 'J10',
  ]


  const moveCard = (e: any) => {
    // Se não tiver nenhum card selecionado então já aborta o processo
    if (selectedCard === '') return

    // Seleciona a casa desejada
    const casa = document.querySelector(`#${e.target.id}`) as HTMLDivElement

    // Caso a casa esteja posicionada no lago ou na parte inativa do tabuleiro então
    // o processo também ser´pa abortado
    if (casa.classList.contains('Tabuleiro_lago__WjNwR')) return
    if (casa.classList.contains('Tabuleiro_inativo__6Up5h')) return

    // Move o card para a posição da casa selecionada
    const card = document.querySelector(`#${selectedCard}`) as HTMLDivElement
    card.style.position = 'absolute'
    card.style.top = e.target.offsetTop + 'px'
    card.style.left = e.target.offsetLeft + 'px'

    // Limpa o card da memória
    setSelectedCard('')
  }

  // Cria um array com 100 posições, sendo 10 posições para cada letra do array
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < letras.length; j++) {
      casas.push(`${letras[j]}${i + 1}`)
    }

  }

  return (
    <div className={styles.container}>
      <div className={styles.tabuleiro}>
        {
          casas.map(casa => (
            <div
              key={casa}
              id={casa}
              onClick={(e) => moveCard(e)}
              className={`
              ${styles.casa} 
              ${lagos.includes(casa) ? styles.lago : ''} 
              ${!player1.includes(casa) ? styles.inativo : ''}
              `} />
          ))
        }
      </div>
    </div>
  )
}