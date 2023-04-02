import React from 'react';
import ReactMarkdown from 'react-markdown';

import styles from './Bio.module.css'; 

export interface BioProps {
	profilePic: string,
	content: string,
}

const Bio = (props: BioProps) => {
	return (
		<div className={styles['bio-container']}>
			<img className={styles['bio-profile-pic']}  src={props.profilePic} alt=""/>
			<div className={styles['bio-text']}>
				<ReactMarkdown children={props.content}/>
			</div>
		</div>
	);
}

export default Bio;