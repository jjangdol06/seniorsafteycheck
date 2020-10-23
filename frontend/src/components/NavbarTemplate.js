import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button,
  NavbarText
} from 'reactstrap';
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types';
import './NavbarTemplate.scss';
Navbar.propTypes = {
  light: PropTypes.bool,
  dark: PropTypes.bool,
  fixed: PropTypes.string,
  color: PropTypes.string,
  role: PropTypes.string,
  expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
  // pass in custom element to use
}

const NavbarTemplate = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">안부 서비스</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink to="/">홈</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/management/default">운영 관리</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/profile">내 정보</NavLink>
            </NavItem>
          </Nav>
            <NavLink to="/login">
              <Button style={{width:"max-content"}}>로그인</Button>
            </NavLink>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarTemplate;