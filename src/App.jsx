import { useState } from 'react'
import { SearchBar } from './components/SearchBar'
import { User } from './components/User'

import styles from './styles/App.module.css'

export const App = () => {
  const [username, setUsername] = useState('')
  const [user, setUser] = useState({})

  const handleChange = e => {
    setUsername(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    fetch(`https://api.github.com/users/${username}`)
      .then(response => response.json())
      .then(
        user => {
          console.log(user)
          return setUser({
            profileUrl: user.avatar_url,
            name: user.name,
            username: user.login,
            followersCount: user.followers,
            repositoriesCount: user.public_repos,
          })
        },
        error => console.error(error)
      )
  }

  return (
    <div className={styles.appContainer}>
      <SearchBar
        onSubmit={e => handleSubmit(e)}
        onChange={e => handleChange(e)}
      />
      <User
        profileUrl={user.profileUrl || ''}
        name={user.name || ''}
        username={user.username || ''}
        followersCount={user.followersCount || 0}
        repositoriesCount={user.repositoriesCount || 0}
      />
    </div>
  )
}
