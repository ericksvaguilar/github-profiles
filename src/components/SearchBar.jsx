import React from 'react'

import styles from '../styles/components/SearchBar.module.css'

export const SearchBar = props => {
  return (
    <form className={styles.searchBarContainer} onSubmit={props.onSubmit}>
      <input type='search' onChange={props.onChange} />
      <input type='submit' value='Pesquisar' />
    </form>
  )
}
