import React from 'react';

import style from './cmcdNavBar.module.scss';

import { NavItem } from './NavItem/NavItem';
import { NavBar } from './NavBar/NavBar';
import { Link } from 'react-router-dom';

function CmcdNavBar() {
	const logo = (
		<Link className={style.logoFont} to={window.location.href}>
			Connor M
		</Link>
	);

	return (
		<NavBar leftChildren={[logo]}>
			<NavItem title="HOME" path="/" />
			<NavItem title="RESUME" path="/resume" />
			<NavItem title="CONTACT" path="/contact"/>
		</NavBar>
	);
}

export default CmcdNavBar;
