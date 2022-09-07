import React from 'react'

import styles from './SortAndFilter.module.scss'

const filterCategories = [
  {
    platform: 'PC',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Windows_logo_-_2012.svg/1280px-Windows_logo_-_2012.svg.png'
  },
  {
    platform: 'PlayStation',
    img: 'https://e7.pngegg.com/pngimages/466/840/png-clipart-playstation-4-logo-computer-icons-axe-logo-miscellaneous-angle.png'
  },
  {
    platform: 'XBOX',
    img: 'https://i.pinimg.com/originals/4a/f2/33/4af233aee4380197d2c926f65c77e378.jpg'
  },
];
const FilterByPlatform = () => {
  const [filterPopup, setFilterPopup] = React.useState(false);
  const [filterCategory, setFilterCategory] = React.useState(filterCategories[0]);

  const onClickFilterCategory = (category) => {
    setFilterCategory(category);
    setFilterPopup(false);
  }

  return (
    <div className={styles.drop_down_button}>
      <button onClick={() => setFilterPopup(true)}>
        Platforms
        <svg
          width="15px"
          fill="#757575"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 47.255 47.255"
        >
          <g>
            <path
              d="M46.255,35.941c-0.256,0-0.512-0.098-0.707-0.293l-21.921-21.92l-21.92,21.92c-0.391,0.391-1.023,0.391-1.414,0
         c-0.391-0.391-0.391-1.023,0-1.414L22.92,11.607c0.391-0.391,1.023-0.391,1.414,0l22.627,22.627c0.391,0.391,0.391,1.023,0,1.414
         C46.767,35.844,46.511,35.941,46.255,35.941z"
            />
          </g>
        </svg>
      </button>
      {filterPopup &&
        <div className={styles.popup}>
          <ul>
            {filterCategories.map(category => (
              <li key={category} onClick={() => onClickFilterCategory(category)}>{category}</li>
            ))}
          </ul>
        </div>}
    </div>
  )
}

export default FilterByPlatform;