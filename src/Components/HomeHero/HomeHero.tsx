import React from 'react';
import { CenteredContent } from '../CenteredContent/CenteredContent';
import { Anim } from '../Toys/Anim/Anim';

import styles from './HomeHero.module.scss';

export const StarHero: React.FC = () => {

	return (
		<div className={styles.hero}>
			<Anim></Anim>
			<CenteredContent>
				<h1 className={styles.bigText}>Connor McDermott</h1>
			</CenteredContent>
		</div>
	);
}