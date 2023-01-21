import { ReactNode, useState } from 'react'
import styles from './DialogBox.module.scss'

interface DialogBoxProps {
  children?: ReactNode
  isVisible?: boolean
}

export default function DialogBox({ children, isVisible = true }: DialogBoxProps) {
  const [isShow, setIsShow] = useState(isVisible)
  return (
    <>
      {
        isShow &&
        <div className={styles.wrapper}>
          <div className={styles.container}>
            {children}
            <span className={styles.fechar} onClick={() => setIsShow(false)}>X</span>
          </div>
        </div>
      }
    </>
  )
}