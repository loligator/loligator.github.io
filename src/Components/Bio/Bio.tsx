import React from 'react';
import { Socials } from '../Socials/Socials';

import styles from './Bio.module.css'; 

export interface BioProps {
	profilePic: string,
}

const Bio = (props: BioProps) => {
	return (
		<div className={styles['bio-container']}>
			<img className={styles['bio-profile-pic']}  src={props.profilePic} alt=""/>
			<div className={styles['bio-text']}>
				<h1>Connor McDermott</h1>
				<h2>Software Engineer</h2>
				<p>Let's do something exciting together!</p>
				<Socials />
			</div>
		</div>
	);
}

export default Bio;