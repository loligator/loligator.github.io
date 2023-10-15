import React from 'react';

import styles from './NavBar.module.scss';

interface NavBarProps {
	leftChildren?: React.ReactNode[];
	rightChildren?: React.ReactNode[];
	children: React.ReactNode[];
}

export const NavBar: React.FC<NavBarProps> = (props) => {
	return (
		<div className={ styles.NavbarContainer }>
			<div className={ styles.leftElements }>
				{ props.leftChildren }
			</div>
			<div className={ styles.NavElements }>
				{ props.children }
			</div>
			<div className={ styles.rightElements }>
				{ props.rightChildren }
			</div>
		</div>
	);
}