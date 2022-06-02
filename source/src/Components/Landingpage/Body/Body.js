import { useEffect, useState } from "react";
import {Button, Link} from 'react-bootstrap';
import "./Body.css";
// import "./CustomNavbar.css";
// import Logobody from "./Logobody.svg";
import body from "./body.jpg";
function Body()
{
  const[winWidth,setWidth]=useState(window.innerWidth);
 useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
}
    window.addEventListener('resize', handleResize)
  })
return (
<div styles={{ fontFamily: 'Poppins'}}>
<p style={{textAlign:"center", fontSize: "36px",fontFamily: 'Poppins', fontWeight: "620", margin: "150px 0px 0px 0px"}} >The one stop to create Self Help Groups </p>
<p style={{textAlign:"center", fontSize: "36px",fontFamily: 'Poppins', margin: "0px 0px 30px 0px", fontWeight: "620"}} > and make savings easy for you </p>
{/* <Button size="lg" className="button_trial1" variant="outline-primary" href="#" style={{textDecoration: 'none'}}>Get Started
       {/* <Link to="/">Sign-Up</Link>  */}
{/* </Button> */}
{/* <Button variant="outline-primary" size="lg" className="button_trial" active href="/thescience"
    style={{textDecoration: 'none' ,fontWeight: "620", boxShadow: "none" ,background: "white", color: "#0129FF",
     border: "2px solid blue",fontFamily: 'Poppins', borderRadius: "10px", fontSize: "26px" , width:"250px" , marginLeft:"auto", marginRight:"auto", display:"block" }}>
    Get Started
       {/* <Link to="/">Sign-Up</Link>  */}
    {/* </Button> */}
{/* <p style={{  margin: "40px 0px 0px 0px" }}>
<img src={body}  style={{height: "400px" ,maxWidth: "650px", width:'80%',fontWeight: "620", marginLeft:"auto", marginRight:"auto",marginBottom:'20px', display:"block" }}/>
</p> */} 
</div>
)
}
export default Body;