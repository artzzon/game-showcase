import React from 'react'

import styles from './SortAndFilter.module.scss'

const filterCategories = [
  {
    name: 'All platforms',
    id: '0',
  },
  {
    name: 'PC',
    id: '4'
  },
  {
    name: 'PlayStation 4',
    id: '18'
  },
  {
    name: 'XBOX One',
    id: '1'
  },
  {
    name: 'Nintendo Switch',
    id: '7'
  },
  {
    name: 'Apple Mac',
    id: '5'
  },
  {
    name: 'XBOX Series X|S',
    id: '186'
  },
  {
    name: 'PlayStation 5',
    id: '187'
  },
  {
    name: 'PlayStation 3',
    id: '16'
  },
  {
    name: 'XBOX 360',
    id: '14'
  },
  {
    name: 'Linux',
    id: '6'
  },
  {
    name: 'iOS',
    id: '3'
  },
  {
    name: 'Android',
    id: '21'
  },
  {
    name: 'PS Vita',
    id: '19'
  },
  {
    name: 'Web',
    id: '171'
  },
  {
    name: 'Wii U',
    id: '10'
  },
  {
    name: 'Nintendo 3DS',
    id: '8'
  },
];

const FilterByPlatform = ({ onClickChangePlatform }) => {
  const [filterPopup, setFilterPopup] = React.useState(false);
  const [filterCategory, setFilterCategory] = React.useState(filterCategories[0].name);

  const onClickFilterCategory = (category) => {
    setFilterCategory(category.name);
    setFilterPopup(false);
    onClickChangePlatform(category.id);
  }

  const ref = React.useRef();
  React.useEffect(() => {
    const checkClickedOutside = e => {
      if (filterPopup && ref.current && !ref.current.contains(e.target)) {
        setFilterPopup(false);
      }
    }
    document.addEventListener('mousedown', checkClickedOutside)
    return () => document.removeEventListener('mousedown', checkClickedOutside)
  }, [filterPopup])

  return (
    <div className={styles.drop_down_button} ref={ref}>
      <button onClick={() => setFilterPopup(true)}>
        {filterCategory}
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
              <li key={category.id} onClick={() => onClickFilterCategory(category)}>{category.name}</li>
            ))}
          </ul>
        </div>}
    </div>
  )
}

export default FilterByPlatform;