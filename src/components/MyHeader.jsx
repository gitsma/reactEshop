import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import './myHeader.module.css'
import { Link } from 'react-router-dom'

const MyHeader = () => {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand>React E-Shop</Navbar.Brand>
          <Nav className="container-fluid d-flex justify-content-evenly" >
            <Link style={{color:'black'}} to="/">Home</Link>
            <Link style={{color:'black'}} to="/products">Products</Link>
            <Link style={{color:'black'}} to="/cart">Cart</Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default MyHeader
