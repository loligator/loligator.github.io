import React from 'react';
import { useState } from 'react';
import { Socials } from '../../Socials/Socials';

import styles from './NavBar.module.scss';

interface NavBarProps {
	leftChildren?: React.ReactNode[];
	children: React.ReactNode[];
}

export const NavBar: React.FC<NavBarProps> = (props) => {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<div className={styles.NavbarContainer}>
			<div className={styles.leftElements}>
				{props.leftChildren?.map((c, i) => <div key={i}>{c}</div>)}
			</div>
			<div className={styles.NavElements + ' ' + styles.desktopOnly}>
				{props.children?.map((c, i) => <div key={i}>{c}</div>)}
			</div>
			<div
				className={
					styles.hamburgerButton +
					' ' +
					styles.mobileOnly +
					' ' +
					(menuOpen ? styles.opened : '')
				}
				onClick={() => {
					setMenuOpen(!menuOpen);
				}}
			>
				<div className={styles.hamburgerIcon}></div>
			</div>
			<div
				className={styles.menuOverlay + ' ' + (menuOpen ? styles.opened : '')}
			>
				<div className={styles.menuOverlayBackground}></div>
				<div className={styles.menuOverlayItems}>
					{props.children?.map((c, i) => <div key={i}>{c}</div>)}
					<div className={styles.spacing}>
						<Socials largeIcons={true} />
					</div>
				</div>
			</div>
		</div>
	);
};
