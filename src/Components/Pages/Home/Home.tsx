import React from 'react';
import Bio from '../../Bio/Bio';
import { CMcDBioContent } from '../../../Constants';
import bioContent from '../../../content/bio';
import CmcdNavBar from '../../cmcdNavBar/cmcdNavBar';
import { FireworksHero } from '../../Toys/Fireworks/Fireworks';
import { CmcdFooter } from '../../cmcdFooter/cmcdFooter';


export const Home: React.FC = () => {
	console.log("HALLO");
	return (
		<>
			<CmcdNavBar />
			<FireworksHero />
			<Bio content={bioContent} profilePic={CMcDBioContent.ProfilePic}/>
			<CmcdFooter />
		</>
	);
}