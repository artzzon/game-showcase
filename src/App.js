import Header from './components/Header/Header';
import SortAndFilter from './components/SortAndFilter/SortAndFilter';
import Games from './components/Games/Games';

import './scss/app.scss';

function App() {
	return (
		<div className="wrapper">
			<Header />
			<SortAndFilter />
			<Games />
		</div>
	);
}

export default App;
