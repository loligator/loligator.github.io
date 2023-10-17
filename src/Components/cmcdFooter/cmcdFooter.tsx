import React from 'react';
import { CMcDBioContent } from '../../Constants';
import Bio from '../Bio/Bio';

import styles from './cmcdFooter.module.scss';

export const CmcdFooter: React.FC = () => {

	return (
		<div className={styles.footerContainer}>
			<div className={styles.columns}>
				<div className={styles.column}>
					<Bio profilePic={CMcDBioContent.ProfilePic}/>
				</div>
			</div>
		</div>
	);
}