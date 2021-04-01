import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import About from '../Body/About'
import Home from '../Body/Home'
import Services from '../Body/Services'
export default function Navbaar() {
    return (
        <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">

         
          <Nav.Link className="Link_Color"><Link to="/">Home</Link></Nav.Link>

<Nav.Link><Link to="/About">About</Link></Nav.Link>
<Nav.Link><Link to="Services">Services</Link></Nav.Link>
          

            
                   
            </Nav>
            </Navbar>
        
      </>
    )
}
