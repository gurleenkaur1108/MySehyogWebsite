import Row from "react-bootstrap/Row";
import { useState } from "react";

import Col from "react-bootstrap/Col";
import "./Contactus.css";
import Card from 'react-bootstrap/Card';
import mail from "./mailimg.svg";
import phone from "./phoneimg.svg";
import form3 from "./form3.svg";
import Button1 from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";
import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import { Formik, Field, Form } from "formik";


export default function Contactus() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onLoginFormSubmit = (e) => {
    e.preventDefault();
    handleClose();
  };
// { const [value, setValue] = React.useState(0);

// const [error, setError] = React.useState(false);
// const [helperText, setHelperText] = React.useState('Choose wisely');

// const handleRadioChange = (event) => {
//   setValue(event.target.value);
// //   setHelperText(' ');
// //   setError(false);
// };

// const handleSubmit = () => {
// //   event.preventDefault();
//   setValue(1); }
//   if (value === 'best') {
//     setHelperText('You got it!');
//     setError(false);
//   } else if (value === 'worst') {
//     setHelperText('Sorry, wrong answer!');
//     setError(true);
//   } else {
//     setHelperText('Please select an option.');
//     setError(true);
//   }
// };
// if (value === 2) {
//     setHelperText('You got it!');
//     setError(false);
//   } else if (value === 'worst') {
//     setHelperText('Sorry, wrong answer!');
//     setError(true);
//   } else {
//     setHelperText('Please select an option.');
//     setError(true);
//   }
// };


  return (
  <div style={{paddingLeft:"100px" , fontFamily: 'Poppins', fontWeight: "620" }}>
  {/* style={{fontWeight:"10",marginLeft:"48px",marginTop:"30px",marginBottom:"20px"}} */}
   {/* <h3 >About Us</h3> */}
    <Row className="p-0 m-0">
    <p style={{textAlign:"center", fontSize: "36px",fontFamily: 'Poppins', fontWeight: "620" , margin: "30px 0px 0px 0px", paddingLeft:"0px" }} >Contact Us </p>

        <Col
        lg={5} md={3} sm={12} xs={12} style={{justifyContent:"space-around",paddingTop:"30px" , paddingBottom:"80px"}}>
        <Card  style={{ width: '500px' ,border: "none"  }}>
  <Card.Body>
    <Card.Text style={{ paddingLeft:"5px" , fontSize: "26px" }}>
    How can we help you?
    </Card.Text >
    <Card.Text style={{ paddingLeft:"5px",  color:"#737373" , fontSize: "15px" , paddingBottom:"50px"}}>
    Fill in the form or use any of the given details to get in touch. Our team will respond shortly
    </Card.Text>
    <div style={{paddingLeft:"30px"}}>
     <Card.Img variant="top" src={phone}  style={{height: "40px" ,width: "20px" }}/>
      <span style={{paddingLeft:"50px" ,  color:"#737373"}}> +91 99999 99999</span> </div>
    <div style={{height:"45px"}}></div>
    <div style={{paddingLeft:"20px"}}>
    <Card.Img variant="top" src={mail}  style={{height: "30px" ,width: "40px" }}/>
     <span style={{paddingLeft:"50px" ,  color:"#737373"}}>info@elekrity.com</span> </div>
  </Card.Body>
</Card>
        </Col>

        <Col lg={6} md={7} sm={12} xs={12} style={{display:"flex",justifyContent:"space-around",paddingTop:"45px" , paddingBottom:"80px"}}>

 {/* REMOVE COMMENT FROM BELOW CARD TO GET FIRST FORM */}

<Card  style={{ width: '460px' , height:"450px" ,border: "none" , boxShadow: "0 0 4px #0129FF" }}>
          <form >
       <FormControl sx={{ m: 3 }}  variant="standard"></FormControl>
      <FormControl sx={{ m: 3 }} variant="standard">
        <FormLabel id="demo-error-radios" style={{paddingLeft:"45px" , fontSize: "20px" ,paddingTop:"20px", color:"black" ,
        fontFamily: 'Poppins', fontWeight: "620" , paddingBottom:"20px"}}>What is your query related to?</FormLabel>
        <RadioGroup
          aria-labelledby="demo-error-radios"
          name="quiz"
          style={{paddingLeft: "40px" }}
        //   value={value}
        //   onChange={handleRadioChange}
        >
          <FormControlLabel value="1" control={<Radio />} style={{fontFamily: 'Poppins', fontWeight: "620" }} label="Questions, concerns, testimonials" />
          <FormControlLabel value="2" control={<Radio />} style={{fontFamily: 'Poppins', fontWeight: "620" }} label="Feedback or feature requests" />
          <FormControlLabel value="3" control={<Radio />} style={{fontFamily: 'Poppins', fontWeight: "620" }} label="Report Misconduct" />
          <FormControlLabel value="4" control={<Radio />} style={{fontFamily: 'Poppins', fontWeight: "620" }} label="Report a bug" />
          <FormControlLabel value="5" control={<Radio />} style={{fontFamily: 'Poppins', fontWeight: "620" }} label="Want to write a story about us" />
          <FormControlLabel value="6" control={<Radio />} style={{fontFamily: 'Poppins', fontWeight: "620" , paddingBottom:"20px"}} label="Want to invest? We'd be honoured" />
        </RadioGroup>
         <FormHelperText></FormHelperText>
         <Button onClick={handleShow} sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined" style={{ width:"360px", height:"40px" ,fontSize:"21px",fontFamily: 'Poppins', fontWeight: "620" ,
            border:"1px solid #BFBFBF" , borderRadius:"10px",  color:"white", background:"#0129FF" , marginLeft:"30px", textTransform:"none" }}>
          Next
        </Button>
      </FormControl>
    </form>
