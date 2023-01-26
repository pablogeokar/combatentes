'use client'

import css from './sala.module.css'
import { Tabuleiro, Peca, DialogBox } from '@/components';

export default function Jogo() {

  const bombas = [...Array(6)]
  const soldados = [...Array(8)]
  const cabos = [...Array(5)]
  const sargentos = [...Array(4)]
  const tenente = [...Array(4)]
  const capitao = [...Array(4)]
  const major = [...Array(3)]
  const coronel = [...Array(2)]

  return (
    <div className={css.page}>
      <div className={css.header}>
        <div>
          <img src="" alt="" />
        </div>
      </div>

      <Tabuleiro />

      <div className={css.cards}>
        <Peca id="bandeira" nome='Bandeira' />
        {
          bombas.map((_, index) => (<Peca key={index} nome='Bomba' id={`bomba-${index}`} />))
        }
        {
          soldados.map((_, index) => (<Peca key={index} nome='Soldado' id={`soldado-${index}`} />))
        }
        {
          cabos.map((_, index) => (<Peca key={index} nome='Cabo' id={`cabo-${index}`} />))
        }
        {
          sargentos.map((_, index) => (<Peca key={index} nome='Sargento' id={`sargento-${index}`} />))
        }
        {
          tenente.map((_, index) => (<Peca key={index} nome='Tenente' id={`tenente-${index}`} />))
        }
        {
          capitao.map((_, index) => (<Peca key={index} nome='Capitao' id={`capitao-${index}`} />))
        }
        {
          major.map((_, index) => (<Peca key={index} nome='Major' id={`major-${index}`} />))
        }
        {
          coronel.map((_, index) => (<Peca key={index} nome='Coronel' id={`coronel-${index}`} />))
        }
        <Peca id="general" nome='General' />
        <Peca id="marechal" nome='Marechal' />
        <Peca id="espiao" nome='Espiao' />
      </div>

      <DialogBox>
        <h1>Início do jogo!</h1>
        <h3>Monte a sua estratégia</h3>
      </DialogBox>

    </div>
  )
}
