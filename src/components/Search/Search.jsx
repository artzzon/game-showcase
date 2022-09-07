import React from 'react'
import axios from 'axios'
import debounce from 'lodash.debounce';

import styles from './Search.module.scss'

const Search = () => {
  const [foundGames, setFoundGames] = React.useState([]);
  const [search, setSearch] = React.useState('');
  const [searchResponse, setSearchResponse] = React.useState('');

  React.useEffect(() => {
    if (search.length !== 0) {
      axios.get(`https://api.rawg.io/api/games?key=e52e77555e9e49ff825e2c9b8cada358&search=${searchResponse}&page_size=5`)
        .then(res => {
          setFoundGames(res.data.results);
        })
    }
  }, [searchResponse])

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      setSearchResponse(str);
    }, 750),
    [],
  );

  const onChangeInput = (event) => {
    setSearch(event.target.value);
    updateSearchValue(event.target.value)
  }

  return (
    <div className={styles.input_area}>
      {/*сделать белый фон дива при фокусе на инпут*/}
      <input type="text" placeholder="Search" onChange={onChangeInput} value={search} />
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
      {search &&
        <div className={styles.search_dropdown}>
          <ul>
            {foundGames.map(game => (
              <li>
                <img
                  width='36px'
                  height='47px'
                  src={game?.background_image}
                  alt="platform_icon"
                />
                <p>{game?.name}</p>
              </li>
            ))}
          </ul>
        </div>
      }
    </div>
  )
}

export default Search;