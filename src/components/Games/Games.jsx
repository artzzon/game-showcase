import React from 'react'

import styles from './Games.module.scss'

const Games = ({ games }) => {
  return (
    <div className={styles.main}>
      {games.map(game => (
        <div className={styles.game}>
          <img
            className={styles.picture}
            src={game?.background_image}
            alt={game?.name}
          />
          <div className={styles.info}>
            <img
              className={styles.platform}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Windows_logo_-_2012.svg/1280px-Windows_logo_-_2012.svg.png"
              alt="platform_icon"
            />
            <a href="#" className={styles.name}>{game?.name}</a>
            <span >Release date: {game?.released}</span>
            <span>Rating: {game?.metacritic}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Games