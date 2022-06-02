import React from 'react';
import Card from 'react-bootstrap/Card';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import { useState,useRef, Component} from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Formik, Field, Form } from "formik";
import form3 from "./form3.svg";


class State3 extends Component {


  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }
      render() {

    return (
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
  );
  };
};
export default State3;
