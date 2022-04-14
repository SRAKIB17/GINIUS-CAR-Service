import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo.png'

const Header = () => {
    const [user] = useAuthState(auth)

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" sticky='top'>
                <Container>
                    <Navbar.Brand as={Link} to="/"><img src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/#services">Services</Nav.Link>
                            <Nav.Link href="/#Experts">Experts</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item as={Link}  to="service/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="service/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="service/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as={Link} to="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            {
                                user?<><button onClick={()=>signOut(auth)}>Sigin out</button>
                                <h1>{user.displayName || 'none'}</h1></>

                            :<Nav.Link as={Link} to="/login">
                               Login
                            </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
};

export default Header;