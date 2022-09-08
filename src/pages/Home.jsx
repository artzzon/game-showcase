import React from 'react';
import axios from 'axios';

import Games from '../components/Games/Games';
import Header from '../components/Header/Header';
import SortGames from '../components/SortAndFilter/SortGames';
import FilterByPlatform from '../components/SortAndFilter/FilterByPlatform';

// const test = [
//   {
//     name: 'Apex Legends',
//     metacritic: 80,
//     background_image: 'https://media.rawg.io/media/games/b72/b7233d5d5b1e75e86bb860ccc7aeca85.jpg',
//     released: '2019-02-04',
//     platforms: ['PC', 'PlayStation', 'XBOX'],
//   },
//   {
//     name: 'Death Stranding',
//     metacritic: 80,
//     background_image: 'https://media.rawg.io/media/games/2ad/2ad87a4a69b1104f02435c14c5196095.jpg',
//     released: '2019-02-04',
//     platforms: ['PlayStation', 'XBOX']
//   },
//   {
//     name: 'Control',
//     metacritic: 80,
//     background_image: 'https://media.rawg.io/media/games/253/2534a46f3da7fa7c315f1387515ca393.jpg',
//     released: '2019-02-04',
//     platforms: ['PC']
//   },
//   {
//     name: 'Star Wars Jedi: Fallen Order',
//     metacritic: 80,
//     background_image: 'https://media.rawg.io/media/games/559/559bc0768f656ad0c63c54b80a82d680.jpg',
//     released: '2019-02-04',
//     platforms: ['PC', 'PlayStation', 'XBOX']
//   },
//   {
//     name: 'Sekiro: Shadows Die Twice',
//     metacritic: 80,
//     background_image: 'https://media.rawg.io/media/games/67f/67f62d1f062a6164f57575e0604ee9f6.jpg',
//     released: '2019-02-04',
//     platforms: ['PC', 'PlayStation', 'XBOX']
//   },
//   {
//     name: 'Metro Exodus',
//     metacritic: 80,
//     background_image: 'https://media.rawg.io/media/games/152/152e788b7504aa2753c86dae912fb34c.jpg',
//     released: '2019-02-04',
//     platforms: ['PC', 'PlayStation', 'XBOX']
//   },
//   {
//     name: 'Disco Elysium',
//     metacritic: 80,
//     background_image: 'https://media.rawg.io/media/games/840/8408ad3811289a6a5830cae60fb0b62a.jpg',
//     released: '2019-02-04',
//     platforms: ['PC']
//   },
//   {
//     name: 'Devil May Cry 5',
//     metacritic: 80,
//     background_image: 'https://media.rawg.io/media/games/9fb/9fbf956a16249def7625ab5dc3d09515.jpg',
//     released: '2019-02-04',
//     platforms: ['PlayStation']
//   },
//   {
//     name: 'The Outer Worlds',
//     metacritic: 80,
//     background_image: 'https://media.rawg.io/media/games/704/704f831d2d132e9614931f1c4eab9e86.jpg',
//     released: '2019-02-04',
//     platforms: ['XBOX']
//   },
//   {
//     name: 'A Plague Tale: Innocence',
//     metacritic: 80,
//     background_image: 'https://media.rawg.io/media/games/b4a/b4adf80c36e267b35acc3497ed2af19c.jpg',
//     released: '2019-02-04',
//     platforms: ['PC', 'PlayStation', 'XBOX']
//   },
//   {
//     name: 'Borderlands Game of the Year Enhanced',
//     metacritic: 80,
//     background_image: 'https://media.rawg.io/media/games/df9/df988191048e92cf86dabd2987c47b62.jpg',
//     released: '2019-02-04',
//     platforms: ['PC', 'PlayStation', 'XBOX']
//   },
//   {
//     name: 'Days Gone',
//     metacritic: 80,
//     background_image: 'https://media.rawg.io/media/games/a79/a79d2fc90c4dbf07a8580b19600fd61d.jpg',
//     released: '2019-02-04',
//     platforms: ['PC', 'PlayStation', 'XBOX']
//   },
//   {
//     name: 'Borderlands 3',
//     metacritic: 80,
//     background_image: 'https://media.rawg.io/media/games/9f1/9f1891779cb20f44de93cef33b067e50.jpg',
//     released: '2019-02-04',
//     platforms: ['PC', 'PlayStation', 'XBOX']
//   },
//   {
//     name: 'Resident Evil 2',
//     metacritic: 80,
//     background_image: 'https://media.rawg.io/media/games/053/053fc543bf488349610f1ae2d0c1b51b.jpg',
//     released: '2019-02-04',
//     platforms: ['PC', 'PlayStation', 'XBOX']
//   },
//   {
//     name: 'Minion Masters',
//     metacritic: 80,
//     background_image: 'https://media.rawg.io/media/games/e4a/e4ab7f784bdc38c76ce6e4cef9715d18.jpg',
//     released: '2019-02-04',
//     platforms: ['PC', 'PlayStation', 'XBOX']
//   },
//   {
//     name: 'Mortal Kombat 11',
//     metacritic: 80,
//     background_image: 'https://media.rawg.io/media/games/eb5/eb514db62d397c64288160d5bd8fd67a.jpg',
//     released: '2019-02-04',
//     platforms: ['PC', 'PlayStation', 'XBOX']
//   },
//   {
//     name: 'Gears 5',
//     metacritic: 80,
//     background_image: 'https://media.rawg.io/media/games/121/1213f8b9b0a26307e672cf51f34882f8.jpg',
//     released: '2019-02-04',
//     platforms: ['PC', 'PlayStation', 'XBOX']
//   },
//   {
//     name: 'Slay the Spire',
//     metacritic: 80,
//     background_image: 'https://media.rawg.io/media/games/f52/f5206d55f918edf8ee07803101106fa6.jpg',
//     released: '2019-02-04',
//     platforms: ['PC', 'PlayStation', 'XBOX']
//   },
//   {
//     name: 'Gothic Playable Teaser',
//     metacritic: 80,
//     background_image: 'https://media.rawg.io/media/games/64e/64e4fc48c5d977188e8c47287f2a2cef.jpg',
//     released: '2019-02-04',
//     platforms: ['PC', 'PlayStation', 'XBOX']
//   },
//   {
//     name: 'Outer Wilds',
//     metacritic: 80,
//     background_image: 'https://media.rawg.io/media/games/9f4/9f418898f5415668ca47b5f4ab1ecfeb.jpg',
//     released: '2019-02-04',
//     platforms: ['PC', 'PlayStation', 'XBOX']
//   },
// ];

