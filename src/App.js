import React from 'react';
import logo from './logo.svg';
import './App.css';

import {Navbar,
        Nav,
        NavItem,
        NavLink,
        UncontrolledDropdown,
        DropdownToggle,
        DropdownMenu,
        DropdownItem
        } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <Navbar color="dark" className="navbar-dark" dark expand="md">
        <Nav className="mx-auto" navbar>
          <NavItem>
            <NavLink href="/">HOME</NavLink>
          </NavItem>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              GAMES
            </DropdownToggle>
            <DropdownMenu right>
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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
