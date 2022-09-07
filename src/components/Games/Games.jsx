import React from 'react'

import styles from './Games.module.scss'

const platforms = {
  4: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Windows_logo_-_2012.svg/1280px-Windows_logo_-_2012.svg.png', //pc
  18: 'https://e7.pngegg.com/pngimages/466/840/png-clipart-playstation-4-logo-computer-icons-axe-logo-miscellaneous-angle.png', //ps4
  1: 'https://i.pinimg.com/originals/4a/f2/33/4af233aee4380197d2c926f65c77e378.jpg', // xbox
  7: 'https://joltfun.com/static/img/platforms/circle-switch.png', //switch
  5: 'https://e7.pngegg.com/pngimages/624/234/png-clipart-apple-logo-carplay-apple-heart-logo.png', //mac
  186: 'https://www.toybytoy.com/file/0036/250/9593.jpg', //series x/s
  187: 'https://cdn.dribbble.com/users/27903/screenshots/9533517/media/c0125ae4472835d3f0b69f5315c6f564.png' //ps5
};

const Games = ({ games, currentPlatform }) => {
  return (
    <div className={styles.main}>
      {games.filter(game => game?.platforms.includes(currentPlatform) || currentPlatform === 'All platforms').map((game, i) => (
        <div className={styles.game} key={i} style={{ backgroundImage: `url(${game?.background_image})` }}>
          <div className={styles.info}>
            <div className={styles.platform_block}>
              {game.platforms.map((platform, i) => (
                <img
                  className={styles.platform}
                  key={i}
                  src={platforms[platform.platform.id]}
                  alt="platform_icon"
                />
              ))}
            </div>
            <a href="/" className={styles.name}>{game?.name}</a>
            <span>Release date: {game?.released}</span>
            <span>Rating: {game?.metacritic}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Games;