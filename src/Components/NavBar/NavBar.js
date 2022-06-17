import logo from '../../assets/logoSushi.png'
import React from "react";
import './NavBar.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar, Button, Container, Form, FormControl} from 'react-bootstrap'

const NavBar = () => {
    return (

<Navbar bg="dark" variant='dark' expand="lg">
<Container fluid>
<img src={logo} width='65' alt='Logo'/>{' '}
<Navbar.Brand href="#"> </Navbar.Brand>
<Navbar.Toggle aria-controls="navbarScroll" />
<Navbar.Collapse id="navbarScroll">
    <Nav
    className="me-auto my-2 my-lg-0"      
    navbarScroll
    >
        <Nav.Link className='nav-link' href='menu'>Carta</Nav.Link>
        <Nav.Link className='nav-link' href='about'>Nosotros</Nav.Link>
        <Nav.Link className='nav-link' href='contact'>Contacto</Nav.Link>
        </Nav>
    <Form className="d-flex">
    <FormControl
        type="search"
        placeholder="Busca tu roll"
        className="me-2"
        aria-label="Search"
    />
    <Button variant="danger">Entra</Button>
    </Form>
</Navbar.Collapse>
</Container>
</Navbar>
    )
}

export default NavBar