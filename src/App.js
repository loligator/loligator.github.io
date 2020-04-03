import React from 'react';
import { Helmet } from 'react-helmet';
import './App.css';

import CmcdNavBar from './Components/cmcdNavBar';
import Gallery from './Components/Gallery';

import imgDualProcessors from './Image/DualProcessors.png';
import imgMadeInTheShade from './Image/MadeInTheShade.png';

function App() {
	let images = [
		imgDualProcessors,
		imgMadeInTheShade
	];
	return (
		<div className="App">
			<Helmet>
				<title>Connor McDermott - Gameplay Programmer</title>
			</Helmet>
			<CmcdNavBar/>
			<header className="App-title">
				<div>
					<h1 className="title">
						CONNOR MCDERMOTT
					</h1>
					<h4 className="subtitle">
						Gameplay Programmer
					</h4>
				</div>
			</header>
			{/*<Gallery images={images}/>*/}
			<img src={images[0]} style={{width: "100%"}} alt=""/>

		</div>
	);
}

export default App;
