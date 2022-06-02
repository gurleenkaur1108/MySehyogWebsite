import Row from "react-bootstrap/Row";
import { useEffect, useState } from "react";
// import "./FAQ.css";
import Cg from "./Cg.svg";
import tick from "./tick.svg";
import cross from "./cross.svg";
import circlegreen from "./circleGreen.svg";
import circlered from "./circleRed.svg";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";

function CommunityGuidelines()
{
  return (  <div style={{ fontFamily: 'Poppins', fontWeight: "620" }}>
   <Row className="p-0 m-0">
   <Card.Img variant="top" src={Cg}  />
  <p style={{textAlign:"center", fontSize: "35px", margin: "20px 0px 0px 0px" , fontFamily:"Poppins", fontWeight: "620" ,paddingTop:"20px"}} >Community Guidelines </p>

  <Col lg={8} md={3} sm={12} xs={12} style={{justifyContent:"space-around",paddingTop:"10px" , paddingBottom:"10px", marginLeft:"auto", marginRight:"auto", display:"flex"}}>
        <Card  style={{ width: '840px' ,border: "none"  }}>
  <Card.Body>
    {/* <Card.Text style={{ paddingLeft:"5px" , fontSize: "26px" }}>
    How can we help you?
    </Card.Text > */}
    <Card.Text style={{ paddingLeft:"5px",  color:"#737373" , fontSize: "16px" , paddingBottom:"10px"}}>
    At Elekrity, productivity thrives because of committed community members at its heart.
     We at Elekrity believe very strongly in building the right community with the right
     people as that itself makes the majority of the difference. It is the community members
      themselves who help each other reach their maximum potential. It is important that each
      user honors the community pledge and follows the code of conduct while engaging on the
       platform without any exceptions.
    </Card.Text>
  </Card.Body>
</Card>
</Col>
  </Row>

  <Row className="p-0 m-0">
   {/* <Card.Img variant="top" src={Cg}  style={{height: "400px" }}/> */}
  {/* <p style={{ padddingLeft:"250px", fontSize: "20px", margin: "20px 0px 0px 0px" , fontFamily:"Poppins", fontWeight: "620"}} >Elekrity Pledge </p> */}

  <Col lg={8} md={3} sm={12} xs={12} style={{justifyContent:"space-around",paddingTop:"10px" , paddingBottom:"20px", marginLeft:"auto", marginRight:"auto", display:"flex"}}>
        <Card  style={{ width: '840px' ,border: "none"  }}>
        <Card.Text style={{ paddingLeft:"17px",  color:"#0129FF" , fontSize: "24px" , height:"20px"}}>
        Elekrity Pledge
    </Card.Text>
  <Card.Body>
    {/* <Card.Text style={{ paddingLeft:"5px" , fontSize: "26px" }}>
    How can we help you?
    </Card.Text > */}
    <Card.Text style={{   color:"#737373" , fontSize: "16px" }}>
    We invite you to take the following pledge before you start your journey on Elekrity:
    </Card.Text>
    <Card.Text style={{   color:"black" , fontSize: "15px" , borderLeft:"2px solid #0129FF"}}>
    <p style={{   paddingLeft:"10px" }}>I will be kind, encouraging, and professional with my working partner.
    I will eliminate distractions and disturbances as much as I can to maximize
    productivity and honor my commitments. I will stick to my tasks and work
     sincerely in order to achieve my set goal during the sessions and not violate
      the code of conduct when working with my partner.
    I will respect my coworking partner's goals as well as their time.</p>
    </Card.Text>
  </Card.Body>
</Card>
  </Col>
  </Row>

  <Row className="p-0 m-0">
        <Col lg={8} md={3} sm={12} xs={12} style={{justifyContent:"space-around",paddingTop:"10px" , paddingBottom:"20px", marginLeft:"auto", marginRight:"auto", display:"flex"}}>
        <Card  style={{ width: '840px' ,border: "none"  }}>
        <Card.Text style={{ paddingLeft:"17px",  color:"#0129FF" , fontSize: "24px" , height:"20px"}}>
        Code of Conduct
    </Card.Text>
  <Card.Body>
    <Card.Text style={{   color:"#737373" , fontSize: "15px" , paddingBottom:"10px"}}>
    The internet is a big place, and sometimes people use it irresponsibly.
     So, to avoid any misuse of Elekrity by irresponsible people, we’ve put together a Code of
     Conduct which needs to be followed irrespective of anything, to keep your partner as well
     as yourself secure and comfortable. If you don’t feel safe or if someone breaks one of these
     rules, please let us know. We’ve got your back!
    </Card.Text>
    <Card.Text style={{  color:"#737373" , fontSize: "15px" , paddingBottom:"10px"}}>
    These rules apply to all interactions on Elekrity—in sessions, in all community forums, and at all events.
     Let’s build together a stronger, safer and better community here at Elekrity!
    </Card.Text>
  </Card.Body>
</Card>
        </Col>
  </Row>

  <Row className="p-0 m-0">
        <Col lg={8} md={3} sm={12} xs={12} style={{justifyContent:"space-around",paddingTop:"10px" , paddingBottom:"80px", marginLeft:"auto", marginRight:"auto", display:"flex"}}>
        <Card  style={{ width: '840px' ,border: "none" ,  borderRadius:"12px" , boxShadow: "0 0 5px #9F9999"}}>
        <Card.Text style={{ textAlign:"center", paddingTop:"24px", paddingBottom:"20px", color:"#0129FF" , fontSize: "24px" , height:"20px"}}>
        Disobeying this code of conduct will result in a permanent ban
    </Card.Text>
  <Card.Body>
  {/* <Card.Img variant="top" src={n1}  style={{height: "80px" ,width: "auto" , position:"absolute"}}/> */}

    <p style={{height: "65px" ,width: "50px" , position:"absolute" , fontSize:"65px" ,paddingLeft:"23px" , color:"#C3CBF6"  , zIndex:"1" }}>1</p>
    <Card.Text style={{ paddingLeft:"35px", position:"relative" , paddingTop:"23px" , width:"740px" , color:"black" , fontSize: "15px" , paddingBottom:"30px" , zIndex:"2"}}>
    {/* <Card.Img variant="top" src={n1}  style={{height: "100px" ,width: "50px" , position:"absolute" , zIndex: "8"}}/> */}
    {/* <p style={{height: "70px" ,width: "50px" , position:"absolute" , fontSize:"45px" }}>1</p> */}
    No sexual misconduct, sexual harassment or nudity in any form. There will be
    absolute zero tolerance of anything
     on the lines of nudity/sexual acts/sexual harassment.
    </Card.Text>
    <p style={{height: "65px" ,width: "50px" , position:"absolute" , fontSize:"65px" ,paddingLeft:"12px" , color:"#C3CBF6"  , zIndex:"1" }}>2</p>
    <Card.Text style={{zIndex:"2", position:"relative" , paddingTop:"23px" , paddingLeft:"35px", width:"740px" , color:"black" , fontSize: "15px" , paddingBottom:"30px"}}>
    No hateful comments, threats or violence.
    You shouldn’t threaten anyone or make them feel unsafe. Self-harm is also forbidden.
    </Card.Text>
    <p style={{height: "65px" ,width: "50px" , position:"absolute" , fontSize:"65px" ,paddingLeft:"12px" , color:"#C3CBF6"  , zIndex:"1" }}>3</p>
    <Card.Text style={{zIndex:"2", position:"relative" , paddingTop:"23px" , paddingLeft:"35px", width:"770px" , color:"black"  , fontSize: "15px" , paddingBottom:"30px"}}>
    No inappropriate remarks. Don’t talk flirtatiously and try to avoid anything that makes the person feel
     uncomfortable. You shouldn’t talk about your partner’s physical appearance or body shape.
    </Card.Text>
    <p style={{height: "65px" ,width: "50px" , position:"absolute" , fontSize:"65px" ,paddingLeft:"12px" , color:"#C3CBF6" , zIndex:"1" }}>4</p>
    <Card.Text style={{ zIndex:"2", position:"relative" , paddingTop:"23px" ,paddingLeft:"35px", width:"770px" , color:"black"  , fontSize: "15px" , paddingBottom:"30px"}}>
    No breach of privacy. Things like a partner's exact location, address, age or
    any other personally identifiable information shouldn’t be asked.
    </Card.Text>
    <p style={{height: "65px" ,width: "50px" , paddingTop:"10px", position:"absolute" , fontSize:"65px" ,paddingLeft:"12px" , color:"#C3CBF6"  , zIndex:"1" }}>5</p>
    <Card.Text style={{ zIndex:"2", position:"relative" , paddingTop:"23px" ,paddingLeft:"35px", width:"770px" , color:"black"  , fontSize: "15px" , paddingBottom:"30px"}}>
    No bullying, discrimination or harassment. Don’t mention anything degrading on the grounds of caste,
     religion, creed, ethnicity, race or nationality. Other personal
    preferences like sexual orientation and gender identity and expression shouldn’t be talked about.
    </Card.Text>
    <p style={{height: "65px" ,width: "50px" , position:"absolute" , fontSize:"65px" ,paddingLeft:"12px" , color:"#C3CBF6" , zIndex:"1" }}>6</p>
    <Card.Text style={{zIndex:"2", position:"relative" , paddingTop:"23px" , paddingLeft:"35px", width:"770px" , color:"black"  , fontSize: "15px" , paddingBottom:"40px"}}>
    No advertisement, selling or promotion. Don’t
     advertise or promote a brand, service, product or company in any way.
    </Card.Text>
  </Card.Body>
</Card>
        </Col>
  </Row>

  <Row className="p-0 m-0">
  <Col lg={4} md={7} sm={12} xs={12} style={{display:"flex",justifyContent:"space-around",paddingTop:"10px" , paddingBottom:"40px",
  marginLeft:"auto" ,marginRight:"10px", display:"flex"}}>
<Card  style={{ width: '385px'  , height:"600px" ,border: "none" , boxShadow: "0 0 5px #02D951" }}>

          <div style={{textAlign:"left", color:"#07D04A", fontSize:"24px",fontFamily: 'Poppins', fontWeight: "620" , paddingLeft:"55px" , paddingTop:"20px"  , paddingBottom:"15px"}}> Do's</div>

            <img src={circlegreen} style={{ position:"absolute" ,height:"7px", width:"7px" , marginLeft:"13px", marginTop:"78px"}}/>
            <p style={{   margin:"0px" , paddingLeft:"30px" , textAlign:"left"  ,fontFamily: 'Poppins',
             fontWeight: "620" , fontSize:"14px" , paddingRight:"15px" }}>
               Ensure that you have a computer with a camera, a microphone and a stable
                internet connection for the best experience.</p>
                <img src={circlegreen} style={{position:"absolute" ,height:"7px", width:"7px" , marginLeft:"13px" , marginTop:"141px"}}/>
            <p style={{  margin:"0px" , paddingLeft:"30px" , textAlign:"left"  ,fontFamily: 'Poppins',
             fontWeight: "620" , fontSize:"14px"  , paddingRight:"15px" }}>
               Be punctual for your sessions. In case, there is an emergency or you have to cancel/ reschedule, it is highly
                recommended that you do it beforehand otherwise your partner will be waiting for you.</p>

                <img src={circlegreen} style={{ position:"absolute" , marginTop:"245px",height:"7px", width:"7px" , marginLeft:"13px"}}/>
            <p style={{   margin:"0px" , paddingLeft:"30px" , textAlign:"left"  ,fontFamily: 'Poppins',
             fontWeight: "620" , fontSize:"14px" , paddingRight:"15px"  }}>
               Keep your mic on if you’re doing non-audio work like completing your assignment or reading a book.
               It does increase your productivity and accountability.</p>
                <img src={circlegreen} style={{position:"absolute" , marginTop:"329px", height:"7px", width:"7px" , marginLeft:"13px"}}/>
            <p style={{  margin:"0px" , paddingLeft:"30px" , textAlign:"left"  ,fontFamily: 'Poppins',
             fontWeight: "620" , fontSize:"14px"  , paddingRight:"15px" }}>
               Prepare yourself for the session beforehand. Keep the things you require alongside you before the start time, like water,
                pen, paper, etc.</p>
                <img src={circlegreen} style={{position:"absolute" , marginTop:"392px", height:"7px", width:"7px" , marginLeft:"13px"}}/>
            <p style={{   margin:"0px" , paddingLeft:"30px" , textAlign:"left"  ,fontFamily: 'Poppins',
             fontWeight: "620" , fontSize:"14px"  , paddingRight:"15px" }}>
               Update your progress at the dashboard and ensure that you
               accomplish your goals set for the session.</p>
                <img src={circlegreen} style={{position:"absolute" , marginTop:"456px", height:"7px", width:"7px" , marginLeft:"13px"}}/>
            <p style={{   margin:"0px" , paddingLeft:"30px" , textAlign:"left"  ,fontFamily: 'Poppins',
             fontWeight: "620" , fontSize:"14px" , paddingRight:"15px"  }}>
               Make sure you report your partner’s presence during the
               session and give an honest review about the session.</p>
               <img src={circlegreen} style={{position:"absolute" , marginTop:"519px", height:"7px", width:"7px" , marginLeft:"13px"}}/>
            <p style={{  margin:"0px" , paddingLeft:"30px" , textAlign:"left"  ,fontFamily: 'Poppins',
             fontWeight: "620" , fontSize:"14px"  , paddingRight:"15px" }}>
               Greet your partner at the start, declare your objective for the session
               and say goodbye at the end.</p>
   </Card>
  </Col>

  <Col lg={4} md={7} sm={12} xs={12} style={{display:"flex",justifyContent:"space-around",paddingTop:"10px" , paddingBottom:"40px",
  marginLeft:"10px" ,marginRight:"auto", display:"flex"}}>
<Card  style={{ width: '385px'  , height:"600px" ,border: "none" , boxShadow: "0 0 5px #E16B6B" }}>
<div style={{textAlign:"left", color:"#FF6E6E", fontSize:"24px",fontFamily: 'Poppins', fontWeight: "620" , paddingLeft:"55px" , paddingTop:"20px"  , paddingBottom:"15px"}}> Don'ts</div>

      <img src={circlered} style={{ position:"absolute" ,height:"7px", width:"7px" , marginLeft:"13px", marginTop:"78px"}}/>
      <p style={{   margin:"0px" , paddingLeft:"30px" , textAlign:"left"  ,fontFamily: 'Poppins',
       fontWeight: "620" , fontSize:"14px" , paddingRight:"15px" }}>
         Don’t do anything that violates the code of conduct. </p>
          <img src={circlered} style={{position:"absolute" ,height:"7px", width:"7px" , marginLeft:"13px" , marginTop:"120px"}}/>
      <p style={{  margin:"0px" , paddingLeft:"30px" , textAlign:"left"  ,fontFamily: 'Poppins',
       fontWeight: "620" , fontSize:"14px"  , paddingRight:"15px" }}>
         Don’t disturb your partner during the session. Avoid unnecessary talk of any kind. Remember that you’ve signed up to
         get on with your work, not chitter chatter.  </p>
          {/* <img src={circlered} style={{ position:"absolute" , marginTop:"141px", height:"7px", width:"7px" , marginLeft:"13px"}}/>
      <p style={{   margin:"0px" , paddingLeft:"30px" , textAlign:"left"  ,fontFamily: 'Poppins',
       fontWeight: "620" , fontSize:"14px"  , paddingRight:"15px" }}>
         Avoid unnecessary talk of any kind. Remember that you’ve signed up to
         get on with your work, not chitter chatter.</p> */}
          <img src={circlered} style={{ position:"absolute" , marginTop:"204px",height:"7px", width:"7px" , marginLeft:"13px"}}/>
      <p style={{   margin:"0px" , paddingLeft:"30px" , textAlign:"left"  ,fontFamily: 'Poppins',
       fontWeight: "620" , fontSize:"14px" , paddingRight:"15px"  }}>
         Don’t use your mobile to chat or attend calls. It is highly recommended that your smartphone be kept on the Do
         not Disturb setting for the entire duration of the session.</p>
          <img src={circlered} style={{position:"absolute" , marginTop:"288px", height:"7px", width:"7px" , marginLeft:"13px"}}/>
      <p style={{  margin:"0px" , paddingLeft:"30px" , textAlign:"left"  ,fontFamily: 'Poppins',
       fontWeight: "620" , fontSize:"14px"  , paddingRight:"15px" }}>
         Do not leave the session in between. You have a sense of commitment towards your partner and that should not be taken
         lightly or for granted.</p>
          <img src={circlered} style={{position:"absolute" , marginTop:"350px", height:"7px", width:"7px" , marginLeft:"13px"}}/>
      <p style={{   margin:"0px" , paddingLeft:"30px" , textAlign:"left"  ,fontFamily: 'Poppins',
       fontWeight: "620" , fontSize:"14px"  , paddingRight:"15px" }}>
         Don't be hesitant to report your partner if they breach the code of conduct. Your safety is
          at the topmost priority to us and hence we strive to maintain decorum at Elekrity.</p>
          <img src={circlered} style={{position:"absolute" , marginTop:"435px", height:"7px", width:"7px" , marginLeft:"13px"}}/>
      <p style={{   margin:"0px" , paddingLeft:"30px" , textAlign:"left"  ,fontFamily: 'Poppins',
       fontWeight: "620" , fontSize:"14px" , paddingRight:"15px"  }}>
         Don’t worry if anything goes wrong, you can always connect with us! We have got your back :)</p>

   </Card>
  </Col>
</Row>

   </div>);
}
export default CommunityGuidelines;