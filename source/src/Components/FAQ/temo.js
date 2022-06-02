import Row from "react-bootstrap/Row";
import { useEffect, useState } from "react";
import "./FAQ.css";
import Card from 'react-bootstrap/Card';
//import About from "../Images/About.png"
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";
import { CButton, CCollapse, CCard, CCardBody } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';

function FAQ()
{ const [visible1, setVisible1] = useState(false)
    const [visible2, setVisible2] = useState(false)
    const [visible3, setVisible3] = useState(false)
    const [visible4, setVisible4] = useState(false)
    const [visible5, setVisible5] = useState(false)
    const [visible6, setVisible6] = useState(false)
    const [visible7, setVisible7] = useState(false)
    const [visible8, setVisible8] = useState(false)
    const [visible9, setVisible9] = useState(false)
    const [visible10, setVisible10] = useState(false)
    const [visible11, setVisible11] = useState(false)
    const [visible12, setVisible12] = useState(false)
    const [visible13, setVisible13] = useState(false)
    const [visible14, setVisible14] = useState(false)
    const [visible15, setVisible15] = useState(false)
    const [visible16, setVisible16] = useState(false)


  return (  <div style={{ fontFamily: 'Poppins', fontWeight: "620" }}>
  <>
  <p style={{textAlign:"center", fontSize: "36px", margin: "20px 0px 0px 0px" , fontFamily:"Poppins", fontWeight: "620"}} >Frequently Asked Questions </p>

    <div style={{height:"30px"}}></div>
 <div style={{border: "1.5px solid #0129FF", borderRadius: "6px" , width:"900px" , marginLeft:"auto", marginRight:"auto"}}>
    <CButton onClick={() => setVisible1(!visible1)} style={{width:"860px" , height:"50px" , marginLeft:"auto", marginRight:"auto",
    display:"block" , background: "white" , color:"black"  , boxShadow:"none", textAlign:"left" , paddingLeft:"55px",
     fontSize:"20px" ,fontFamily: 'Poppins', fontWeight: "620" , border:"none"}}>
    How to get started?<span style={{paddingLeft:" 540px", fontSize:"25px"}}>+</span> </CButton>
    <CCollapse visible={visible1}>
      <CCard className="mt-3" style={{width:"860px" , fontSize:"19px", marginLeft:"auto", marginRight:"auto", display:"block" ,
       paddingLeft:"40px" , border:"none" , color:"#737373" }}>
        <CCardBody style={{paddingTop:"0px"}} onClick={() => setVisible1(!visible1)}>
        Once you've logged in, you can define your goal for the day/week/month and schedule single or
        multiple coworking sessions for yourself. Then, simply show up! You can begin your deep working
        session after greeting each other and clearly stating your goals for the particular session. Towards the end of the session,
        you can discuss your achievements and share your experience, or even have an informal chat!
        </CCardBody>
      </CCard>
    </CCollapse>
    </div>

    <div style={{height:"20px"}}></div>
 <div style={{border: "1.5px solid #0129FF", borderRadius: "6px" , width:"900px" , marginLeft:"auto", marginRight:"auto"}}>
    <CButton onClick={() => setVisible2(!visible2)} style={{width:"860px" , height:"50px" , marginLeft:"auto", marginRight:"auto",
    display:"block" , background: "white" , color:"black"  , boxShadow:"none", textAlign:"left" , paddingLeft:"55px",
     fontSize:"20px" ,fontFamily: 'Poppins', fontWeight: "620" , border:"none"}}>
    What equipments are needed for this?<span style={{paddingLeft:" 350px", fontSize:"25px"}}>+</span> </CButton>
    <CCollapse visible={visible2}>
      <CCard className="mt-3" style={{width:"860px" , fontSize:"19px", marginLeft:"auto", marginRight:"auto", display:"block" ,
       paddingLeft:"40px" , border:"none" , color:"#737373" }}>
        <CCardBody style={{paddingTop:"0px"}} onClick={() => setVisible2(!visible2)}>
        All you need is a Laptop/Desktop with a working webcam and microphone along with a stable internet connection.
        </CCardBody>
      </CCard>
    </CCollapse>
    </div>

    <div style={{height:"20px"}}></div>
 <div style={{border: "1.5px solid #0129FF", borderRadius: "6px" , width:"900px" , marginLeft:"auto", marginRight:"auto"}}>
    <CButton onClick={() => setVisible3(!visible3)} style={{width:"860px" , height:"50px" , marginLeft:"auto", marginRight:"auto",
    display:"block" , background: "white" , color:"black"  , boxShadow:"none", textAlign:"left" , paddingLeft:"55px",
     fontSize:"20px" ,fontFamily: 'Poppins', fontWeight: "620" , border:"none"}}>
    From where all can we access Elekrity?<span style={{paddingLeft:" 350px", fontSize:"25px"}}>+</span> </CButton>
    <CCollapse visible={visible3}>
      <CCard className="mt-3" style={{width:"860px" , fontSize:"19px", marginLeft:"auto", marginRight:"auto", display:"block" ,
       paddingLeft:"40px" , border:"none" , color:"#737373" }}>
        <CCardBody style={{paddingTop:"0px"}} onClick={() => setVisible3(!visible3)}>
        You can access the Elekrity website from your laptop and mobile phone browsers.
         We highly recommend using Google Chrome and Safari for the best experience.
        We have an application as well which is in process and will be ready very soon!
        </CCardBody>
      </CCard>
    </CCollapse>
    </div>

    <div style={{height:"20px"}}></div>
 <div style={{border: "1.5px solid #0129FF", borderRadius: "6px" , width:"900px" , marginLeft:"auto", marginRight:"auto"}}>
    <CButton onClick={() => setVisible4(!visible4)} style={{width:"860px" , height:"50px" , marginLeft:"auto", marginRight:"auto",
    display:"block" , background: "white" , color:"black"  , boxShadow:"none", textAlign:"left" , paddingLeft:"55px",
     fontSize:"20px" ,fontFamily: 'Poppins', fontWeight: "620" , border:"none"}}>
    What does it cost?<span style={{paddingLeft:" 550px", fontSize:"25px"}}>+</span> </CButton>
    <CCollapse visible={visible4}>
      <CCard className="mt-3" style={{width:"860px" , fontSize:"19px", marginLeft:"auto", marginRight:"auto", display:"block" ,
       paddingLeft:"40px" , border:"none" , color:"#737373" }}>
        <CCardBody style={{paddingTop:"0px"}} onClick={() => setVisible4(!visible4)}>
        Elekrity membership costs much less than your monthly Pizza expenditure :)
Our lowest monthly membership plans start at ₹399, and our yearly plan is billed at ₹2099.

        </CCardBody>
      </CCard>
    </CCollapse>
    </div>

    <div style={{height:"20px"}}></div>
 <div style={{border: "1.5px solid #0129FF", borderRadius: "6px" , width:"900px" , marginLeft:"auto", marginRight:"auto"}}>
    <CButton onClick={() => setVisible5(!visible5)} style={{width:"860px" , height:"50px" , marginLeft:"auto", marginRight:"auto",
    display:"block" , background: "white" , color:"black"  , boxShadow:"none", textAlign:"left" , paddingLeft:"55px",
     fontSize:"20px" ,fontFamily: 'Poppins', fontWeight: "620" , border:"none"}}>
    What kind of work can I do on Elekrity?<span style={{paddingLeft:" 355px", fontSize:"25px"}}>+</span> </CButton>
    <CCollapse visible={visible5}>
      <CCard className="mt-3" style={{width:"860px" , fontSize:"19px", marginLeft:"auto", marginRight:"auto", display:"block" ,
       paddingLeft:"40px" , border:"none" , color:"#737373" }}>
        <CCardBody style={{paddingTop:"0px"}} onClick={() => setVisible5(!visible5)}>
        Simply Anything! You can study for an upcoming class test,
        prepare for competitive exams, read a book, learn a new skill,
        or even work on that long-due project. Elekrity sessions can also
        be used to work on self-development goals centered
        around meditation, recreational activities, and home workouts.
        </CCardBody>
      </CCard>
    </CCollapse>
    </div>

    <div style={{height:"20px"}}></div>
 <div style={{border: "1.5px solid #0129FF", borderRadius: "6px" , width:"900px" , marginLeft:"auto", marginRight:"auto"}}>
    <CButton onClick={() => setVisible6(!visible6)} style={{width:"860px" , height:"50px" , marginLeft:"auto", marginRight:"auto",
    display:"block" , background: "white" , color:"black"  , boxShadow:"none", textAlign:"left" , paddingLeft:"55px",
     fontSize:"20px" ,fontFamily: 'Poppins', fontWeight: "620" , border:"none"}}>
    What's it like to co-work with someone you don't know?<span style={{paddingLeft:"185px", fontSize:"25px"}}>+</span> </CButton>
    <CCollapse visible={visible6}>
      <CCard className="mt-3" style={{width:"860px" , fontSize:"19px", marginLeft:"auto", marginRight:"auto", display:"block" ,
       paddingLeft:"40px" , border:"none" , color:"#737373" }}>
        <CCardBody style={{paddingTop:"0px"}} onClick={() => setVisible6(!visible6)}>
        For the majority, it is relatively exciting since the start. However, for a few,
        the biggest hurdle is the first few sessions, after which the majority of the users
        get comfortable with the setup and do not even feel like they are meeting a stranger. However,
        almost every user feels a boost in their productivity with the magic of Co-working.
        </CCardBody>
      </CCard>
    </CCollapse>
    </div>

    <div style={{height:"20px"}}></div>
 <div style={{border: "1.5px solid #0129FF", borderRadius: "6px" , width:"900px" , marginLeft:"auto", marginRight:"auto"}}>
    <CButton onClick={() => setVisible7(!visible7)} style={{width:"860px" , height:"50px" , marginLeft:"auto", marginRight:"auto",
    display:"block" , background: "white" , color:"black"  , boxShadow:"none", textAlign:"left" , paddingLeft:"55px",
     fontSize:"20px" ,fontFamily: 'Poppins', fontWeight: "620" , border:"none"}}>
    Can I chat with my coworking partner?<span style={{paddingLeft:" 347px", fontSize:"25px"}}>+</span> </CButton>
    <CCollapse visible={visible7}>
      <CCard className="mt-3" style={{width:"860px" , fontSize:"19px", marginLeft:"auto", marginRight:"auto", display:"block" ,
       paddingLeft:"40px" , border:"none" , color:"#737373" }}>
        <CCardBody style={{paddingTop:"0px"}} onClick={() => setVisible7(!visible7)}>
        Yes, you can. It is encouraged that you have a conversation for the first 5 mins
        and set your goals for the session. Post that, it is recommended that both coworkers
        focus on completing the set tasks during the working sessions. Also, your coworker
        might be more interested to get
        started on their work, hence it is advisable to focus on working on your tasks.
        </CCardBody>
      </CCard>
    </CCollapse>
    </div>

    <div style={{height:"20px"}}></div>
 <div style={{border: "1.5px solid #0129FF", borderRadius: "6px" , width:"900px" , marginLeft:"auto", marginRight:"auto"}}>
    <CButton onClick={() => setVisible8(!visible8)} style={{width:"860px" , height:"50px" , marginLeft:"auto", marginRight:"auto",
    display:"block" , background: "white" , color:"black"  , boxShadow:"none", textAlign:"left" , paddingLeft:"55px",
     fontSize:"20px" ,fontFamily: 'Poppins', fontWeight: "620" , border:"none"}}>
    What if I don't get a partner?<span style={{paddingLeft:" 449px", fontSize:"25px"}}>+</span> </CButton>
    <CCollapse visible={visible8}>
      <CCard className="mt-3" style={{width:"860px" , fontSize:"19px", marginLeft:"auto", marginRight:"auto", display:"block" ,
       paddingLeft:"40px" , border:"none" , color:"#737373" }}>
        <CCardBody style={{paddingTop:"0px"}} onClick={() => setVisible8(!visible8)}>
        Chances are that you will find a partner 98% of the time. In case your partner doesn't show up,
        you can request a new partner or schedule another session after 5 minutes.
   (Showing up late or not showing up lowers one's diligence score and affects chances of getting paired further)
        </CCardBody>
      </CCard>
    </CCollapse>
    </div>

    <div style={{height:"20px"}}></div>
 <div style={{border: "1.5px solid #0129FF", borderRadius: "6px" , width:"900px" , marginLeft:"auto", marginRight:"auto"}}>
    <CButton onClick={() => setVisible9(!visible9)} style={{width:"860px" , height:"50px" , marginLeft:"auto", marginRight:"auto",
    display:"block" , background: "white" , color:"black"  , boxShadow:"none", textAlign:"left" , paddingLeft:"55px",
     fontSize:"20px" ,fontFamily: 'Poppins', fontWeight: "620" , border:"none"}}>
    How long is a coworking session?<span style={{paddingLeft:" 400px", fontSize:"25px"}}>+</span> </CButton>
    <CCollapse visible={visible9}>
      <CCard className="mt-3" style={{width:"860px" , fontSize:"19px", marginLeft:"auto", marginRight:"auto", display:"block" ,
       paddingLeft:"40px" , border:"none" , color:"#737373" }}>
        <CCardBody style={{paddingTop:"0px"}} onClick={() => setVisible9(!visible9)}>
        Currently, we offer 1-hour sessions. However, you can book multiple sessions at a stretch in order
        to work continuously for more than an hour.
        We try our best to match you with people of similar needs in order to give you the best experience.
        </CCardBody>
      </CCard>
    </CCollapse>
    </div>

    <div style={{height:"20px"}}></div>
 <div style={{border: "1.5px solid #0129FF", borderRadius: "6px" , width:"900px" , marginLeft:"auto", marginRight:"auto"}}>
    <CButton onClick={() => setVisible10(!visible10)} style={{width:"860px" , height:"50px" , marginLeft:"auto", marginRight:"auto",
    display:"block" , background: "white" , color:"black"  , boxShadow:"none", textAlign:"left" , paddingLeft:"55px",
     fontSize:"20px" ,fontFamily: 'Poppins', fontWeight: "620" , border:"none"}}>
    Do I need to keep the video on all the time?<span style={{paddingLeft:" 300px", fontSize:"25px"}}>+</span> </CButton>
    <CCollapse visible={visible10}>
      <CCard className="mt-3" style={{width:"860px" , fontSize:"19px", marginLeft:"auto", marginRight:"auto", display:"block" ,
       paddingLeft:"40px" , border:"none" , color:"#737373" }}>
        <CCardBody style={{paddingTop:"0px"}} onClick={() => setVisible10(!visible10)}>
        Yes. Keeping the video on increases the accountability of both the users and boosts productivity.
        </CCardBody>
      </CCard>
    </CCollapse>
    </div>

    <div style={{height:"20px"}}></div>
 <div style={{border: "1.5px solid #0129FF", borderRadius: "6px" , width:"900px" , marginLeft:"auto", marginRight:"auto"}}>
    <CButton onClick={() => setVisible11(!visible11)} style={{width:"860px" , height:"50px" , marginLeft:"auto", marginRight:"auto",
    display:"block" , background: "white" , color:"black"  , boxShadow:"none", textAlign:"left" , paddingLeft:"55px",
     fontSize:"20px" ,fontFamily: 'Poppins', fontWeight: "620" , border:"none"}}>
    Do I need to keep the audio on the whole time?<span style={{paddingLeft:" 260px", fontSize:"25px"}}>+</span> </CButton>
    <CCollapse visible={visible11}>
      <CCard className="mt-3" style={{width:"860px" , fontSize:"19px", marginLeft:"auto", marginRight:"auto", display:"block" ,
       paddingLeft:"40px" , border:"none" , color:"#737373" }}>
        <CCardBody style={{paddingTop:"0px"}} onClick={() => setVisible11(!visible11)}>
        Not required, but we would encourage doing so if possible.
        </CCardBody>
      </CCard>
    </CCollapse>
    </div>

    <div style={{height:"20px"}}></div>
 <div style={{border: "1.5px solid #0129FF", borderRadius: "6px" , width:"900px" , marginLeft:"auto", marginRight:"auto"}}>
    <CButton onClick={() => setVisible12(!visible12)} style={{width:"860px" , height:"50px" , marginLeft:"auto", marginRight:"auto",
    display:"block" , background: "white" , color:"black"  , boxShadow:"none", textAlign:"left" , paddingLeft:"55px",
     fontSize:"20px" ,fontFamily: 'Poppins', fontWeight: "620" , border:"none"}}>
    How is such a setup helping me? How am I being accountable?<span style={{paddingLeft:" 97px", fontSize:"25px"}}>+</span> </CButton>
    <CCollapse visible={visible12}>
      <CCard className="mt-3" style={{width:"860px" , fontSize:"19px", marginLeft:"auto", marginRight:"auto", display:"block" ,
       paddingLeft:"40px" , border:"none" , color:"#737373" }}>
        <CCardBody style={{paddingTop:"0px"}} onClick={() => setVisible12(!visible12)}>
        The setup of Elekrity automatically enforces accountability in its users. With the sessions
        being pre-booked, the user automatically becomes accountable to show up on time since
        another user will be waiting.
        In case of a no-show, the diligence score is impacted, which in turn affects future sessions.
        While co-working, the probability of getting distracted/not working reduces quite significantly.
         In case your partner leaves in between a session, you will have an option of reporting that on
         your dashboard.
        </CCardBody>
        <CCardBody style={{paddingTop:"0px"}} onClick={() => setVisible12(!visible12)}>
        In case of a no-show, the diligence score is impacted, which in turn affects future sessions.
        While co-working, the probability of getting distracted/not working reduces quite significantly.
         In case your partner leaves in between a session, you will have an option of reporting that on
         your dashboard.
        </CCardBody>
      </CCard>
    </CCollapse>
    </div>

    <div style={{height:"20px"}}></div>
 <div style={{border: "1.5px solid #0129FF", borderRadius: "6px" , width:"900px" , marginLeft:"auto", marginRight:"auto"}}>
    <CButton onClick={() => setVisible13(!visible13)} style={{width:"860px" , height:"50px" , marginLeft:"auto", marginRight:"auto",
    display:"block" , background: "white" , color:"black"  , boxShadow:"none", textAlign:"left" , paddingLeft:"55px",
     fontSize:"20px" ,fontFamily: 'Poppins', fontWeight: "620" , border:"none"}}>
    What can I do in case of inappropriate behavior?<span style={{paddingLeft:" 240px", fontSize:"25px"}}>+</span> </CButton>
    <CCollapse visible={visible13}>
      <CCard className="mt-3" style={{width:"860px" , fontSize:"19px", marginLeft:"auto", marginRight:"auto", display:"block" ,
       paddingLeft:"40px" , border:"none" , color:"#737373" }}>
        <CCardBody style={{paddingTop:"0px"}} onClick={() => setVisible13(!visible13)}>
        At Elekrity, inappropriate behaviour is taken very seriously. Users will have an
         option to report the behaviour on our website. Upon investigation, if conclusive evidence is found,
        it can result in flagging/removal of the user from the community permanently.
        </CCardBody>
      </CCard>
    </CCollapse>
    </div>

    <div style={{height:"20px"}}></div>
 <div style={{border: "1.5px solid #0129FF", borderRadius: "6px" , width:"900px" , marginLeft:"auto", marginRight:"auto"}}>
    <CButton onClick={() => setVisible14(!visible14)} style={{width:"860px" , height:"50px" , marginLeft:"auto", marginRight:"auto",
    display:"block" , background: "white" , color:"black"  , boxShadow:"none", textAlign:"left" , paddingLeft:"55px",
     fontSize:"20px" ,fontFamily: 'Poppins', fontWeight: "620" , border:"none"}}>
    Can I cancel/reschedule a session?<span style={{paddingLeft:" 370px", fontSize:"25px"}}>+</span> </CButton>
    <CCollapse visible={visible14}>
      <CCard className="mt-3" style={{width:"860px" , fontSize:"19px", marginLeft:"auto", marginRight:"auto", display:"block" ,
       paddingLeft:"40px" , border:"none" , color:"#737373" }}>
        <CCardBody style={{paddingTop:"0px"}} onClick={() => setVisible14(!visible14)}>
        You can cancel or reschedule your coworking sessions up until 5 minutes to the
        starting time of the session without any worries. However, after that, you are
        already paired with a partner, and canceling will be treated as a no-show.

        </CCardBody>
      </CCard>
    </CCollapse>
    </div>

    <div style={{height:"20px"}}></div>
 <div style={{border: "1.5px solid #0129FF", borderRadius: "6px" , width:"900px" , marginLeft:"auto", marginRight:"auto"}}>
    <CButton onClick={() => setVisible15(!visible15)} style={{width:"860px" , height:"50px" , marginLeft:"auto", marginRight:"auto",
    display:"block" , background: "white" , color:"black"  , boxShadow:"none", textAlign:"left" , paddingLeft:"55px",
     fontSize:"20px" ,fontFamily: 'Poppins', fontWeight: "620" , border:"none"}}>
    What is the diligence score? What is it used for? How is it rated?<span style={{paddingLeft:"95px", fontSize:"25px"}}>+</span> </CButton>
    <CCollapse visible={visible15}>
      <CCard className="mt-3" style={{width:"860px" , fontSize:"19px", marginLeft:"auto", marginRight:"auto", display:"block" ,
       paddingLeft:"40px" , border:"none" , color:"#737373" }}>
        <CCardBody style={{paddingTop:"0px"}} onClick={() => setVisible15(!visible15)}>
        As the name suggests, the diligence score tells us how diligent a user is.
        The higher the rating, the better. It is used to match more diligent people together
        so that the users can get the best experience. The diligence score consists of two factors.
        75% of the score is gained by simply showing up on time.
        The other 25% depends on the co-working partner's experience is and the rating they provide.
        </CCardBody>
      </CCard>
    </CCollapse>
    </div>

    <div style={{height:"20px"}}></div>
 <div style={{border: "1.5px solid #0129FF", borderRadius: "6px" , width:"900px" , marginLeft:"auto", marginRight:"auto"}}>
    <CButton onClick={() => setVisible16(!visible16)} style={{width:"860px" , height:"50px" , marginLeft:"auto", marginRight:"auto",
    display:"block" , background: "white" , color:"black"  , boxShadow:"none", textAlign:"left" , paddingLeft:"55px",
     fontSize:"20px" ,fontFamily: 'Poppins', fontWeight: "620" , border:"none"}}>
    What happens if I book a session but do not show up? <span style={{paddingLeft:" 185px", fontSize:"25px"}}>+</span> </CButton>
    <CCollapse visible={visible16}>
      <CCard className="mt-3" style={{width:"860px" , fontSize:"19px", marginLeft:"auto", marginRight:"auto", display:"block" ,
       paddingLeft:"40px" , border:"none" , color:"#737373" }}>
        <CCardBody style={{paddingTop:"0px"}} onClick={() => setVisible16(!visible16)} >
        Showing up late or not showing up affects the diligence score quite significantly, which
        reduces the chances of getting paired further. In case this occurs very frequently,
        the account may be paused and the membership will be reconsidered on case to case basis.
        </CCardBody>
      </CCard>
    </CCollapse>
    </div>
    <p style={{textAlign:"center", fontSize: "36px",fontFamily: 'Poppins', fontWeight: "620", margin: "50px 0px 0px 0px"}} >Still Have A Question?</p>
<p style={{textAlign:"center",color:"#737373" , fontSize: "19px",fontFamily: 'Poppins', margin: "30px 0px 0px 0px", fontWeight: "620"}} >
    If you could not find an answer to your question in our FAQs, you can always contact us!</p>
    <p style={{textAlign:"center" ,color:"#737373", fontSize: "19px",fontFamily: 'Poppins', margin: "0px 0px 40px 0px", fontWeight: "620"}} >
    We will get in touch with you shortly</p>
    <p style={{textAlign:"center" , paddingLeft:"15px"}}>
{/* <Button size="lg" className="button_trial1" variant="outline-primary" href="#" style={{textDecoration: 'none'}}>Get Started
       {/* <Link to="/">Sign-Up</Link>  */}
{/* </Button> */}
<Button variant="outline-primary" size="lg" className="button_trial" href="#" active
    style={{textDecoration: 'none' , boxShadow: "none" ,boxShadow: "2px 5px 7px rgba(0, 0, 0, 0.15)" ,background: "#0129FF", border: "0.3px solid blue",
    borderRadius: "10px", color:"white" , fontSize: "26px" , width:"200px" }}>
    Contact Us
       {/* <Link to="/">Sign-Up</Link>  */}
    </Button>
</p>
  </>

   </div>);
}
export default FAQ;