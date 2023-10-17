import React from 'react';

import { NavItem } from './NavItem/NavItem';
import { NavBar } from './NavBar/NavBar';

function CmcdNavBar() {

	return(
		<NavBar>
			<NavItem title="HOME" path="/"/>
			<NavItem title="RESUME" path="/resume" />
			<NavItem title="CONTACT" path="/#contact" />
		</NavBar>
	);
}

export default CmcdNavBar;
