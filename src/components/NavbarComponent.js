import React, { useState } from 'react';
import logoNavbar from '../asset/logodarqo.png'
import { Navbar, Nav, Form, FormControl, Button, Carousel, Card, Container, Row } from 'react-bootstrap'


const NavbarComponent = () => {
    return (
        <Navbar style={{ backgroundColor: '#F0B7A4' }} variant="blue">
            <Navbar.Brand href="#home">
                <img
                    style={{ width: '40px' }}
                    src={logoNavbar}
                    alt='logo'
                />
            </Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">beranda</Nav.Link>
                <Nav.Link href="#features">Kegiatan</Nav.Link>
                <Nav.Link href="#pricing">Pelajaran</Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-primary">Search</Button>
            </Form>
        </Navbar>

    )
}

export default NavbarComponent