import React from 'react'

import styles from '../styles/components/SearchBar.module.css'

export const SearchBar = () => {
  return (
    <form className={styles.searchBarContainer}>
      <input type='search' />
      <input type='submit' value='Pesquisar' />
    </form>
  )
}
