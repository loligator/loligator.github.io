import React from 'react';

import CmcdNavBar from '../../cmcdNavBar/cmcdNavBar';
import { CmcdFooter } from '../../cmcdFooter/cmcdFooter';
import { HomeHero } from '../../HomeHero/HomeHero';


export const Home: React.FC = () => {
	return (
		<>
			<CmcdNavBar />
			<HomeHero />
			<CmcdFooter />
		</>
	);
}