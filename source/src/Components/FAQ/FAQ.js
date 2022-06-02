import Row from "react-bootstrap/Row";
import { useLayoutEffect, useState } from "react";
import "./FAQ.css";
//import About from "../Images/About.png"
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";
import { CButton, CCollapse, CCard, CCardBody } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';
import { Accordion, Card } from "react-bootstrap";

function FAQ()
{

return (  <div style={{ fontFamily: 'Poppins', marginTop:"30px" }}>
  <>
  {/* <p style={{textAlign:"center", fontSize: "36px", margin: "20px 0px 0px 0px" , fontFamily:"Poppins", fontWeight: "620"}} >Frequently Asked Questions </p> */}
<div  class="col-md-6 offset-md-3 mt-4" style={{fontWeight: "620",color:"#737373"}}>
  <Accordion defaultActiveKey="0"  >
  <Card className="mb-3" >

  <Accordion.Item eventKey="0" s>
    <Accordion.Header  > <strong style={{fontSize:"20px"}}>What is a SHG?</strong></Accordion.Header>
    <Accordion.Body>
    Self Help Groups (SHGs) are groups of 10-20 people in a locality formed for any social or economic purpose.
    They conduct meetings and discuss about many matters such as women empowerment, finance, 
    health and sanitation, etc.
    </Accordion.Body>
  </Accordion.Item>
  </Card>
  <Card className="mb-3">

  <Accordion.Item eventKey="1">
    <Accordion.Header><strong style={{fontSize:"20px"}}>What do we do?</strong></Accordion.Header>
    <Accordion.Body>
    Our ideas include making SHGs online by connecting women from rural areas and 
    comparing banks for their SHG policies in order to provide the best knowledge to our customers.
    </Accordion.Body>
  </Accordion.Item>
  </Card>
  <Card className="mb-3">

  <Accordion.Item eventKey="2">
    <Accordion.Header><strong style={{fontSize:"20px"}}> Why was सहYOG born?</strong></Accordion.Header>
    <Accordion.Body>
    During the pandemic it was hard for the rural women to conduct meetings physically and recruit people 
    for SHGs. There was also a huge effect on everyone’s financial situations. So सहYOG was born to 
    promote economic freedom among rural women by helping them form SHGs online.

    </Accordion.Body>
  </Accordion.Item>
  </Card>
  <Card className="mb-3">

  <Accordion.Item eventKey="3">
    <Accordion.Header><strong style={{fontSize:"20px"}}>How to get started?</strong></Accordion.Header>
    <Accordion.Body>
    Any woman can apply to start a SHG and become its leader, or she can join an existing SHG. 
    All she has to do is generate a request on our website. Once a SHG is formed all the members 
    have to upload all their documents and fill out the SHG form specified by the banks.
    </Accordion.Body>
  </Accordion.Item>
  </Card>
   <Card className="mb-3">

  <Accordion.Item eventKey="5">
    <Accordion.Header> <strong style={{fontSize:"20px"}}>What equipments are needed to avail this service?</strong></Accordion.Header>
    <Accordion.Body>
    Any woman from a rural section can apply as long as they have a mediocre internet connection and a smartphone.
     They can even call us on our number and we will generate a request for them.
    </Accordion.Body>
  </Accordion.Item>
  </Card>
 <Card className="mb-3">

   <Accordion.Item eventKey="6">
    <Accordion.Header><strong style={{fontSize:"20px"}}>What are some charecteristics of a SHG?</strong></Accordion.Header>
    <Accordion.Body>
    Features include developing and enhancing the decision making capacity of the members and increasing general awareness on literacy.
Equipping the poor with basic skills for understanding monetary transactions is also a salient feature.
    </Accordion.Body>
  </Accordion.Item>
  </Card>
  {/* <Card className="mb-3">

  <Accordion.Item eventKey="7">
    <Accordion.Header><strong style={{fontSize:"20px"}}>Can I chat with my coworking partner?</strong></Accordion.Header>
    <Accordion.Body>
    Yes, you can. It is encouraged that you have a conversation for the first 5 mins
        and set your goals for the session. Post that, it is recommended that both coworkers
        focus on completing the set tasks during the working sessions. Also, your coworker
        might be more interested to get
        started on their work, hence it is advisable to focus on working on your tasks.
    </Accordion.Body>
  </Accordion.Item>
  </Card>
  <Card className="mb-3">

  <Accordion.Item eventKey="8">
    <Accordion.Header><strong style={{fontSize:"20px"}}>What if I don't get a partner?</strong></Accordion.Header>
    <Accordion.Body>
    Chances are that you will find a partner 98% of the time. In case your partner doesn't show up,
        you can request a new partner or schedule another session after 5 minutes.
   (Showing up late or not showing up lowers one's diligence score and affects chances of getting paired further)
    </Accordion.Body>
  </Accordion.Item>
  </Card>
  <Card className="mb-3">

  <Accordion.Item eventKey="9">
    <Accordion.Header><strong style={{fontSize:"20px"}}>How long is a coworking session?</strong></Accordion.Header>
    <Accordion.Body>
    Currently, we offer 1-hour sessions. However, you can book multiple sessions at a stretch in order
        to work continuously for more than an hour.
        We try our best to match you with people of similar needs in order to give you the best experience.
    </Accordion.Body>
  </Accordion.Item>
  </Card>
  <Card className="mb-3">

  <Accordion.Item eventKey="10">
    <Accordion.Header><strong style={{fontSize:"20px"}}>Do I need to keep the video on all the time?</strong></Accordion.Header>
    <Accordion.Body>
    Yes. Keeping the video on increases the accountability of both the users and boosts productivity.

    </Accordion.Body>
  </Accordion.Item>
  </Card>
  <Card className="mb-3">

  <Accordion.Item eventKey="11">
    <Accordion.Header><strong style={{fontSize:"20px"}}> Do I need to keep the audio on the whole time?</strong></Accordion.Header>
    <Accordion.Body>
    Not required, but we would encourage doing so if possible.

    </Accordion.Body>
  </Accordion.Item>
  </Card>
  <Card className="mb-3">

  <Accordion.Item eventKey="12">
    <Accordion.Header><strong style={{fontSize:"20px"}}>How is such a setup helping me? How am I being accountable?</strong></Accordion.Header>
    <Accordion.Body>
    The setup of Elekrity automatically enforces accountability in its users. With the sessions
        being pre-booked, the user automatically becomes accountable to show up on time since
        another user will be waiting.
        In case of a no-show, the diligence score is impacted, which in turn affects future sessions.
        While co-working, the probability of getting distracted/not working reduces quite significantly.
         In case your partner leaves in between a session, you will have an option of reporting that on
         your dashboard.
    </Accordion.Body>
    <Accordion.Body>
    In case of a no-show, the diligence score is impacted, which in turn affects future sessions.
        While co-working, the probability of getting distracted/not working reduces quite significantly.
         In case your partner leaves in between a session, you will have an option of reporting that on
         your dashboard.
    </Accordion.Body>
  </Accordion.Item>
  </Card>
  <Card className="mb-3">

  <Accordion.Item eventKey="13">
    <Accordion.Header> <strong style={{fontSize:"20px"}}>What can I do in case of inappropriate behavior?</strong></Accordion.Header>
    <Accordion.Body>
    At Elekrity, inappropriate behaviour is taken very seriously. Users will have an
         option to report the behaviour on our website. Upon investigation, if conclusive evidence is found,
        it can result in flagging/removal of the user from the community permanently.
    </Accordion.Body>
  </Accordion.Item>
  </Card>
  <Card className="mb-3">

  <Accordion.Item eventKey="14">
    <Accordion.Header><strong style={{fontSize:"20px"}}>Can I cancel/reschedule a session?</strong></Accordion.Header>
    <Accordion.Body>
    You can cancel or reschedule your coworking sessions up until 5 minutes to the
        starting time of the session without any worries. However, after that, you are
        already paired with a partner, and canceling will be treated as a no-show.
    </Accordion.Body>
  </Accordion.Item>
  </Card>
  <Card className="mb-3">

  <Accordion.Item eventKey="15">
    <Accordion.Header><strong style={{fontSize:"20px"}}>What is the diligence score? What is it used for? How is it rated?</strong></Accordion.Header>
    <Accordion.Body>
    As the name suggests, the diligence score tells us how diligent a user is.
        The higher the rating, the better. It is used to match more diligent people together
        so that the users can get the best experience. The diligence score consists of two factors.
        75% of the score is gained by simply showing up on time.
        The other 25% depends on the co-working partner's experience is and the rating they provide.
    </Accordion.Body>
  </Accordion.Item>
  </Card>
  <Card className="mb-3">

  <Accordion.Item eventKey="16">
    <Accordion.Header><strong style={{fontSize:"20px"}}>What happens if I book a session but do not show up?</strong></Accordion.Header>
    <Accordion.Body>
    Showing up late or not showing up affects the diligence score quite significantly, which
        reduces the chances of getting paired further. In case this occurs very frequently,
        the account may be paused and the membership will be reconsidered on case to case basis.
    </Accordion.Body>
  </Accordion.Item>
  </Card> */}
</Accordion>
</div>
    <p style={{textAlign:"center", fontSize: "36px",fontFamily: 'Poppins', fontWeight: "620", margin: "50px 0px 0px 0px"}} >Still Have A Question?</p>
<p style={{textAlign:"center",color:"#737373" , fontSize: "19px",fontFamily: 'Poppins', margin: "30px 0px 0px 0px", fontWeight: "620"}} >
    If you could not find an answer to your question in our FAQs, you can always contact us!</p>
    <p style={{textAlign:"center" ,color:"#737373", fontSize: "19px",fontFamily: 'Poppins', margin: "0px 0px 40px 0px", fontWeight: "620"}} >
    Email ID: sehyog@gmail.com </p>
    
    {/* <p style={{textAlign:"center" , paddingLeft:"15px"}}>
{/* <Button size="lg" className="button_trial1" variant="outline-primary" href="#" style={{textDecoration: 'none'}}>Get Started
       {/* <Link to="/">Sign-Up</Link>  */}
{/* </Button> */}
{/* <Button variant="outline-primary" size="lg" className="button_trial"  href="/contactus" active
    style={{textDecoration: 'none' , boxShadow: "none" ,boxShadow: "2px 5px 7px rgba(0, 0, 0, 0.15)" ,background: "#0129FF", border: "0.3px solid blue",
    borderRadius: "10px", color:"white" , fontSize: "26px" , width:"200px"}}>
    Contact Us
    </Button> */}
{/* </p> */} 
  </>

   </div>);
}
export default FAQ;