import { SearchBar } from './components/SearchBar'
import { User } from './components/User'

import styles from './styles/App.module.css'

export const App = () => {
  const handleChange = e => {
    console.log(e.target.value)
  }

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
