import React from 'react';
import { BioContent } from '../../Constants';

import styles from './Bio.module.css'; 

export interface BioProps {
	content: BioContent,
}

const Bio = ({content}: BioProps) => {
	return (
		<div className={styles.bioContainer}>
			<img className={styles.bioProfilePic}  src={content.ProfilePic} alt=""/>
			<div className={styles.bioText}>
				<h1 className="title">About Me</h1>
				<p>{content.Intro}</p>
				<p>{content.WhereIWork}</p>
				<p>{content.AboutGameDev}</p>
			</div>
		</div>
	);
}

export default Bio;