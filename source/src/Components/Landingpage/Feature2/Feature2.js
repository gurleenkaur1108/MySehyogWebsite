import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Feature2.css";
import Card from 'react-bootstrap/Card';
//import About from "../Images/About.png"
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";
// import feature2img from "./Feature2img.svg";
import F2 from "./F2.jpg";
function Feature2()
{
  return (
     <div style={{backgroundColor:"#263238",paddingTop:'50px', fontFamily:"Poppins" ,color:"white"}}>
    <div className="container px-4  align-middle" style={{backgroundColor:"#263238", paddingBottom:"50px", fontFamily:"Poppins"}}>
    <div className="row  align-items-center d-flex justify-content-end d-flex flex-column-reverse flex-md-row">
    <div className="col-md " style={{ height:'100%',padding:'3% 6%', borderRadius:"6px", fontSize: "21px" }}>

        <div className="pt-4 pt-md-0 mobile-text " style={{ textAlign:'right',maxWidth:"455px"}}>
        We connect you to people with similar goals and saving commitments, so you can experience the benefits of joint savings anywhere, anytime
        </div>
     </div>
      <div className="col-md text-center " >
        <img src={F2} alt="feature4" srcset=""  style={{ width:'100%' }} />
      </div>

    </div>
  </div>

    </div>
//     <div style={{backgroundColor:"#263238", paddingBottom:"50px" , height: "600px" , fontFamily:"Poppins" }}>
//   <Row className="p-0 m-0">
        // <Col lg={6} md={7} sm={12} xs={12} style={{display:"flex",justifyContent:"space-around",paddingTop:"100px" , paddingBottom:"80px"}}>
//           <Card  style={{ width: '32rem' ,border: "none" ,backgroundColor:"#263238" , color:"white"}}>
//   <Card.Body>
//     <Card.Text style={{ textAlign:"right" , fontSize:"23px"}}>
//     <br/>
//     <br/>
//     <br/>
//     We connect you to people with similar goals and time commitments, so you can experience the magic of coworking anywhere, anytime
//     </Card.Text>
//     {/* <Card.Text style={{ textAlign:"right" , fontSize:"23px" }}>
//     goals and time commitments, so you can
//     </Card.Text>
//     <Card.Text style={{ textAlign:"right" , fontSize:"23px" }}>
//     experience the magic of coworking
//     </Card.Text>
//     <Card.Text style={{ textAlign:"right" , fontSize:"23px"}}>
//     anywhere, anytime
//     </Card.Text> */}
//     <br/>
//   </Card.Body>
// </Card>
//         </Col>
//         <Col
//         lg={5} md={3} sm={12} xs={12} style={{display:"flex",justifyContent:"space-around",paddingTop:"20px" , paddingBottom:"20px"}}>
//         <Card style={{alignItems: "center" ,border: "none", background:"#263238"}}>
//     <Card.Img variant="top" src={feature2img}  style={{height: "550px" ,width: "500px"}}/>
//   </Card>
//         </Col>
//     </Row>
// </div>
);
}
export default Feature2;