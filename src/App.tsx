import React from 'react';

import Bio from './Components/Bio/Bio';
import CmcdNavBar from './Components/cmcdNavBar/cmcdNavBar';

import { Helmet } from 'react-helmet';
import { CMcDBioContent } from './Constants';
import bioContent from './content/bio';

import styles from './App.module.css';
import { FireworksHero } from './Components/Toys/Fireworks/Fireworks';
import { CmcdFooter  } from './Components/cmcdFooter/cmcdFooter';

function App() {
	return (
		<div className={styles.App}>
			<Helmet>
				<title>Connor McDermott - Software Engineer</title>
			</Helmet>
			<CmcdNavBar />
			<FireworksHero />
			<Bio content={bioContent} profilePic={CMcDBioContent.ProfilePic}/>
			<CmcdFooter />
		</div>
	);
}

export default App;
