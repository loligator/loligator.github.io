import React from 'react';

import styles from './NavItem.module.css';

interface NavItemProps {
	title: string,
	href: string
}

export const NavItem: React.FC<NavItemProps> = (props) => {

	return (
		<a
			className={styles.link}
			href={props.href}
		>
			{props.title}
		</a>
	);
}