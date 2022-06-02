import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Feature3.css";
import Card from 'react-bootstrap/Card';
//import About from "../Images/About.png"
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";
// import feature3img from "./Feature3img.svg";
import F3 from "./F3.jpg";
function Feature3()
{
  return (

    <div className="container " style={{margin:"10px auto 20px", fontFamily:"Poppins", fontWeight: "620"}}>
    <div className="row align-items-center d-flex justify-content-end">
      <div className="col-md text-center mr-md-5" >
        <img src={F3} alt="feature4" srcset="" style={{maxHeight: '600px' ,padding:'4%', width:'100%' }} />
      </div>
      <div className="col-md mt-4 ml-md-5  " style={{ height:'100%',padding:'2%', borderRadius:"6px", fontSize: "21px" , textAlign:"left",padding:'1rem 3rem  '}}>
        <div style={{maxWidth:"495px"}}>
        सहYOG leverages the power of co-savings and commitment to promote economic freedom within rural women 
     by helping them form online Self Help Groups.
     <br/>
     <br/>
     We spread awareness and intelligently make SHGs online by connecting women across the country, 
     where the gender ratio is neglected and female foeticides still prevail, inorder to help them save up an ample sum.
     </div>
     <div className=" mt-5 button-para" style={{margin:'0 auto'}}>
     <Button variant="outline-primary" size="lg" className="button_trial " href="#" active href="/thescience"
    style={{textDecoration: 'none', boxShadow: "2px 5px 7px rgba(0, 0, 0, 0.15)" ,background: "white", color: "#0129FF",
     border: "2px solid blue",  fontSize: "20px" ,  borderRadius:"15px" }}>
   Read More
       {/* <Link to="/">Sign-Up</Link>  */}
    </Button>
    </div>
      </div>
    </div>
  </div>
//   <div style={{fontFamily:"Poppins", fontWeight: "620"}} >
//   {/* style={{fontWeight:"10",marginLeft:"48px",marginTop:"30px",marginBottom:"20px"}} */}
//    {/* <h3 >About Us</h3> */}
//     <Row className="p-0 m-0"  >
//         <Col
//         lg={3} md={3} sm={12} xs={12} style={{display:"flex",justifyContent:"space-around"}}>
//         <Card style={{ alignItems: "center" ,border: "none" ,paddingLeft:"500px", paddingRight:"200px", height:"600px"  }}>
//     <Card.Img variant="top" src={feature3img}  style={{height: "500px" ,width: "550px" }}/>
//     <Card.Body>
//       {/* <Card.Text style={{fontWeight:"550", fontSize: "larger", paddingTop: "10px"}}>
//         Admissions open
//       </Card.Text> */}

//     </Card.Body>
//   </Card>
//         </Col>

//         <Col lg={9} md={7} sm={12} xs={12} style={{display:"flex",justifyContent:"space-around",paddingTop:"70px", paddingLeft:"50px" }}>
//           <Card  style={{ width: '37rem' ,border: "none"  ,  fontSize: "20px" , paddingLeft:"20px" }}>
//   <Card.Body>
//     <Card.Text style={{ paddingLeft:"40px" ,paddingBottom:"20px"  }}>
//     Elekrity leverages the power of behavioral triggers to enhance productivity and stop an
//     individual from procrastinating.
//     <br/>
//     <br/>
//     We intelligently use psychological and environmental behavioral
//     triggers to stimulate the release of chemicals in the brain which boosts and increases productivity multi-folds.
//     </Card.Text>
//     {/* <Card.Text style={{ paddingLeft:"40px" ,paddingBottom:"20px"  }}> */}
//     {/* Elekrity leverages the power of behavioral triggers to enhance productivity and stop an
//     individual from procrastinating.
//     <br/>
//     <br/> */}
//     {/* We intelligently use psychological and environmental behavioral
//     triggers to stimulate the release of chemicals in the brain which boosts and increases productivity multi-folds.
//     </Card.Text> */}

//     <Button variant="outline-primary" size="lg" className="button_trial" href="#" active
//     style={{textDecoration: 'none' , boxShadow: "2px 5px 7px rgba(0, 0, 0, 0.15)" ,background: "white", color: "#0129FF",
//      border: "2px solid blue", marginLeft:"40px" , fontSize: "20px" , width:"200px" , borderRadius:"15px"}}>
//    Read More
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
export default Feature3;