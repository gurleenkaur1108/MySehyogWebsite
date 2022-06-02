import { useEffect, useState } from "react";
import {Navbar,Nav,Button,Container,Link} from 'react-bootstrap';
// import "./Styles1.css";
import "./CustomNavbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import {  NavDropdown } from "react-bootstrap";

import Logo from "./logo.png";
function MyNavbar()
{
  const[winWidth,setWidth]=useState(window.innerWidth);
 useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
}
    window.addEventListener('resize', handleResize)
  })
  const [show, setShow] = useState(false);

return ( <div className="fixed-top">
<Navbar collapseOnSelect expand="lg"   className="colorNav_home " style={{ paddingBottom:'0' , marginBottom:"10px"}} >
<Container style={{ borderBottom:'3px solid rgba(1, 41, 255,0.2)',  marginTop:"0px" , paddingBottom:"10px"}} >
<Navbar.Brand href="/">
<h1  style={{fontFamily:'Poppins',color:'#0129ff',letterSpacing:'1.2px',marginTop:'10px'}}><b >सहYOG</b></h1>
</Navbar.Brand>
  <Navbar.Toggle aria-control ="responsive-navbar-nav" />

  {/* <i class="fa fa-search" className="symbol_home"></i> */}
  <Navbar.Collapse id="responsive-navbar-nav">

  <Nav className="align " style={{marginLeft:"auto", marginRight:"0px", marginTop:"10px" , fontFamily:"Poppins"}}>
   <Nav.Link className="button_home" href="/" style={{textDecoration: 'none' , border:"none", color:"black"  }}>Home
       {/* <Link to="/" style={{textDecoration: 'none'}}>Log-In</Link> */}
    </Nav.Link>
    <NavDropdown
        title={<span style={{color:"black"}}>Resources</span>}
        style={{marginRight:"12px", textAlign:'center',color:'black'}}
        show={show}


        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        onClick={()=>setShow(!show)}
      >
        <NavDropdown.Item style={{ color:"black"}} href="/CommunityGuidelines">Community</NavDropdown.Item>
        <NavDropdown.Item style={{ color:"black"}} href="/FAQ">FAQs</NavDropdown.Item>
        <NavDropdown.Item style={{ color:"black"}} href="/TheScience">The Science</NavDropdown.Item>

      </NavDropdown>
    {/* <Button variant="link" className="button_home" href="#" style={{textDecoration: 'none' , border:"none", color:"black"}}>Resources */}
       {/* <Link to="/">Sign-Up</Link>  */}
    {/* </Button> */}
    <Nav.Link  variant="link" className="button_home" href="/aboutus" style={{textDecoration: 'none' , border:"none", color:"black"}}>About Us
       {/* <Link to="/">Sign-Up</Link>  */}
    </Nav.Link>
    <Nav.Link  variant="link" className="button_home" href="/contactus" style={{textDecoration: 'none' , border:"none", color:"black"}}>Contact
       {/* <Link to="/">Sign-Up</Link>  */}
    </Nav.Link>


    <Button variant="link" className="button_trial" href="/" active
    style={{textDecoration: 'none' , boxShadow: "2px 5px 7px rgba(0, 0, 0, 0.15)" ,background: "#0129FF", border: "0.3px solid blue", borderRadius: "23px" , color:"white" }}>
    Request
       {/* <Link to="/">Sign-Up</Link>  */}
    </Button>
    </Nav>

  </Navbar.Collapse>

  {/* {(winWidth<991)&&(<div>
  <Navbar.Toggle aria-controls="basic-navbar-nav"/>
  <div className="myToggle_home">
  <img src={Logo} className="Imagestyle_home"/>
  <i class="fa fa-search" className="symbol_home"></i>
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="me-auto">
    <Nav.Link to="#link">Log-In</Nav.Link>
    <Nav.Link to="#link">Sign-Up</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </div>
  </div>)} */}
</Container>

</Navbar>

</div>
)
}
export default MyNavbar;