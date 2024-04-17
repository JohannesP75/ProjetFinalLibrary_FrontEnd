import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">
                    Accueil
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Système" id="basic-nav-system">
                            <NavDropdown.Item href="/branches">Branches</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/about">A propos</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Inventaire" id="basic-nav-inventory">
                            <NavDropdown.Item href="/authors">Auteurs</NavDropdown.Item>
                            <NavDropdown.Item href="/works">Œuvres</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header