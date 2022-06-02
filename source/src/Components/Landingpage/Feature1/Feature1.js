import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Feature1.css";
import Card from 'react-bootstrap/Card';
//import About from "../Images/About.png"
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";
// import feature1img from "./Feature1img.svg";
import F1 from "./F1.jpg";
function Feature1()
{
  return (

    <div className="container px-4 " style={{margin:"70px auto 120px", fontFamily:"Poppins", fontWeight: "620"}}>
    <div className="row m-2 align-items-center d-flex justify-content-end">
      <div className="col-md text-center pr-4" >
        <img src={F1} alt="feature4" srcset=""  style={{ width:'100%' }} />
      </div>
      <div className="col-md mt-5 button-para" style={{ height:'100%',padding:'3% 5%', borderRadius:"6px", fontSize: "21px"  }}>
         <div className=" " style={{fontWeight:"620", lineHeight:'40px', maxWidth:"460px"}}>
         With <span style={{color:"#0129FF" , fontFamily:"Poppins",fontSize:'23px'}}> सहYOG</span>
         , you can find a SHG partner in a day and start saving together
         </div>
         <Button variant="outline-primary" size="lg" className="button_trial " active href="/thescience"
    style={{textDecoration: 'none' ,  boxShadow: "2px 5px 7px rgba(0, 0, 0, 0.15)" ,background: "rgb(1, 41, 255)", border: "0.3px solid blue",margin:'50px 0', borderRadius: "10px", fontSize: "20px" , width:"220px"}}>
    I'm Interested
       {/* <Link to="/">Sign-Up</Link>  */}
    </Button>
      </div>
    </div>
  </div>

//   <div style={{paddingLeft:"150px" , fontFamily: 'Poppins', fontWeight: "620" }}>
//   {/* style={{fontWeight:"10",marginLeft:"48px",marginTop:"30px",marginBottom:"20px"}} */}
//    {/* <h3 >About Us</h3> */}
//     <Row className="p-0 m-0">
//         <Col
//         lg={3} md={3} sm={12} xs={12} style={{display:"flex",justifyContent:"space-around",paddingTop:"30px" , paddingBottom:"80px"}}>
//         <Card style={{ alignItems: "center" ,border: "none" ,paddingLeft:"300px", paddingRight:"200px" }}>
//     <Card.Img variant="top" src={feature1img}  style={{height: "400px" ,width: "600px" }}/>
//     <Card.Body>
//       {/* <Card.Text style={{fontWeight:"550", fontSize: "larger", paddingTop: "10px"}}>
//         Admissions open
//       </Card.Text> */}
//       <br/>
//     </Card.Body>
//   </Card>
//         </Col>

//         <Col lg={9} md={7} sm={12} xs={12} style={{display:"flex",justifyContent:"space-around",paddingTop:"100px" , paddingBottom:"80px"}}>
//           <Card  style={{ width: '620px' ,border: "none"  , fontSize: "23px"  }}>
//   <Card.Body>
//     <Card.Text style={{ paddingLeft:"70px"  }}>
//     With <span style={{color:"#0129FF" , fontFamily:"Poppins" , fontSize: "23px"}}>Elekrity</span>, you can find a work partner in
//     </Card.Text>
//     <Card.Text style={{ paddingLeft:"70px"  }}>
//     seconds and get things done together
//     </Card.Text>
//     <br/>
//     <Button variant="outline-primary" size="lg" className="button_trial" href="#" active
//     style={{textDecoration: 'none' ,  boxShadow: "2px 5px 7px rgba(0, 0, 0, 0.15)" ,background: "rgb(1, 41, 255)", border: "0.3px solid blue", borderRadius: "10px", marginLeft:"80px" , fontSize: "20px" , width:"220px"}}>
//     Book a  Session
//        {/* <Link to="/">Sign-Up</Link>  */}
//     </Button>
//   </Card.Body>
//   {/* <Card.Body>
//     <Card.Link href="#">Card Link</Card.Link>
//     <Card.Link href="#">Another Link</Card.Link>
//   </Card.Body> */}
// </Card>
//         </Col>

//     </Row>
//    </div>

    );
}
export default Feature1;