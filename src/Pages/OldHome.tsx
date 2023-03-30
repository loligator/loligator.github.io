import React from 'react';
import { Helmet } from 'react-helmet';
import './App.css';

import CmcdNavBar from '../Components/cmcdNavBar/cmcdNavBar';
import GamesListing from '../Components/GamesListing/GamesListing';
import Bio from '../Components/Bio/Bio'
import Footer from '../Components/Footer/Footer';

import imgDualProcessors from './Image/DualProcessors.png';
import imgMadeInTheShade from './Image/MadeInTheShade.png';

import { Descriptions, CMcDBioContent, Socials, CopyWrite } from '../Constants';

function OldHome() {
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
			<img src={games[0].image} className="coverImage" alt=""/>
			<Bio content={CMcDBioContent}/>
			<GamesListing games={games}/>
			<Footer socials={Socials} copywrite={CopyWrite}/>
		</div>
	);
}

export default OldHome;
