import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button
 } from 'reactstrap';
import './Styles.css';

interface IComponentState {
  isOpen: boolean,
}

class Layout extends Component<{}, IComponentState> {
    constructor(props: {}) {
        super(props);    
        this.state = {
          isOpen: false,
        };
    }
 

    public toggle = () => {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }

  render() {
    return (
        <div>
          <Navbar color="dark" dark expand="md">
          <NavbarBrand tag={Link} to="/">
              <img src={process.env.PUBLIC_URL + '/Ocean.png'} width="32px" height="32px" alt="Logo" />{'    '}
              ORD WEB
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to="/">首頁</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/about">關於</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/docs">文件</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/mytime23/ord-web">GitHub</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
            <Container className="home" fluid>
                {this.props.children}
            </Container>
            <div>
              <p className="footer text-center">Copyright ©2019 Tim v0.1.4 </p>
            </div>
        </div>

    );
  }
}

export default Layout;