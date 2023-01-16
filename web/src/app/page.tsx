import css from './home.module.css'
import { Tabuleiro } from './../components';

export default function Home() {
  return (
    <div className={css.page}>
      <Tabuleiro />
    </div>
  )
}
