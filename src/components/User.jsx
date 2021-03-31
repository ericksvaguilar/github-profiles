import React from 'react'
import PropTypes from 'prop-types'

import styles from '../styles/components/User.module.css'

export const User = props => {
  if (props.profileUrl) {
    return (
      <div className={styles.userContainer}>
        <img src={props.profileUrl} alt={props.name} />
        <div className={styles.userData}>
          <ul>
            <h2>Dados do Usuário</h2>
            <li>{`Nome: ${props.name}`}</li>
            <li>{`Username: ${props.username}`}</li>
            <li>{`Seguidores: ${props.followersCount}`}</li>
            <li>{`Repositórios: ${props.repositoriesCount}`}</li>
          </ul>
        </div>
      </div>
    )
  } else {
    return <></>
  }
}

User.propTypes = {
  profileUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  followersCount: PropTypes.number.isRequired,
  repositoriesCount: PropTypes.number.isRequired,
}
