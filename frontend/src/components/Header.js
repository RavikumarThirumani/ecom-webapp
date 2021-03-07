import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { logout } from "../actions/userActions";

const Header = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" className='bg-info'>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          {/* <LinkContainer to="/products">
            <Nav.Link>Products</Nav.Link>
          </LinkContainer> */}
          {userInfo ? (
            <Nav.Link onClick={logoutHandler}>Logout</Nav.Link>            
          ) : (
            <LinkContainer to="/login">
              <Nav.Link>Signin</Nav.Link>
            </LinkContainer>
          )}          
        </Nav>
        <Nav className="ml-auto">
          <LinkContainer to="/cart">
            <Nav.Link>cart</Nav.Link>
          </LinkContainer>

          {userInfo &&
            userInfo.isAdmin &&
            (
              <NavDropdown title="Admin" id="adminmenu">
                <LinkContainer to="/admin/userlist">
                  <NavDropdown.Item>Users</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/admin/productlist">
                  <NavDropdown.Item>Products</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            )}

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
