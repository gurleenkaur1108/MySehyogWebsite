import { useEffect, useState } from "react";
import {Button, Link} from 'react-bootstrap';
import "./Feature7.css";
// import "./CustomNavbar.css";
// import feature7img from "./Feature7img.svg";
import F7 from "./F7.jpg";
function Feature7()
{
  const[winWidth,setWidth]=useState(window.innerWidth);
 useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
}
    window.addEventListener('resize', handleResize)
  })
return (
<div style={{fontFamily:"Poppins", fontWeight: "620"}} >
<p style={{textAlign:"center", fontSize: "36px", margin: "60px 0px 0px 0px"}} ><span style={{color:"#0129FF", fontSize: "36px",fontFamily:"Poppins" }}>सहYOG
</span> is not just another scheme, it is an investment</p>
<p style={{textAlign:"center", fontSize: "36px", margin: "0px 0px 50px 0px" }} > for your team's collective future</p>
<p style={{textAlign:"center" }}>
{/* <Button size="lg" className="button_trial1" variant="outline-primary" href="#" style={{textDecoration: 'none'}}>Get Started
       {/* <Link to="/">Sign-Up</Link>  */}
{/* </Button> */}
{/* <Button variant="outline-primary" size="lg" className="button_trial" href="#" active
    style={{textDecoration: 'none' , boxShadow: "none" ,boxShadow: "2px 5px 7px rgba(0, 0, 0, 0.15)" ,background: "#0129FF", border: "0.3px solid blue", borderRadius: "10px", color:"white" , fontSize: "26px" , width:"250px" }}>
    Book a Session
       {/* <Link to="/">Sign-Up</Link>  */}
    {/* </Button> */}
</p>
<p style={{textAlign:"center", margin: "50px 0px 0px 0px" }}>
<img src={F7}  style={{height: "400px" ,maxWidth: "900px", width:'80%',fontWeight: "620", marginLeft:"auto", marginRight:"auto",marginBottom:'40px', display:"block" }}/>

</p>
</div>
)
}
export default Feature7;