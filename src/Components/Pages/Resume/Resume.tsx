import React from 'react';
import { CenteredContent } from '../../CenteredContent/CenteredContent';
import CmcdNavBar from '../../cmcdNavBar/cmcdNavBar';

import styles from './Resume.module.scss';

export const Resume: React.FC = () => {
	return (
		<>
			<CmcdNavBar />
			<CenteredContent>
				<a
					className={
						styles.buttonLink +
						' ' +
						styles.buttonLinkWhite +
						' ' +
						styles.buttonLinkAnimated
					}
					href={'ConnorMcDermottResume.pdf'}
					target="_blank"
					rel="noreferrer"
				>
					Download my Resume!
				</a>
			</CenteredContent>
		</>
	);
};
