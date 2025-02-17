import { Navbar, Nav, NavItem, NavLink } from "reactstrap";
import Home from "./Home";
const Header = () => {
  return (
    <>
      <Navbar>
        <Nav>
          <NavItem>
            <NavLink active href="/">
              Home
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink href="#">About Us</NavLink>
          </NavItem>

          <NavItem>
            <NavLink href="#">Contact us</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </>
  );
};

export default Header;
