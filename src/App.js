import React from 'react';
import Helmet from 'react-helmet';
import './App.css';

import CmcdNavBar from './Components/cmcdNavBar';
//import Gallery from './Components/Gallery';
import GamesListing from './Components/GamesListing';
import Bio from './Components/Bio'
import Footer from './Components/Footer';

import imgDualProcessors from './Image/DualProcessors.png';
import imgMadeInTheShade from './Image/MadeInTheShade.png';

import { Descriptions, BioContent, Socials, CopyWrite } from './Constants';

function App() {
	let games = [
		{
			title: "Dual Processors",
			image: imgDualProcessors,
			desc: Descriptions.DualProcessors
		},
		{
			title: "Made In The Shade",
			image: imgMadeInTheShade,
			desc: Descriptions.MadeInTheShade
		}
	]
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
			<img src={games[0].image} className="coverImage" alt=""/>
			<Bio content={BioContent}/>
			<GamesListing games={games}/>
			<Footer socials={Socials} copywrite={CopyWrite}/>
		</div>
	);
}

export default App;
