import React from 'react';
import { Link } from 'react-router-dom';

import styles from './NavItem.module.scss';

interface NavItemProps {
	title: string,
	path: string
}

export const NavItem: React.FC<NavItemProps> = (props) => {

	return (
		<div className={styles.container}>
			<Link className={styles.link} to={props.path}>
				{props.title}
			</Link>
		</div>
	);
}