import React from 'react'

import styles from './Games.module.scss'

const platforms = {
  4: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Windows_logo_-_2012.svg/1280px-Windows_logo_-_2012.svg.png', //pc
  18: 'https://e7.pngegg.com/pngimages/466/840/png-clipart-playstation-4-logo-computer-icons-axe-logo-miscellaneous-angle.png', //ps4
  1: 'https://i.pinimg.com/originals/4a/f2/33/4af233aee4380197d2c926f65c77e378.jpg', // xbox
  7: 'https://joltfun.com/static/img/platforms/circle-switch.png', //switch
  5: 'https://e7.pngegg.com/pngimages/624/234/png-clipart-apple-logo-carplay-apple-heart-logo.png', //mac
  186: 'https://www.toybytoy.com/file/0036/250/9593.jpg', //series x/s
  187: 'https://cdn.dribbble.com/users/27903/screenshots/9533517/media/c0125ae4472835d3f0b69f5315c6f564.png', //ps5
  16: 'https://sun6-21.userapi.com/impg/c6ekfk5Kua66wOvmrPkI6BPfwcAkxVeAgOZGfw/S32WP-3rFaM.jpg?size=0x400&crop=0.008,0.008,0.98,0.98&quality=95&sign=498ae5c8d30430bd2cf4c837c0898ffb', //ps3
  14: 'https://i.pinimg.com/736x/c2/76/f9/c276f93fbdefbbbd30c5a5ae6896bf7d--asd-xbox.jpg', //xbox 360
  6: 'https://news2.ru/user_images/24640/1090936_1453992831.png', //linux
  3: 'https://e7.pngegg.com/pngimages/624/234/png-clipart-apple-logo-carplay-apple-heart-logo.png', //ios
  21: 'https://sun9-59.userapi.com/impf/c625527/v625527213/1dd13/66GHmKOttwI.jpg?size=200x200&quality=96&sign=e7d14429ea91073dd4137b565ea13b84&type=album', //android
  19: 'https://cdn3.iconfinder.com/data/icons/games-11/24/_psp-512.png', //ps vita
  171: 'https://www.kindpng.com/picc/m/2-21876_transparent-background-website-icon-hd-png-download.png', //web
  10: 'http://cdn.onlinewebfonts.com/svg/img_15976.png', // wii u
  8: 'https://cdn4.iconfinder.com/data/icons/nintendo-console-glyph-set/32/ico-fill-3ds-512.png', // nintendo 3ds

};

const Games = ({ games }) => {
  return (
    <div className={styles.main}>
      {games.map((game, i) => (
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