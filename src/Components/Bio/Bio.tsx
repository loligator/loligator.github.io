import React from 'react';
import { BioContent } from '../../Constants';

import Styles from './Bio.module.css'; 

export interface BioProps {
	content: BioContent,
}

const Bio = ({content}: BioProps) => {
	return (
		<>
			<div className="bio-container">
					<img className={Styles.bioProfilePic}  src={content.ProfilePic} alt=""/>
					<div className={Styles.bioText}>
						<h1 className="title">About Me</h1>
						<p>{content.Intro}</p>
						<p>{content.WhereIWork}</p>
						<p>{content.AboutGameDev}</p>
					</div>
			</div>
		</>
	);
}

export default Bio;