
import Body from "./Body/Body";
import Mycarousel from "./Mycarousel/Mycarousel";
import Feature1 from "./Feature1/Feature1";
import Feature2 from "./Feature2/Feature2";
import Feature3 from "./Feature3/Feature3";
import Feature4 from "./Feature4/Feature4";
import Feature5 from "./Feature5/Feature5";
import Feature6 from "./Feature6/Feature6";
import Feature7 from "./Feature7/Feature7";
import Feature8 from "./Feature8/Feature8";
// import FAQ from "./FAQ/FAQ";
import React, {Component} from "react";

function Landingpage() 
{
  
  return (
    <div className="App" >
    {/* <Login/> */}
    {/* <Nav/> */}
    {/* <hr style={{width:"83%", marginLeft:"8%" }}/> */}
    <Body/>
    <Mycarousel/>
    <div>
<p style={{textAlign:"center", fontSize: "36px", margin: "20px 0px 0px 0px" , fontFamily:"Poppins", fontWeight: "620"}} >Trying to find members for a SHG and</p>
<p style={{textAlign:"center", fontSize: "36px", margin: "0px 0px 50px 0px" , fontFamily:"Poppins" , fontWeight: "620"}} > perform joint savings? </p>
   </div>
    <Feature1/>
    <Feature2/>
    <div>
    <p style={{textAlign:"center", fontSize: "36px", margin: "60px 0px 0px 0px" , fontFamily:"Poppins", fontWeight: "620"}} >How does <span style={{color:"#0129FF" , fontFamily:"Poppins" , fontSize: "36px"}}>सहYOG
</span> work? </p>
{/* <p style={{textAlign:"center", fontSize: "36px", margin: "60px 0px 0px 0px" , fontFamily:"Poppins", fontWeight: "620"}} >How will <span style={{color:"#0129FF" , fontFamily:"Poppins" , fontSize: "36px"}}>Elekrity</span> help you? </p> */}
   </div>
   <Feature4/>
   <Feature5/>
   <Feature6/>
     
     <div>
     <p style={{textAlign:"center", fontSize: "36px", margin: "60px 0px 0px 0px" , fontFamily:"Poppins", fontWeight: "620"}} >How will <span style={{color:"#0129FF" , fontFamily:"Poppins" , fontSize: "36px"}}>सहYOG
</span> help you? </p>
{/* <p style={{textAlign:"center", fontSize: "36px", margin: "30px 0px 0px 0px" , fontFamily:"Poppins", fontWeight: "620"}} >How does <span style={{color:"#0129FF" , fontFamily:"Poppins" , fontSize: "36px"}}>Elekrity</span> work? </p> */}
   </div>
   <Feature3/>
   
   <Feature7/>
   {/* {<Feature8/>} THIS IS THE COMING SOON PART IT WORKS SO USE IT LATER */}
    </div>
  );
}

export default Landingpage;