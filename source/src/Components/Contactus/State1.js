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


export default function State1 ({handleNext}){


  return (
    <>

    <div>

<Card style={{ maxWidth: '460px'  ,border: "none" , boxShadow: "0 0 7px #CECECE" }}>
          <form >
       <FormControl sx={{ m: 3 }}  variant="standard" style={{marginTop:"0px",marginBottom:"0px" }}></FormControl>
      <FormControl sx={{ m: 3 }} variant="standard" style={{marginTop:"0px"}}>
        <FormLabel id="demo-error-radios" style={{ padding: "3%",fontSize: "20px" ,paddingTop:"20px", color:"black" , maxWidth:'100%',
        fontFamily: 'Poppins', fontWeight: "620" , paddingBottom:"20px"}}>What is your query related to?</FormLabel>
        <RadioGroup
          aria-labelledby="demo-error-radios"
          name="quiz"
          style={{paddingLeft: "5%" }}
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
         <div style={{width:'750px'}}>
           <Button sx={{ mt: 1, mr: 1 }} onClick={handleNext}  variant="outlined" style={{ height:"40px" , minWidth:'40%', maxWidth:'360px',fontSize:"21px",fontFamily: 'Poppins', fontWeight: "620" ,
              border:"1px solid #BFBFBF" , borderRadius:"10px",  color:"white", background:"#0129FF" ,textTransform:"none" ,  width:"95%", marginLeft:"20px", marginRight:"auto"}}>
            Next
                   </Button>
         </div>
      </FormControl>
    </form>
</Card>
</div>

</>

);
};


