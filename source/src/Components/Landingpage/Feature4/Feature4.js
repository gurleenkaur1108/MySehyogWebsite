import "./Feature4.css";
import Card from 'react-bootstrap/Card';
// import feature4img from "./Feature4img.svg";
import F4 from "./F4.jpg";
import c1 from "./c1.jpg";
function Feature4()
{
  return (
    <div className=" container" style={{margin:"70px  auto", fontFamily:"Poppins", fontWeight: "620"}}>
      <div className="row m-1 d-flex align-items-center justify-content-between">
        <div className="col-md  " style={{maxWidth:'550px'}} >
          <img src={F4} alt="feature4" srcset=""  style={{maxHeight: '370px' ,padding:'7%', width:'100%' }} />
        </div>
        <div className="col-md mt-5 mt-md-0  " style={{maxWidth:'550px',width:'100%',border: "none" ,  height:'100%',padding:'3% 3%', borderRadius:"6px", fontSize: "21px" ,        textAlign:"left" , boxShadow: "0 0 10px #b3b3b3"}}>
           <div className="text-end " >
             <Card.Img variant="top" src={c1}  style={{height: "70px" ,width: "auto" }}/>
           </div>
           <div className="" style={{width:'80%',paddingBottom:'70px',paddingLeft:'8%'}}>
               Become a leader by creating a SHG or join an existing SHG
           </div>
        </div>
      </div>
    </div>
   );
}
export default Feature4;


// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import "./Feature4.css";
// import Card from 'react-bootstrap/Card';
// //import About from "../Images/About.png"
// import Button from 'react-bootstrap/Button';
// import "bootstrap/dist/css/bootstrap.min.css";
// import feature4img from "./Feature4img.svg";
// import c1 from "./c1.jpg";
// function Feature4()
// {
//   return (<div style={{paddingLeft:"150px" , fontFamily:"Poppins", fontWeight: "620" }}>
//   {/* style={{fontWeight:"10",marginLeft:"48px",marginTop:"30px",marginBottom:"20px"}} */}
//    {/* <h3 >About Us</h3> */}
//     <Row className="p-0 m-0">
//         <Col
//         lg={3} md={3} sm={12} xs={12} style={{display:"flex",justifyContent:"space-around",paddingTop:"70px" , paddingBottom:"80px"}}>
//         <Card style={{ alignItems: "center" ,border: "none" ,paddingLeft:"300px", paddingRight:"200px" }}>
//     <Card.Img variant="top" src={feature4img}  style={{height: "350px" ,width: "600px" }}/>
//     {/* add this src={BOOKSELLER}  */}
//     <Card.Body>
//       {/* <Card.Text style={{fontWeight:"550", fontSize: "larger", paddingTop: "10px"}}>
//         Admissions open
//       </Card.Text> */}
//       <br/>
//     </Card.Body>
//   </Card>
//         </Col>

//         <Col lg={9} md={7} sm={12} xs={12} style={{display:"flex",justifyContent:"space-around",paddingTop:"100px" , paddingBottom:"80px" , paddingLeft:"100px" }}>
//           <Card  style={{ width: '450px' ,border: "1px solid #9ecaed" ,  borderRadius:"12px", fontSize: "21px" , textAlign:"left" , height:"280px" , boxShadow: "0 0 10px #9ecaed"}}>
//   <Card.Body style={{paddingLeft:"40px" }}>
//   <div style={{paddingLeft:"320px" , paddingTop:"10px"}}>
//   <Card.Img variant="top" src={c1}  style={{height: "70px" ,width: "60px" }}/>
//   </div>
//   <div  style={{justifyContent:"center", paddingTop:"20px" }}>
//     <Card.Text style={{lineHeight:"80%"}}>
//     Set your own goals, and when
//     </Card.Text>
//     <Card.Text style={{lineHeight:"80%"}}>
//      you want to work on it
//     </Card.Text>
//     </div>
//   </Card.Body>
//   {/* <Card.Body>
//     <Card.Link href="#">Card Link</Card.Link>
//     <Card.Link href="#">Another Link</Card.Link>
//   </Card.Body> */}
// </Card>

//         </Col>

//     </Row>

//    </div>


//    );
// }
// export default Feature4;