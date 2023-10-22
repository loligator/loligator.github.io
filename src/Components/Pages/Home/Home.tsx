import React from 'react';

import CmcdNavBar from '../../cmcdNavBar/cmcdNavBar';
import { CmcdFooter } from '../../cmcdFooter/cmcdFooter';
import { MyWork } from '../../MyWork/MyWork';
import { Bio } from '../../Bio/Bio';

export const Home: React.FC = () => {
	return (
		<>
			<CmcdNavBar />
			<Bio />
			<MyWork />
			<CmcdFooter />
		</>
	);
};
