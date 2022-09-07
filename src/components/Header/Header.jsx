import React from 'react'

import styles from './header.module.scss'
import logotype from '../../img/logo.svg';

import Search from '../Search/Search';

const Header = () => {
  return (
    <header className={styles.wrapper}>
      <div className={styles.logo}>
        <a href="/">
          <img src={logotype} width="60px" height="60px" alt="Логотип" />
        </a>
      </div>
      <Search />
      <div className={styles.auth}>
        <a className={styles.login} href="/">LOG IN</a>
        <a className={styles.signup} href="/">SIGN UP</a>
      </div>
    </header>
  )
}

export default Header;