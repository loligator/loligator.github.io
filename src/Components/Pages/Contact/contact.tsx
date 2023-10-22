import React from 'react';
import { CmcdFooter } from '../../cmcdFooter/cmcdFooter';
import CmcdNavBar from '../../cmcdNavBar/cmcdNavBar';

export const Contact: React.FC = () => {
	return (
		<>
			<CmcdNavBar />
			<CmcdFooter fullscreen={true}/>
		</>
	)
}