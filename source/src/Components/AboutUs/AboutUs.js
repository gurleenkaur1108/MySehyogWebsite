
import Aboutusimg from "./Aboutusimg.svg";
import Row from "react-bootstrap/Row";
import Card from 'react-bootstrap/Card';

import bgimg from "./bgimg.svg";
import big from "./big.svg";
import Col from "react-bootstrap/Col";

import Container from 'react-bootstrap/Container';
import "./about.css"


function AboutUs(){

    return(
        <>
        <div style={{display: 'flex', justifyContent: 'center', paddingTop:"5rem", fontWeight:"900", fontFamily:"Poppins", fontSize:"4rem", color:"black"}}>
  <div>About Us</div>
</div>
<div className="d-flex h-70 border border-white container ">

<div className="py-5" style={{width: "100%"}}>
          <div className="text-center">

    <Col xs={12} sm={4} md={4} style={{width:"90%", marginLeft:"auto", marginRight:"auto"}}>
    <Card.Img variant="top" src={Aboutusimg} className="d-flex p-2"  />
    </Col>
    </div>
    </div>
    </div>
    <div style={{display: 'flex', justifyContent: 'center', paddingTop:"0.4rem", fontWeight:"900", fontFamily:"Poppins", fontSize:"2.1875rem", color:"black"}}>
  <div>Our Purpose</div>
</div>
<div style={{display: 'flex', justifyContent: 'center',  fontFamily:"Poppins", fontSize: "16px", color:"#737373"}}>
<div className="py-4" style={{width: "60%"}}>
 <p> With the ever-increasing problem of procrastination and delaying of goals/deliverables,
    we at Elekrity strive to assist and help every individual to beat that and stay on top of
    their goals.<br/> Elekrity aims to use different science-backed
    features and triggers that will help people in converting their goals to achievements.</p>

    </div>
</div>
<div >
          <div className=" px-4  align-middle" style={{display:"flex", backgroundColor: "#263238", paddingBottom: "50px", fontFamily: "Poppins" }}>
          <Container className = "my-auto">
  <Row className="align-items-center d-flex justify-content-end d-flex flex-column-reverse flex-md-row">
    <Col style={{ textAlign: 'center',    color: "#FFFFFF", width: "500px" }}>
   <div className=" align-items-start" style={{paddingTop: "40px", fontSize: "36px", color: "#FFFFFF" }}> Our Vision</div>
   <div className="mt-4" style={{ textAlign: 'center', fontSize: "19px", color: "#FFFFFF" }}>
                To change the way 10 million people think on how they want to achieve and act on their goals by 2024.
                </div>
</Col>
    <Col style={{ textAlign: 'center', fontSize: "18px", color: "#FFFFFF", width: "500px" }}>
    <img src={bgimg} alt="aboutus" srcset="" style={{ width: '100%' , height:"400px", paddingTop: "40px" }} />

    </Col>
  </Row>
  </Container>
          </div>
        </div>
        <div style={{display: 'flex', justifyContent: 'center', paddingTop:"3rem", fontWeight:"900", fontFamily:"Poppins", fontSize:"2.1875rem", color:"black"}}>
  <div>What is <span style={{color:"#0129FF" , fontFamily:"Poppins" , fontSize: "36px"}}>Elekrity</span> About</div>
</div>
<div style={{display: 'flex', justifyContent: 'center',  fontFamily:"Poppins", fontSize: "16px", color:"#737373"}}>
<div className="py-4" style={{width: "61.2%"}}>
 <p> Every single individual on this planet procrastinates once in while for any task/goal that
    they have in their mind. When a person fails to do a certain set of tasks timely,
    it is majorly because of a lack of internal motivation/urgency/responsibility. In such
     a scenario, completing the goal becomes very difficult and hence,
    external stimulus becomes extremely important for individuals to stay on track.</p>
<p>Elekrity provides its users a co-working platform that leverages psychological and
behavioral science in order to create such external stimulus and help users to stop
procrastinating and accomplish their goals timely. We intelligently use psychological
 and environmental behavioral triggers to stimulate the release of chemicals in the brain
 which boosts and increases productivity multi-folds.</p>
    </div>
</div>
<figure className="text-hover-img" style={{fontFamily:"Poppins", marginBottom:"-50px"}}>
        <img src={big} alt="A small fluffy dog" style={{height:'600px'}} />
        <figcaption className="mob">
          <h1 className="h11">    Story Behind the Name</h1>
          <p className="pp" style={{textAlign:"left", color:`rgba(${255}, ${255}, ${255}, ${0.7})` }}> Elekrity is derived from the fusion of two words, namely, ‘Alacrity’ and ‘Electric’. One represents
    being high on enthusiasm and eagerness to do something and the other represents being completely
     dynamic and taking charge of everything. Elekrity is the platform that bridges these two words
     and helps its users to convert their enthusiasm to their charge. From having the enthusiasm to
     complete achieve certain goals
    to actually completing them, Elekrity will help you beat that procrastination</p>
        </figcaption>
      </figure>
</>
    )
}

export default AboutUs;
