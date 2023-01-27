import React from 'react';

import { Helmet } from 'react-helmet';

function App() {
	return (
		<div className="App">
			<Helmet>
				<title>Connor McDermott - Software Engineer</title>
			</Helmet>
			<CMcDNavBar />
		</div>
	);
}

export default App;
