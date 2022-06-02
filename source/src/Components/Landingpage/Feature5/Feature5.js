import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Feature5.css";
import Card from 'react-bootstrap/Card';
//import About from "../Images/About.png"
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";
// import feature5img from "./Feature5img.svg";
import F5 from "./F5.jpg";
import c2 from "./c2.jpg";
function Feature5()
{
  return (

    <div className=" container" style={{margin:"70px  auto", fontFamily:"Poppins", fontWeight: "620"}}>
    <div className="row m-1 align-items-center d-flex justify-content-between d-flex flex-column-reverse flex-md-row">

      <div className="col-md mt-5 mt-md-0  " style={{maxWidth:'550px',width:'100%',border: "none" ,  height:'100%',padding:'3% 3%', borderRadius:"6px", fontSize: "21px" ,        textAlign:"left" , boxShadow: "0 0 10px #b3b3b3"}}>
         <div className=" " >
           <Card.Img variant="top" src={c2}  style={{height: "70px" ,width: "auto" }}/>
         </div>
         <div className="text-end" style={{paddingBottom:'70px',paddingRight:'6%',paddingTop:'2%'}}>
         Get connected with your virtual saving partners, and commit to staying focused
         </div>
      </div>
      <div className="col-md  " style={{maxWidth:'550px'}} >
       <img src={F5} alt="feature5" srcset=""  style={{maxHeight: '390px' ,padding:'7%', width:'100%' }} />
      </div>
    </div>
  </div>
  //   <div className="container px-4 " style={{margin:"70px auto 50px", fontFamily:"Poppins", fontWeight: "620"}}>
  //   <div className="row m-2 align-items-center d-flex justify-content-end d-flex flex-column-reverse flex-md-row">
  //   <div className="col-md mt-5 mr-0 mr-md-5 " style={{border: "1px solid #9ecaed" , height:'100%',padding:'1% 2%', borderRadius:"6px", fontSize: "21px" , boxShadow: "0 0 10px #9ecaed"}}>
  //        <div className="mb-2  " >
  //          <Card.Img variant="top" src={c2}  style={{height: "70px" ,width: "auto" }}/>
  //        </div>
  //        <div className="d-flex text-right" style={{paddingLeft:'5%',paddingRight:'7%',paddingBottom:'70px',textAlign:'right'}}>
  //        Get connected with your virtual work buddy, and commit to staying focused
  //        </div>
  //     </div>
  //     <div className="col-md text-center ml-md-5 mt-md-5 mt-md-0" >
  //       <img src={feature5img} alt="feature4" srcset=""  style={{maxHeight: "350px" ,maxWidth: "600px", width:'100%' }} />
  //     </div>

  //   </div>
  // </div>

//   <div style={{paddingLeft:"120px" , height:"350px" , fontFamily:"Poppins", fontWeight: "620"}}>
//   {/* style={{fontWeight:"10",marginLeft:"48px",marginTop:"30px",marginBottom:"20px"}} */}
//    {/* <h3 >About Us</h3> */}
//     <Row className="p-0 m-0">

//     <Col lg={5} md={3} sm={12} xs={12} style={{display:"flex",justifyContent:"space-around", paddingBottom:"20px" , width: '600px' }}>
//           <Card  style={{ width: '450px' ,border: "1px solid #9ecaed" ,  borderRadius:"12px" , fontSize: "20px" , height:"280px" , boxShadow: "0 0 10px #9ecaed"}}>
//   <Card.Body style={{paddingLeft:"30px" }}>
//   <div style={{paddingRight:"10px" , paddingTop:"10px" , textAlign:"left"}}>
//   <Card.Img variant="top" src={c2}  style={{height: "70px" ,width: "60px" }}/>
//   </div>
//   <div  style={{justifyContent:"center", paddingTop:"20px" }}>

//     <Card.Text style={{  textAlign:"right", lineHeight:"80%"}}>
//     Get connected with your virtual work
//     </Card.Text>
//     <Card.Text style={{  textAlign:"right", lineHeight:"80%"}}>
//      buddy, and commit to staying focused
//     </Card.Text>
//     </div>
//   </Card.Body>
//   {/* <Card.Body>
//     <Card.Link href="#">Card Link</Card.Link>
//     <Card.Link href="#">Another Link</Card.Link>
//   </Card.Body> */}
// </Card>
//         </Col>

//         <Col
//         lg={5} md={3} sm={12} xs={12} style={{display:"flex",justifyContent:"space-around", paddingLeft:"90px"}}>
//         <Card style={{ alignItems: "center" ,border: "none" ,paddingLeft:"270px" , paddingRight:"170px" , height: "400px"}}>
//     <Card.Img variant="top" src={feature5img}  style={{height: "300px" ,width: "400px" }}/>
//     {/* add this src={BOOKSELLER}  */}
//     <Card.Body>
//       {/* <Card.Text style={{fontWeight:"550", fontSize: "larger", paddingTop: "10px"}}>
//         Admissions open
//       </Card.Text> */}
//       <br/>
//     </Card.Body>
//   </Card>
//         </Col>

//     </Row>
//    </div>

   );
}
export default Feature5;