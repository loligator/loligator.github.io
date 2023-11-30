import React from 'react';

import { Helmet } from 'react-helmet';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import styles from './App.module.scss';
import { Contact } from './Components/Pages/Contact/contact';
import { Home } from './Components/Pages/Home/Home';
import { Resume } from './Components/Pages/Resume/Resume';
import { Blog } from './Components/Pages/Blog/Blog';

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
					<Route path="/contact" Component={Contact}></Route>
					<Route path="/blog" Component={Blog}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
