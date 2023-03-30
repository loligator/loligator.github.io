import React from 'react';

import Bio from './Components/Bio/Bio';
import CmcdNavBar from './Components/cmcdNavBar/cmcdNavBar';

import { Helmet } from 'react-helmet';
import { BioContent } from './Constants';

function App() {
	return (
		<div className="App">
			<Helmet>
				<title>Connor McDermott - Software Engineer</title>
			</Helmet>
			<CmcdNavBar />
			<Bio content={BioContent}/>
		</div>
	);
}

export default App;
