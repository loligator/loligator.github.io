import React from 'react';

import Bio from './Components/Bio/Bio';
import CmcdNavBar from './Components/cmcdNavBar/cmcdNavBar';

import { Helmet } from 'react-helmet';
import { CMcDBioContent } from './Constants';

function App() {
	return (
		<div className="App">
			<Helmet>
				<title>Connor McDermott - Software Engineer</title>
			</Helmet>
			<CmcdNavBar />
			<Bio content={CMcDBioContent}/>
		</div>
	);
}

export default App;
