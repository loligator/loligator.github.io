import React from 'react';

import Bio from './Components/Bio/Bio';
import CmcdNavBar from './Components/cmcdNavBar/cmcdNavBar';

import { Helmet } from 'react-helmet';
import { CMcDBioContent } from './Constants';
import bioContent from './content/bio';

import styles from './App.module.css';
import { Hero } from './Components/Toys/Hero/Hero';
import { Plinko } from './Components/Toys/Plinko/Plinko';

function App() {
	return (
		<div className={styles.App}>
			<Helmet>
				<title>Connor McDermott - Software Engineer</title>
			</Helmet>
			<CmcdNavBar />
			<Hero/>
			<Bio content={bioContent} profilePic={CMcDBioContent.ProfilePic}/>
			<Plinko />
		</div>
	);
}

export default App;
