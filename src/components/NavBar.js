import React from "react";
import {
  Nav,
  Navbar,
  NavLink,
  NavItem,
  NavbarBrand,
  NavbarToggler,
} from "reactstrap";

const NavBar = () => {
  return (
    <Navbar color="light">
      <NavbarBrand>American Ancestries</NavbarBrand>
      <NavbarToggler></NavbarToggler>
      <Nav className="mr-auto" tabs>
        <NavItem>
          <NavLink href="/american-ancestries">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/american-ancestries/places">Places</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/american-ancestries/ancestry_groups">
            Ancestry Groups
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/american-ancestries/places/new">New Place</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