const sortCategories = [
  {
    name: 'Rating',
    requestName: 'rating'
  },
  {
    name: 'Release Date',
    requestName: 'released'
  }
];

const Home = () => {
  const [games, setGames] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [currentPlatform, setCurrentPlatform] = React.useState('0');
  const [fetching, setFetching] = React.useState(true);
  const [sortCategory, setSortCategory] = React.useState(sortCategories[0]);

  React.useEffect(() => {
    if (fetching) {
    axios.get(`https://api.rawg.io/api/games?key=e52e77555e9e49ff825e2c9b8cada358&page=${currentPage}&page_size=10&${currentPlatform !== '0' ? `platforms=${currentPlatform}` : ''}&ordering=metacritic100,0`)
      .then(res => {
        setGames([...games, ...res.data.results]);
        setCurrentPage(prevState => prevState + 1); //сделать проверку, что игр больше нет и не передавать запрос
      })
      .finally(() => setFetching(false));
    }
  }, [currentPlatform, sortCategory.requestName, fetching, currentPage, games])

  const scrollHandler = (e) => {
    if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
      setFetching(true);
    }
  }

  React.useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    return function () {
      document.removeEventListener('scroll', scrollHandler);
    }
  }, [])

  const onClickChangePlatform = (platform) => {
    setCurrentPlatform(platform);
  }

  return (
    <>
      <Header />
      <div className="head">
        <h1>Games</h1>
      </div>
      <div className="sort_and_filter">
        <SortGames sortCategories={sortCategories} sortCategory={sortCategory} setSortCategory={setSortCategory} />
        <FilterByPlatform onClickChangePlatform={onClickChangePlatform} />
      </div>
      <Games games={games} currentPlatform={currentPlatform} />
    </>
  );
}

export default Home;