import styles from './Tabuleiro.module.scss'

export default function Tabuleiro() {
  const casas = []
  const letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < letras.length; j++) {
      casas.push(`${letras[j]}${i + 1}`)
    }

  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span>A</span>
        <span>B</span>
        <span>C</span>
        <span>D</span>
        <span>E</span>
        <span>F</span>
        <span>G</span>
        <span>H</span>
        <span>I</span>
        <span>J</span>
      </div>
      <div className={styles.footer}>
        <span>A</span>
        <span>B</span>
        <span>C</span>
        <span>D</span>
        <span>E</span>
        <span>F</span>
        <span>G</span>
        <span>H</span>
        <span>I</span>
        <span>J</span>
      </div>
      <div className={styles.sideA}>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>6</span>
        <span>7</span>
        <span>8</span>
        <span>9</span>
        <span>10</span>
      </div>
      <div className={styles.sideB}>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>6</span>
        <span>7</span>
        <span>8</span>
        <span>9</span>
        <span>10</span>
      </div>
      <div className={styles.tabuleiro}>
        {
          casas.map(casa => (
            <div key={casa} className={styles.casa}></div>
          ))
        }
      </div>
    </div>

  )
}