import { SearchBar } from './components/SearchBar'

import styles from './styles/App.module.css'

export const App = () => {
  return (
    <div className={styles.appContainer}>
      <SearchBar />
    </div>
  )
}
