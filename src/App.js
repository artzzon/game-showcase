import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import GamePage from './pages/GamePage';

import './scss/app.scss';

function App() {
	return (
		<div className="wrapper">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="gamepage" element={<GamePage />} />
			</Routes>
		</div>
	);
}

export default App;
