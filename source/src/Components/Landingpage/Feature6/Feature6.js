import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Feature6.css";
import Card from 'react-bootstrap/Card';
//import About from "../Images/About.png"
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";
// import feature6img from "./Feature6img.svg";
import F6 from "./F6.jpg";
import c3 from "./c3.jpg";
function Feature6()
{
  return (

    <div className=" container" style={{margin:"70px  auto", fontFamily:"Poppins", fontWeight: "620"}}>
    <div className="row m-1 d-flex align-items-center justify-content-between">
      <div className="col-md  " style={{maxWidth:'550px'}} >
        <img src={F6} alt="feature4" srcset=""  style={{maxHeight: '350px' ,padding:'7%', width:'100%' }}  />
      </div>
      <div className="col-md mt-5 mt-md-0  " style={{maxWidth:'550px',width:'100%',border: "none" ,  height:'100%',padding:'3% 3%', borderRadius:"6px", fontSize: "21px" ,        textAlign:"left" , boxShadow: "0 0 10px #b3b3b3"}}>
         <div className="text-end " >
           <Card.Img variant="top" src={c3}  style={{height: "70px" ,width: "auto" }}/>
         </div>
         <div className="" style={{width:'80%',paddingBottom:'70px',paddingLeft:'8%'}}>
         Let us compare SHG policies and select the best for you
         </div>
      </div>
    </div>
  </div>
   );
}
export default Feature6;