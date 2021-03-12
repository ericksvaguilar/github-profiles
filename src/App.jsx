import { SearchBar } from './components/SearchBar'
import { User } from './components/User'

import styles from './styles/App.module.css'

export const App = () => {
  return (
    <div className={styles.appContainer}>
      <SearchBar />
      <User />
    </div>
  )
}
