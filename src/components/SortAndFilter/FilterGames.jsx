import React from 'react'

import styles from './SortAndFilter.module.scss'

const filterCategories = ['All', 'PC', 'PlayStation', 'Xbox', 'iOS', 'Android', 'Apple Macintosh', 'Linux', 'Nintendo', 'Web'];

const FilterGames = () => {
  const [filterPopup, setFilterPopup] = React.useState(false);
  const [filterCategory, setFilterCategory] = React.useState(filterCategories[0]);

  const onClickFilterCategory = (category) => {
    setFilterCategory(category);
    setFilterPopup(false);
  }

  return (
      <div className={styles.filter_block}>
        <button className="filter" onClick={() => setFilterPopup(true)}>
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

export default FilterGames;