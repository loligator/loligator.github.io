import React from 'react';

import {Navbar,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
    } from 'reactstrap';

function CmcdNavBar() {

    return(
        <div>
            <Navbar color="dark" className="navbar-dark" dark expand="md">
            <Nav className="mx-auto" navbar>
            <NavItem>
                <NavLink href="/">HOME</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                GAMES
                </DropdownToggle>
                <DropdownMenu right className="bg-dark">
                <DropdownItem>
                    MADE IN THE SHADE
                </DropdownItem>
                <DropdownItem>
                    CIRCUIT
                </DropdownItem>
                <DropdownItem>
                    SYNTHESIS
                </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
                <NavLink href="/">CONTACT</NavLink>
            </NavItem>
            </Nav>
        </Navbar>
      </div>
    );
}

export default CmcdNavBar;