import React from 'react';

import styles from './MyWork.module.scss';

interface WorkItemProps {
	logo: string;
	company: string;
	jobTitle: string;
	details: string[];
	tech: string[];
}

export const WorkItem: React.FC<WorkItemProps> = (props) => {
	return (
		<div className={styles.workItem}>
			<img src={props.logo} alt={props.company} className={styles.logo} />
			<h3 className={styles.sectionTitle}>{props.company}</h3>
			<div>{props.jobTitle}</div>
			{props.details.map((detail, i) => (
				<div key={i}>{detail}</div>
			))}
			<h4 className={styles.sectionTitle}>Dev Tools:</h4>
			{props.tech.map((t, i) => (
				<div key={i}>{t}</div>
			))}
		</div>
	);
};
