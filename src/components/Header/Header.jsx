import React from 'react'
import styles from './header.module.scss'
import logotype from '../../img/logo.svg';

const Header = () => {
  return (
    <header className={styles.wrapper}>
      <div className={styles.logo}>
        <a href="/">
          <img src={logotype} width="60px" height="60px" alt="Логотип" />
        </a>
      </div>
      <div className={styles.input_area}>
        {/*сделать белый фон дива при фокусе на инпут*/}
        <input type="text" placeholder="Search" />
        {/*Переделать свг как бекграунд с исп. миксинов scss прим. 'https://stackoverflow.com/questions/13367868/how-to-modify-the-fill-color-of-an-svg-image-when-being-served-as-background-ima'*/}
        <svg
          className={styles.svg}
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 52.966 52.966"
        >
          <path
            d="M51.704,51.273L36.845,35.82c3.79-3.801,6.138-9.041,6.138-14.82c0-11.58-9.42-21-21-21s-21,9.42-21,21s9.42,21,21,21
c5.083,0,9.748-1.817,13.384-4.832l14.895,15.491c0.196,0.205,0.458,0.307,0.721,0.307c0.25,0,0.499-0.093,0.693-0.279
C52.074,52.304,52.086,51.671,51.704,51.273z M21.983,40c-10.477,0-19-8.523-19-19s8.523-19,19-19s19,8.523,19,19
S32.459,40,21.983,40z"
          />
        </svg>
      </div>
      <div className={styles.auth}>
        <a className={styles.login} href="/">LOG IN</a>
        <a className={styles.signup} href="/">SIGN UP</a>
      </div>
    </header>
  )
}

export default Header;