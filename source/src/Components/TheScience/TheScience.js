import Row from "react-bootstrap/Row";
// import headpic from "./headpic.svg";
import tspic from "./Thescience.jpg";
import ts from "./ts.svg";
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";
import "./science.css"
import { Accordion, Card } from "react-bootstrap";
import { Container } from "react-bootstrap";
import FAQ from "../FAQ/FAQ.js";
function TheScience() {
  return (<div style={{ fontFamily: 'Poppins', fontWeight: "620" }}>
    <Row className="p-0 m-0">
      <Card.Img variant="top" src={tspic} style={{ width: '500px', marginLeft: "auto", marginRight: "auto", display: "flex", marginTop: "70px" }} />
      <p style={{ textAlign: "center", fontSize: "35px", margin: "20px 0px 0px 0px", fontFamily: "Poppins", fontWeight: "620", paddingTop: "20px" }} >The Idea Behind सहYOG</p>

      <Col style={{ justifyContent: "space-around", paddingTop: "10px", paddingBottom: "10px", marginLeft: "auto", marginRight: "auto", display: "flex" }}>
        <Card style={{ maxWidth: '1010px', border: "none" }}>
          <Card.Body>
            {/* <Card.Text style={{ paddingLeft:"5px" , fontSize: "26px" }}>
    How can we help you?
    </Card.Text > */}
            <Card.Text style={{ color: "#737373", fontSize: "16px", paddingBottom: "10px" }}>
            सहYOG leverages the power of co-savings and commitment to promote economic freedom within 
            rural women by helping them form online Self Help Groups. We spread awareness and 
            intelligently make SHGs online by connecting women across the country, where the 
            gender ratio is neglected and female foeticides prevail, in order to help them 
            save up an ample sum.
            </Card.Text>
            <Card.Text style={{ color: "#737373", fontSize: "16px", paddingBottom: "10px" }}>
            The entire country, specifically the rural areas faced huge losses during the pandemic. 
            Lockdowns were implemented and there was a growing concern whether we would ever be able 
            to meet out and get back to our everyday lives. Keeping this in mind, we at सहYOG help in
             forming online SHGs so that no direct physical contact or meetings are required. 
            We ensure that every woman’s request to create/join a SHG gets heard. 
            </Card.Text>
            <Card.Text style={{ color: "#737373", fontSize: "16px", paddingBottom: "10px" }}>
            On our website any woman from the rural areas can generate a request to form a SHG and we will
             provide her with other members of similar interest or she can become a member of an existing SHG.
              We compare banks and their policies for 
            creating savings account specifically for SHGs and deliver the best knowledge to our self made SHGs. 
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>


    <Row className="p-0 m-0 text-center" style={{ fontSize: "16px" }}>
      <div style={{ paddingTop: "10px", fontSize: "35px", marginLeft: "auto", marginRight: "auto"  }}>
        Please refer to our FAQs below 
      </div><div>

        {/* <div className='d-flex mx-auto flex-wrap flex-xl-nowrap justify-content-center ' style={{maxWidth:'700px',width:'100%'}}>
        <Col style={{ border: "none", justifyContent: "space-around",marginTop:'1rem', display: "flex" }}>
          <span style={{ width: "180px", paddingTop: "10px", paddingBottom: "10px", borderRadius: "8px",margin:'0 30px', boxShadow: "0 0 5px #B6BEE9",}}>
          Specificity
          </span>
        </Col>
        <Col style={{ border: "none", justifyContent: "space-around",marginTop:'1rem', display: "flex" }}>
          <span style={{ width: "180px", paddingTop: "10px", paddingBottom: "10px", borderRadius: "8px",margin:'0 30px', boxShadow: "0 0 5px #B6BEE9",}}>
          Pre-Commitment
          </span>
        </Col>
        <Col style={{ border: "none", justifyContent: "space-around",marginTop:'1rem', display: "flex" }}>
          <span style={{ width: "180px", paddingTop: "10px", paddingBottom: "10px", borderRadius: "8px",margin:'0 30px', boxShadow: "0 0 5px #B6BEE9",}}>
          Accountability
          </span>
        </Col>
        <Col style={{ border: "none", justifyContent: "space-around",marginTop:'1rem', display: "flex" }}>
          <span style={{ width: "180px", paddingTop: "10px", paddingBottom: "10px", borderRadius: "8px",margin:'0 30px', boxShadow: "0 0 5px #B6BEE9",}}>
          Social Pressure
          </span>
        </Col>
        </div> */}
      </div>

 {/* <div className=' mt-4 d-flex mx-auto  flex-wrap flex-md-nowrap justify-content-center ' style={{maxWidth:'550px'}}>
 <Col  style={{ border: "none", justifyContent: "space-around",marginTop:'1rem', display: "flex", }}>
          <span style={{ width: "210px", paddingTop: "10px", paddingBottom: "10px", borderRadius: "8px",margin:'0 30px', boxShadow: "0 0 5px #B6BEE9",}}>
          Sunken Investment
          </span>
        </Col>
        <Col style={{ border: "none", justifyContent: "space-around",marginTop:'1rem', display: "flex" }}>
          <span style={{ width: "300px", paddingTop: "10px", paddingBottom: "10px", borderRadius: "8px",margin:'0 30px', boxShadow: "0 0 5px #B6BEE9",}}>
          Intentions of Implementation
          </span>
        </Col>
      </div> */}
      </Row>

      <FAQ />




    {/* <div style={{ justifyContent: "space-around", paddingTop: "40px", color: "#737373", fontSize: "16px", paddingBottom: "30px", marginLeft: "auto", marginRight: "auto", display: "flex" }}>
      Let us, deep-dive, into how each of these works.
    </div> */}

    {/* <div class="container justify-content-center" style={{width:"100%"}}> */}

{/* <Row className="">

<Col lg={5} md={7} sm={12} xs={12} style={{
    display: "flex", paddingTop: "10px", paddingBottom: "40px",
    marginLeft: "auto", marginRight: "auto" ,justifyContent:'center'
  }}>

    <Accordion  style={{minWidth:'300px',width:'100%'}}  >
      <Card style={{  paddingTop: "30px", paddingBottom: "54px", maxWidth: '520px', maxHeight: "750px", borderRadius: "8px", border: "none", boxShadow: "0 0 5px #B6BEE9" }}>
        <div style={{ textAlign: "center", color: "#0129FF", fontFamily: 'Poppins', fontSize: "24px", fontWeight: "620", paddingBottom: "15px" }}> Specificity</div>
        <Card className="mb-3" >

          <Accordion.Item eventKey="0" s>
            <Accordion.Header  > <strong style={{ fontSize: "20px" }}>What is it?</strong></Accordion.Header>
            <Accordion.Body style={{ color: "#737373" }}>
              Specificity in defining the task to be carried out refers to making clear
              and concise statements on the details of the task at hand instead of overarching
              statements and goals and are required to be achieved. Concrete work definition
              statements help in better visualization of the task prior to its beginning which
              eventually results in better execution. According to studies, specific task statements
              get fully executed 90% of the time once started.
            </Accordion.Body>
            <Accordion.Body style={{ color: "#737373" }}>
              Example:- ‘I will read 20 pages of Rich Dad, Poor Dad today from 6 to 7 PM’ compared to ‘I will read a book today from 6 to 7 PM’.
              Completing the same work is a lot more probable in the first statement when you have a clear vision of your goal.
            </Accordion.Body>
          </Accordion.Item>
        </Card>
        <Card className="mb-3"  >

          <Accordion.Item eventKey="1" s >
            <Accordion.Header  > <strong style={{ fontSize: "20px" }}> How does Elekrity help?</strong></Accordion.Header>
            <Accordion.Body style={{ color: "#737373" }}>
              Firstly, Elekrity helps users to have a one-stop solution to form their personalized to-do list and
              goal trackers which are uniquely mapped to each and every session that they have. This helps the users
              to break their long-term goals into more fine and specific tasks which would help them achieve their
              goals with more ease.
            </Accordion.Body>
            <Accordion.Body style={{ color: "#737373" }}>
              Secondly, at the beginning of each session, it is recommended that users specify and list
              their goals after having a crisp introduction. This will help the users to have a clear
              picture of the work that is to be completed in that particular session
              and it will help and enable them to complete those tasks with a higher probability.
            </Accordion.Body>
          </Accordion.Item>
        </Card>


      </Card>
    </Accordion>
  </Col>

  <Col lg={5} md={7} sm={12} xs={12} style={{
    display: "flex", paddingTop: "10px", paddingBottom: "40px",
    marginLeft: "auto", marginRight: "auto" ,justifyContent:'center'
  }}>

    <Accordion  style={{minWidth:'300px', width:'100%'}}  >
      <Card style={{  paddingTop: "30px", paddingBottom: "54px", maxWidth: '520px', maxHeight: "750px", borderRadius: "8px", border: "none", boxShadow: "0 0 5px #B6BEE9" }}>
        <div style={{ textAlign: "center", color: "#0129FF", fontFamily: 'Poppins', fontSize: "24px", fontWeight: "620", paddingBottom: "15px" }}> Pre-Commitment</div>
        <Card className="mb-3" >

          <Accordion.Item eventKey="0" s>
            <Accordion.Header  > <strong style={{ fontSize: "20px" }}>What is it?</strong></Accordion.Header>
            <Accordion.Body style={{ color: "#737373" }}>
              Precommitment is the strategy in which an individual makes a commitment to an objective/goal
              in advance of the time, to restrain the flexibility,
              and pre-decide when the steps towards that commitment will have to be carried out.
            </Accordion.Body>
            <Accordion.Body style={{ color: "#737373" }}>
              Consistency is best accomplished by establishing a commitment to align future behavior. As a result, pre-committing
              to a goal is one of the most commonly used behavioral tools for achieving positive change.
            </Accordion.Body>
            <Accordion.Body style={{ color: "#737373" }}>
              Example:- I will read a book tomorrow from 6 to 7 PM.
              Here, ‘tomorrow from 6 to 7 PM’ is making you pre-commit to a goal that you want to achieve.
            </Accordion.Body>
          </Accordion.Item>
        </Card>
        <Card className="mb-3" >

          <Accordion.Item eventKey="1" s>
            <Accordion.Header  > <strong style={{ fontSize: "20px" }}> How does Elekrity help?</strong></Accordion.Header>
            <Accordion.Body style={{ color: "#737373" }}>
              Elekrity lets users set their preferred time slots for working on a well-defined goal.
              It also intelligently connects users with like-minded people who have similar goals to achieve.
              This helps make the precommitment statements even stronger in the user’s mind, leading to
              increased chances of actually showing up and starting to work on time. More than 75% of the time,
              the work is procrastinated just by not showing up or sitting
              down and Elekrity helps you defeat that by making you pre-commit to your work.
            </Accordion.Body>
          </Accordion.Item>
        </Card>

      </Card>
    </Accordion>
  </Col>
</Row> */}
{/* <Row>
  <Col lg={5} md={7} sm={12} xs={12} style={{
   display: "flex", paddingTop: "10px", paddingBottom: "40px",
   marginLeft: "auto", marginRight: "auto" ,justifyContent:'center'
  }}>

    <Accordion  style={{minWidth:'300px',width:'100%'}} >
      <Card style={{  paddingTop: "30px", paddingBottom: "54px", maxWidth: '520px', maxHeight: "750px", borderRadius: "8px", border: "none", boxShadow: "0 0 5px #B6BEE9" }}>
        <div style={{ textAlign: "center", color: "#0129FF", fontFamily: 'Poppins', fontSize: "24px", fontWeight: "620", paddingBottom: "15px" }}> Accountability</div>

        <Card className="mb-3" >

          <Accordion.Item eventKey="0" s>
            <Accordion.Header  > <strong style={{ fontSize: "20px" }}>What is it?</strong></Accordion.Header>
            <Accordion.Body style={{ color: "#737373" }}>
              Accountability, in the Cambridge dictionary, is defined as a situation in which someone is
              responsible for things that can happen when failing to comply with a certain way. When not
              in compliance with the mentioned agreement, accountability refers to the potential for all
              the consequences that can/will arise. Accountability creates a cause and effect relationship for
              individuals which has shown performance improvements of up to 300% in public experiments.
            </Accordion.Body>
            <Accordion.Body style={{ color: "#737373" }}>
              Example:- Reaching late for an examination might result in being debarred from appearing.
              In this example, you are accountable for your examination where the cause-’Reaching late’
              is resulting in consequence-’being debarred from appearing’
            </Accordion.Body>
          </Accordion.Item>

        </Card>
        <Card className="mb-3" >

          <Accordion.Item eventKey="1" s>
            <Accordion.Header  > <strong style={{ fontSize: "20px" }}> How does Elekrity help?</strong></Accordion.Header>
            <Accordion.Body style={{ color: "#737373" }}>
              Elekrity productivity sessions revolve around the concept of coworking. Having someone
              you are working with, even in a virtual setting, automatically instills accountability
              into both the coworking parties, leading to improved efficiency. This accountability
              brings responsibilities on both the users’
              shoulders hence making them more sound to fulfill their goals and stick to the routine
            </Accordion.Body>
          </Accordion.Item>
        </Card>
      </Card>
    </Accordion>
  </Col>

  <Col lg={5} md={7} sm={12} xs={12} style={{
    display: "flex", paddingTop: "10px", paddingBottom: "40px",
    marginLeft: "auto", marginRight: "auto" ,justifyContent:'center'
  }}>
    <Accordion  style={{minWidth:'300px',width:'100%'}}  >

      <Card style={{ paddingTop: "30px", paddingBottom: "54px", maxWidth: '520px', maxHeight: "750px", borderRadius: "8px", border: "none", boxShadow: "0 0 5px #B6BEE9" }}>
        <div style={{ textAlign: "center", color: "#0129FF", fontFamily: 'Poppins', fontSize: "24px", fontWeight: "620", paddingBottom: "15px" }}> Intentions of implementation  </div>

        <Card className="mb-3" >

          <Accordion.Item eventKey="0" s>
            <Accordion.Header  > <strong style={{ fontSize: "20px" }}>What is it?</strong></Accordion.Header>
            <Accordion.Body style={{ color: "#737373" }}>
              Implementation intentions or in other words plans of action help you determine how exactly your
              task would be accomplished. When combined with specificity in the definition of task, intentions
              of implementation give a
              clear roadmap on the best way of execution in order to accomplish the tasks at hand.
            </Accordion.Body>
            <Accordion.Body style={{ color: "#737373" }}>
              Example:- Not taking your car to work so that you can avoid drunk driving on a Friday evening.

            </Accordion.Body>
          </Accordion.Item>

        </Card>
        <Card className="mb-3" >

          <Accordion.Item eventKey="1" s>
            <Accordion.Header  > <strong style={{ fontSize: "20px" }}> How does Elekrity help?</strong></Accordion.Header>
            <Accordion.Body style={{ color: "#737373" }}>
              Scheduling an Elekrity session and adding it to your calendar beforehand, tells you that
              to get the task done, you will have to log in to the session where your coworking buddy
              will be expecting you. This creates a concrete conception that you have already started
              working towards your goal and hence the
              further need to show up on time, and work according to your pre-specified commitment.
            </Accordion.Body>
            <Accordion.Body style={{ color: "#737373" }}>
              Using Elekrity, booking sessions, defining your goals, etc. are
              themselves your intentions of implementation for your goals
            </Accordion.Body>
          </Accordion.Item>
        </Card>
      </Card>
    </Accordion>
  </Col>
</Row>
<Row>

  <Col lg={5} md={7} sm={12} xs={12} style={{
    display: "flex", paddingTop: "10px", paddingBottom: "40px",
    marginLeft: "auto", marginRight: "auto" ,justifyContent:'center'
  }}>
    <Accordion  style={{minWidth:'300px',width:'100%'}}  >

      <Card style={{  paddingTop: "30px", paddingBottom: "54px", maxWidth: '520px', maxHeight: "750px", borderRadius: "8px", border: "none", boxShadow: "0 0 5px #B6BEE9" }}>
        <div style={{ textAlign: "center", color: "#0129FF", fontFamily: 'Poppins', fontSize: "24px", fontWeight: "620", paddingBottom: "15px" }}> Social Pressure</div>

        <Card className="mb-3" >

          <Accordion.Item eventKey="0" s>
            <Accordion.Header  > <strong style={{ fontSize: "20px" }}>What is it?</strong></Accordion.Header>
            <Accordion.Body style={{ color: "#737373" }}>
              When in a social setting, humans naturally experience increased demands being imposed by themselves.
              This happens because humans have an innate tendency to be more socially acceptable and to be seen with
              high regard. Humans also tend to mirror the feelings and behaviors of those around them, with the
              subconscious intention of wanting to make the other person feel more comfortable and to be perceived
              as more likable by them. Research shows that
              the mere presence of another person improves human performance by up to 30%.
            </Accordion.Body>
            <Accordion.Body style={{ color: "#737373" }}>
              Example:- Students perform a lot better in an exam setup environment
              along with other students compared to giving mock examinations alone.
            </Accordion.Body>
          </Accordion.Item>

        </Card>
        <Card className="mb-3" >

          <Accordion.Item eventKey="1" s>
            <Accordion.Header  > <strong style={{ fontSize: "20px" }}> How does Elekrity help?</strong></Accordion.Header>
            <Accordion.Body style={{ color: "#737373" }}>
              Mirroring enhances productivity in Elekrity sessions when the coworking partners look at each
              other working on their respective tasks and are subconsciously motivated to do the same too.
              This setup automatically makes it a lot more difficult for the users to get distracted and
              leave the sessions in between. Also, by specifying the tasks to be completed in a session to
              the other person, these tasks get converted into expectations out of the user
              in that session and he/she is a lot more likely to feel answerable to achieve their goals.
            </Accordion.Body>
          </Accordion.Item>
        </Card>
      </Card>
    </Accordion>
  </Col>

  <Col lg={5} md={7} sm={12} xs={12} style={{
    display: "flex", paddingTop: "10px", paddingBottom: "40px",
    marginLeft: "auto", marginRight: "auto" ,justifyContent:'center'
  }}>
    <Accordion   style={{minWidth:'300px',width:'100%'}} >
      <Card style={{  paddingTop: "30px", paddingBottom: "54px", maxWidth: '520px', maxHeight: "750px", borderRadius: "8px", border: "none", boxShadow: "0 0 5px #B6BEE9" }}>
        <div style={{ textAlign: "center", color: "#0129FF", fontFamily: 'Poppins', fontSize: "24px", fontWeight: "620", paddingBottom: "15px" }}>  Sunken Investment </div>

        <Card className="mb-3" >

          <Accordion.Item eventKey="0" s>
            <Accordion.Header  > <strong style={{ fontSize: "20px" }}>What is it?</strong></Accordion.Header>
            <Accordion.Body style={{ color: "#737373" }}>
              The sunken investment is a phenomenon whereby a person is reluctant to abandon a strategy or
              course of action because they have invested some resources (Time/Money/Energy) in it. With some
              investment already been done, the innate nature of humans to averse losses pushes you to take your
              goals more seriously and helps you become fully committed to achieving your targets.
            </Accordion.Body>
          </Accordion.Item>

        </Card>
        <Card className="mb-3" >

          <Accordion.Item eventKey="1" s>
            <Accordion.Header  > <strong style={{ fontSize: "20px" }}> How does Elekrity help?</strong></Accordion.Header>
            <Accordion.Body style={{ color: "#737373" }}>
              A small amount of money when intentionally allotted towards your personal growth ensures that you
              are all willing to push yourself and finally get things done. Since you have already made this payment, you will be a lot
              more motivated to use the service which in return will help you to get started on your goals. 
            </Accordion.Body>
          </Accordion.Item>
        </Card>
      </Card>
    </Accordion>
  </Col>
</Row> */}
{/* </div> */}


{/* 
          <div className="  align-middle" style={{padding:'5% 0',  backgroundColor: "#263238", paddingBottom: "50px", fontFamily: "Poppins" }}>
              <div className=" align-items-center d-flex justify-content-center d-flex flex-column-reverse flex-md-row">
                <div className="col-md p-2" style={{    borderRadius: "6px" }}>
                  <div style={{textAlign:'center',marginLeft:'auto',marginRight:'auto', fontSize: "24px", color: "white", paddingBottom: "20px" }}> Elekrity Diligence Score</div>
                  <div className="pt-4 pt-md-0 " style={{ textAlign: 'center',marginLeft:'auto',marginRight:'auto',fontWeight:'400', fontSize: "15px", color: `rgba(${255}, ${255}, ${255}, ${0.7})`,maxWidth:'500px'  }}>
                    We have devised the concept of a diligence score associated with each user on Elekrity. The Diligence
                    score is a measure of each user’s accountability, commitment, and task completion rates.
                    After each session, your diligence factor may increase or decrease depending on whether you
                    missed or canceled that session or showed up and achieved the goal that you had set for yourself.
                    <div style={{ height: "20px" }}></div>
                    Practices like showing up late, canceling a session at the last minute, or leaving a focus
                    session midway would result in lowering your diligence score. This score is displayed on your
                    profile and to all the coworkers that the app pairs you up with.
                  </div>
                </div>
                <div className="col-md p-2" >
                  <img src={ts} alt="feature4" srcset="" style={{ width: '100%',maxHeight:'450px'  }} />
                </div>

              </div>
            </div> */}



      {/* <div style={{ justifyContent: "space-around", paddingTop: "20px", fontSize: "35px", marginLeft: "auto", marginRight: "auto", display: "flex" }}>
        Sources and Further Readings
      </div>
      <p style={{textAlign:"center",color:"#737373" , fontSize: "19px",fontFamily: 'Poppins', margin: "30px 0px 0px 0px", fontWeight: "620"}} >
    If you could not find an answer to your question in our FAQs, you can always contact us!</p>
    <p style={{textAlign:"center" ,color:"#737373", fontSize: "19px",fontFamily: 'Poppins', margin: "0px 0px 40px 0px", fontWeight: "620"}} >
    Email ID: gurleenk1108@gmail.com </p> */}
      {/* <div className="row  align-items-center d-flex justify-content-end d-flex flex-column-reverse flex-md-row">

      <div className="container1">
        <div className="tabs">
          <input type="radio" name="tabs" id="tabone" defaultChecked="checked" />
          <label htmlFor="tabone">  Subscription Model</label>
          <div className="tab">
            <h1>Subscription Model</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <input type="radio" name="tabs" id="tabtwo" />
          <label htmlFor="tabtwo">Specificity</label>
          <div className="tab">
            <h1>Specificity</h1>
            <p>
              <h4>What is it?</h4>
              <p>

                Specificity in defining the task to be carried out refers to making clear and concise statements on the details of the task at hand instead of overarching statements and goals and are required to be achieved. Concrete work definition statements help in better visualization of the task prior to its beginning which eventually results in better execution. According to studies, specific task statements get fully executed 90% of the time once started. </p>

              <p>
                Example:- ‘I will read 20 pages of Rich Dad, Poor Dad today from 6 to 7 PM’ compared to ‘I will read a book today from 6 to 7 PM’.
                Completing the same work is a lot more probable in the first statement when you have a clear vision of your goal.

              </p>
              <h4>

                How does Elekrity help?
              </h4>
              <p>
                There are two aspects to how Elekrity helps its users to have specificity in their goals.
                Firstly, Elekrity helps users to have a one-stop solution to form their personalized to-do list and goal trackers which are uniquely mapped to each and every session that they have. This helps the users to break their long-term goals into more fine and specific tasks which would help them achieve their goals with more ease.
                Secondly, at the beginning of each session, it is recommended that users specify and list their goals after having a crisp introduction. This will help the users to have a clear picture of the work that is to be completed in that particular session and it will help and enable them to complete those tasks with a higher probability.
              </p>
              <p>Secondly, at the beginning of each session, it is recommended that users specify and list their goals after having a crisp introduction. This will help the users to have a clear picture of the work that is to be completed in that particular session and it will help and enable them to complete those tasks with a higher probability. </p>
            </p>
          </div>
          <input type="radio" name="tabs" id="tabthree" />
          <label htmlFor="tabthree">Pre-Commitment</label>
          <div className="tab">
            <h1>Pre-Commitment</h1>
            <p><h4>What is it?</h4>

              <p>
                Precommitment is the strategy in which an individual makes a commitment to an objective/goal in advance of the time, to restrain the flexibility, and pre-decide when the steps towards that commitment will have to be carried out.
                Consistency is best accomplished by establishing a commitment to align future behavior. As a result, pre-committing to a goal is one of the most commonly used behavioral tools for achieving positive change.
              </p>
              <p>

                Example:- I will complete my assignment today from 6 to 7 PM.
                Here, ‘today from 6 to 7 PM’ is making you pre-commit your time to a goal that you want to achieve.

              </p>


              <h4>

                How does Elekrity help?
              </h4>

              <p>Elekrity lets users set their preferred time slots for working on a well-defined goal. It also intelligently connects users with like-minded people who have similar goals to achieve. This helps make the precommitment statements even stronger in the user’s mind, leading to increased chances of actually showing up and starting to work on time. More than 75% of the time, the work is procrastinated just by not showing up or sitting down and Elekrity helps you defeat that by making you pre-commit to your work.</p>
            </p>
          </div>
          <input type="radio" name="tabs" id="tab4" />
          <label htmlFor="tab4">Accountability</label>
          <div className="tab">
            <h1>Accountability</h1>
            <h4>What is it?</h4>
            <p>
              Accountability, in the Cambridge dictionary, is defined as a situation in which someone is responsible for things that can happen when failing to comply with a certain way. When not in compliance with the mentioned agreement, accountability refers to the potential for all the consequences that can/will arise. Accountability creates a cause and effect relationship for individuals which has shown performance improvements of up to 300% in public experiments.
            </p><p>
              Example:- Reaching late for an examination might result in being debarred from appearing.
              In this example, you are accountable for your examination where the cause-’Reaching late’ is resulting in consequence-’being debarred from appearing’
            </p>
            <h4>
              How does Elekrity help?
            </h4>
            <p>
              Elekrity productivity sessions revolve around the concept of coworking. Having someone you are working with, even in a virtual setting, automatically instills accountability into both the coworking parties, leading to improved efficiency. This accountability brings responsibilities on both the users’ shoulders hence making them more sound to fulfill their goals and stick to the routine.
            </p>
          </div>
          <input type="radio" name="tabs" id="tab5" />
          <label htmlFor="tab5">Sunken Investment</label>
          <div className="tab">
            <h1>Sunken Investment</h1>
            <p>
              <h4>What is it?</h4>

              Vox Populi is a Latin word that translates to the opinions of the people. When in a social setting, humans naturally experience increased demands being imposed by themselves. This happens because humans have an innate tendency of wanting to perform well to be more socially acceptable and to be seen with high regard. Humans also tend to mirror the feelings and behaviors of those around them, with the subconscious intention of wanting to make the other person feel more comfortable and to be perceived as more likable by them. Research shows that the mere presence of another person improves human performance by up to 30%.
            </p>
            <p>
              Example:- Students perform a lot better in an exam setup environment along with other students compared to giving mock examinations alone.
            </p>


            <h4>
              How does Elekrity help?

            </h4>
            <p>
              Mirroring enhances productivity in Elekrity sessions when the coworking partners look at each other working on their respective tasks and are subconsciously motivated to do the same. By specifying the tasks to be completed in a session to the other person, these tasks get converted into expectations out of the user in that session and he/she is a lot more likely to feel answerable to achieve their goals.
            </p>
          </div>
          <input type="radio" name="tabs" id="tab6" />
          <label htmlFor="tab6">Social Pressure</label>
          <div className="tab">
            <h1>Social Pressure</h1>
            <h4>What is it?
            </h4>
            <p>
              Implementation intentions or in other words plans of action help you determine how exactly your task would be accomplished. When combined with specificity in the definition of task, intentions of implementation give a clear roadmap on the best way of execution in order to accomplish the tasks at hand.
              <p>
                Example:- Not taking your car to work so that you can avoid drunk driving on a Friday evening.
              </p>
            </p>
            <h4>How does Elekrity help?
            </h4>
            <p>
              Scheduling an Elekrity session and adding it to your calendar beforehand, tells you that to get the task done, you will have to log in to the session where your coworking buddy will be expecting you. This creates a concrete conception that you have already started working towards your goal and hence the further need to show up on time, and work according to your pre-specified commitment.

              Using Elekrity, booking sessions, defining your goals, etc. are themselves your intentions of implementation for your goals

            </p>
          </div>
        </div>
      </div>
      </div> */}
    </div>);
}
    export default TheScience;