import React from 'react'

import styles from '../styles/components/User.module.css'

export const User = () => {
  return (
    <div className={styles.userContainer}>
      <img
        src='https://avatars.githubusercontent.com/u/43142456?v=4'
        alt=''
        width='200px'
      />

      <ul>
        <h2>Dados do Usuario:</h2>
        <li>Nome: Erick Aguilar</li>
        <li>Username: ericksvaguilar</li>
        <li>Seguidores: 10</li>
        <li>Repositorios: 20</li>
      </ul>

      <ul>
        <h2>Novos Repositorios:</h2>
        <li>react-notes</li>
        <li>stopwatch</li>
        <li>erickaguilar.com.br</li>
        <li>calculator</li>
      </ul>
    </div>
  )
}
