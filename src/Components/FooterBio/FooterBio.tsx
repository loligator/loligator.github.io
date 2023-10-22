import React from 'react';
import { Socials } from '../Socials/Socials';

import styles from './FooterBio.module.scss';

export interface BioProps {
	profilePic: string;
}

const FooterBio: React.FC<BioProps> = (props: BioProps) => {
	return (
		<div className={styles.bioContainer}>
			<img className={styles.bioProfilePic} src={props.profilePic} alt="" />
			<div className={styles.rightContainer}>
				<div className={styles.bioText}>
					<h1>Connor McDermott</h1>
					<h2>Software Engineer</h2>
					<p>Let's do something exciting together!</p>
				</div>
				<div className={styles.spacing}>
					<Socials />
				</div>
			</div>
		</div>
	);
};

export default FooterBio;
