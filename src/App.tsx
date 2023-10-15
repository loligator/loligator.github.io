import React from 'react';

import { Helmet } from 'react-helmet';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import styles from './App.module.css';
import { Home } from './Components/Pages/Home/Home';
import { Resume } from './Components/Pages/Resume/Resume';

function App() {
	return (
		<div className={styles.App}>
			<Helmet>
				<title>Connor McDermott - Software Engineer</title>
			</Helmet>
			
			<BrowserRouter>
				<Routes>
					<Route path="/" Component={Home}></Route>
					<Route path="/resume" Component={Resume}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
