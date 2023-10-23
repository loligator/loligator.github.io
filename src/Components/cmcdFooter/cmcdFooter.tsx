import React from 'react';
import { CMcDBioContent } from '../../Constants';
import FooterBio from '../FooterBio/FooterBio';

import styles from './cmcdFooter.module.scss';

interface CmcdFooterProps {
	fullscreen?: boolean;
}

export const CmcdFooter: React.FC<CmcdFooterProps> = (props) => {
	return (
		<div
			className={
				styles.footerContainer +
				' ' +
				(props.fullscreen ? styles.fullscreen : '')
			}
		>
			<div className={styles.columns}>
				<div className={styles.column}>
					<FooterBio profilePic={CMcDBioContent.ProfilePic} />
				</div>
			</div>
		</div>
	);
};
