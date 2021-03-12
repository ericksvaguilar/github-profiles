import React from 'react'

import styles from '../styles/components/User.module.css'

export const User = props => {
  return (
    <div className={styles.userContainer}>
      <img src={props.profileUrl} alt={props.name} width='200px' />

      <ul>
        <h2>Dados do Usuário</h2>
        <li>{`Nome: ${props.name}`}</li>
        <li>{`Username: ${props.username}`}</li>
        <li>{`Seguidores: ${props.followersCount}`}</li>
        <li>{`Repositórios: ${props.repositoriesCount}`}</li>
      </ul>
    </div>
  )
}
