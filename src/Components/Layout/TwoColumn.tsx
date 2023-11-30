import React from 'react';

import styles from './TwoColumns.module.scss';

interface TwoColumnProps {
	children: React.ReactNode[];
}

export const TwoColumn: React.FC<TwoColumnProps> = (props) => {
	return (
		<div className={styles.twoColumnContainer}>
			<div>
				{props.children?.map((c, i) => <div key={i}>{c}</div>)}
			</div>
			<div>
				{props.children?.map((c, i) => <div key={i}>{c}</div>)}
			</div>
		</div>
	);
}