import React from 'react'

import styles from './Games.module.scss'

const Games = () => {
  return (
    <div className={styles.main}>
      <div className={styles.game}>
        <img
          className={styles.picture}
          src="https://media.rawg.io/media/resize/640/-/screenshots/3a6/3a6ee3b1637d05b0e48db56ffaf62ade.jpg"
          alt="game"
        />
        <div className={styles.info}>
          <img
            className={styles.platform}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Windows_logo_-_2012.svg/1280px-Windows_logo_-_2012.svg.png"
            alt="platform_icon"
          />
          <a href="#" className={styles.name}>Obligue Of CHAOS</a>
          <span >Release date: </span>
          <span>Rating: </span>
        </div>
      </div>
    </div>
  )
}

export default Games