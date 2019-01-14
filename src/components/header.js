import  React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container } from 'reactstrap';
import styled from 'styled-components';
import SterlingLogo from '../images/sterling-svg-logo.svg';
import { Link } from 'gatsby';
import AniLink from "gatsby-plugin-transition-link/AniLink";

/* Conditional styles based on props */
// const Button = styled.button`
//   /* If it's a small button use less padding */
//   padding: ${props => props.small ? '0.25em 1em' : '0.5em 2em'};

//   /* …more styles here… */
// `;

const StyledNav = styled(Navbar)`
  .nav-item{
    margin-bottom: 0;
  }
  .nav-item > .nav-link {
    color: #666666;
    font-size: 20px;
    font-weight: 700;
    padding: 0;
    margin-right: 20px;
    font-family: 'Hind','Helvetica Neue','Segoe UI','Helvetica','Arial',sans-serif;
  }
  .navbar-nav{
    margin-left: 30px;
  }
  .main-menu__buttons{
    a{
      color: #333;
      font-weight: 600;
    }
    span{
      margin-left: 10px;
      margin-right: 10px;
    }
  }
`;

const StyledLogo = styled(SterlingLogo)`
  width: 160px;
  height: auto;
  padding: 15px 0;
`;

class Header extends Component {

  state = {
    isOpen: false
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <StyledNav expand="md">
        <Container>
          <AniLink paintDrip hex="#ff4700" duration={1} className="navbar-brand" to="/">
            <StyledLogo />
          </AniLink>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>
              <NavItem>
                <Link className="nav-link" to="/page-2">Solutions</Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/page-3">Resources</Link>
              </NavItem>
              <NavItem>
                <Link to="/page-4" className="nav-link">About Us</Link>
              </NavItem>
            </Nav>
            <div className="main-menu__buttons ml-auto">
              <div className="right-links">
                <a href="#">Login</a>
                <span>&nbsp;|&nbsp;</span>
                <a href="#">FAQs</a>
                <span>&nbsp;|&nbsp;</span>
                <a href="#">Contact Us</a>
              </div>
            </div>
          </Collapse>
        </Container>
      </StyledNav>
    );
  }
}

export default Header

