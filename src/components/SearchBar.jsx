import React from 'react'

import styles from '../styles/components/SearchBar.module.css'

export const SearchBar = props => {
  return (
    <form className={styles.searchBarContainer}>
      <input type='search' onChange={props.handleChange} />
      <input type='submit' value='Pesquisar' />
    </form>
  )
}
