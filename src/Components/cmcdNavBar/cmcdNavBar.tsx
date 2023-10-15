import React from 'react';

import { NavItem } from './NavItem/NavItem';
import { NavBar } from './NavBar/NavBar';

function CmcdNavBar() {

	return(
		<NavBar>
			<NavItem title="HOME" href="/"/>
			<NavItem title="RESUME" href="/resume" />
			<NavItem title="CONTACT" href="/#contact" />
		</NavBar>
	);
}

export default CmcdNavBar;