</Card>

        {/* REMOVE COMMENT FROM BELOW CARD TO GET SECOND FORM */}

        <Card  show={show} onHide={handleClose} style={{ width: '460px' , height:"450px" ,border: "none" , boxShadow: "0 0 4px #0129FF"  }}>
        <form ></form>
        <FormLabel id="demo-error-radios" style={{ paddingLeft:"45px" , fontSize: "20px" ,paddingTop:"40px", color:"black" ,
        fontFamily: 'Poppins', fontWeight: "620" , paddingBottom:"30px"}}> Feedback or feature requests</FormLabel>
        <Formik>
        <Form>
          <label htmlFor="body">Name</label>
          <div style={{ paddingLeft:"50px" , paddingBottom:"27px" }}>
          <Field id="body" name="body" placeholder="Name" style={{ width:"160px" , height:"40px" , fontFamily: 'Poppins',
           fontWeight: "620" , border:"1px solid #BFBFBF" , borderRadius:"10px" , color:"#737373"  , paddingLeft:"15px"}} />
          <Field id="title" name="title" placeholder="Email" style={{ width:"160px" , marginLeft:"40px", height:"40px" ,
          fontFamily: 'Poppins', fontWeight: "620", border:"1px solid #BFBFBF" , borderRadius:"10px", color:"#737373" , paddingLeft:"15px"}} />
          <div style={{ width:"100px"  }} ><Field id="title" name="title" placeholder="Email" /></div>
            </div>
          <label htmlFor="title">Email</label>
          <Field id="title" name="title" placeholder="Email" />

          <label htmlFor="subtitle">Subject</label>
         <div style={{ paddingLeft:"50px" , paddingBottom:"27px" }}>
          <Field id="body" name="body" placeholder="Subject" style={{ width:"360px"  , height:"40px" ,fontFamily: 'Poppins',
          fontWeight: "620" , border:"1px solid #BFBFBF" , borderRadius:"10px" , color:"#737373"  , paddingLeft:"15px"}} />
           <div style={{ width:"100px"  }} ><Field id="title" name="title" placeholder="Email" /></div>
             </div>
           <Field id="subtitle" name="subtitle" placeholder="Subject" />

           <label htmlFor="lastName">Type your message here</label>
           <div style={{ paddingLeft:"50px" , paddingBottom:"27px" }}>
          <Field id="body" name="body" placeholder="Type your message here..." style={{ width:"360px", height:"120px",
          fontFamily: 'Poppins', fontWeight: "620" , border:"1px solid #BFBFBF" ,  borderRadius:"10px" , color:"#737373", paddingLeft:"15px"}} />
           <div style={{ width:"100px"  }} ><Field id="title" name="title" placeholder="Email" /></div>
            </div>
            <div style={{ paddingLeft:"50px" , paddingBottom:"27px" }}>
            <button
            type="submit"
            style={{ width:"360px", height:"40px" ,fontSize:"21px",fontFamily: 'Poppins', fontWeight: "620" ,
            border:"1px solid #BFBFBF" , borderRadius:"10px",  color:"#737373", background:"white" , paddingLeft:"15px", textTransform:"none" }}
            //onClick={()=>{setrdvarpost(true)}}
            >
            Submit
          </button>
            </div>
        </Form>
      </Formik>
</Card>

{/* REMOVE COMMENT FROM BELOW CARD TO GET THIRD FORM */}

<Card  style={{ width: '460px' , height:"450px" ,border: "none" , boxShadow: "0 0 4px #02D951" }}>
         <form >
       <FormControl sx={{ m: 3 }}  variant="standard">
        <FormLabel id="demo-error-radios" style={{paddingLeft:"45px" , fontSize: "20px" ,paddingTop:"20px", color:"black" ,
        fontFamily: 'Poppins', fontWeight: "620" , paddingBottom:"20px"}}>Feedback or feature requests</FormLabel>
        <Card.Img variant="top" src={form3}  style={{height: "160px" ,width: "160px" , marginTop:"20px ",  marginBottom:"30px ",
        dislay:"box" , marginLeft:"120px "}}/>
          <div style={{textAlign:"center", fontSize:"17px",fontFamily: 'Poppins', fontWeight: "620" }}> Your query has been submitted successfully!</div>
          <div style={{textAlign:"center" , paddingBottom:"20px" ,fontFamily: 'Poppins', fontWeight: "620" , fontSize:"17px"}}> Our team will get in touch with your shortly</div>
        <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined" style={{ width:"360px", height:"40px" ,fontSize:"21px",
        fontFamily: 'Poppins', fontWeight: "620" , border:"1px solid #BFBFBF" , borderRadius:"10px",  color:"white", background:"#0129FF" ,
        marginLeft:"30px" , textTransform:"none" }}>
          Submit another query
        </Button>
      </FormControl>
    </form>
   </Card>
  </Col>
</Row>
</div> );
}

