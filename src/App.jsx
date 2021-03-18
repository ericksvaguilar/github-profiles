import { useEffect, useState } from 'react'
import { SearchBar } from './components/SearchBar'
import { User } from './components/User'

import styles from './styles/App.module.css'

export const App = () => {
  const [username, setUsername] = useState('')

  const handleChange = e => {
    setUsername(e.target.value)
  }

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then(response => response.json())
      .then(
        user => console.log(user),
        error => console.error(error)
      )
  }, [username])

  return (
    <div className={styles.appContainer}>
      <SearchBar onChange={e => handleChange(e)} />
      <User
        profileUrl={''}
        name={'Erick Aguilar'}
        username={'ericksvaguilar'}
        followersCount={10}
        repositoriesCount={20}
      />
    </div>
  )
}
