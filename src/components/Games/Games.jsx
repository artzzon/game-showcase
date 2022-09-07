import React from 'react'

import styles from './Games.module.scss'

const platforms = {
  'PC': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Windows_logo_-_2012.svg/1280px-Windows_logo_-_2012.svg.png',
  'PlayStation': 'https://e7.pngegg.com/pngimages/466/840/png-clipart-playstation-4-logo-computer-icons-axe-logo-miscellaneous-angle.png',
  'XBOX': 'https://i.pinimg.com/originals/4a/f2/33/4af233aee4380197d2c926f65c77e378.jpg'
};

const Games = ({ games }) => {
  return (
    <div className={styles.main}>
      {games.map(game => (
        <div className={styles.game} style={{ backgroundImage: `url(${game?.background_image})` }}>
          <div className={styles.info}>
            <div className={styles.platform_block}>
              {game.platforms.map(platform => (
                <img
                  className={styles.platform}
                  src={platforms[platform]}
                  alt="platform_icon"
                />
              ))}
            </div>
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