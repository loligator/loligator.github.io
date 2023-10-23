import React from 'react';

import styles from './CenteredContent.module.scss';

interface CenteredContentProps {
	children: React.ReactNode[] | React.ReactNode;
}

export const CenteredContent: React.FC<CenteredContentProps> = (props) => {
	return (
		<div>
			<div className={styles.center}>{props.children}</div>
		</div>
	);
};
