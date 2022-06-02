import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Contactus.css";
import Card from 'react-bootstrap/Card';
import mail from "./mailimg.svg";
import phone from "./phoneimg.svg";

import "bootstrap/dist/css/bootstrap.min.css";
import * as React from 'react';

import { useState } from "react";
import State1 from "./State1";
import State2 from "./State2";
import { render } from "react-dom";

import State3 from "./State3";
import { Grid } from "@mui/material";

export default function Contactus() {
  const [isNext, setIsNext] = useState(true);
  const [isNext1, setIsNext1] = useState(true);


  const handleNext = () => {
    setIsNext(false);
  }
  const handleNext1 = () => {
    setIsNext1(false);
  }
  const renderAuthButton = () => {
    if (isNext == true) {
      return <State1 handleNext={handleNext} ></State1>;
    }
    else if (isNext1 == true) {
      return <State2 handleNext1={handleNext1}></State2>;
    }
    else {
      return <State3></State3>
    }
  }

  return (<div style={{ marginTop: '130px', fontFamily: 'Poppins', fontWeight: "620" }}>
    {/* style={{fontWeight:"10",marginLeft:"48px",marginTop:"30px",marginBottom:"20px"}} */}
    {/* <h3 >About Us</h3> */}

      <p style={{ textAlign: "center", fontSize: "36px", fontFamily: 'Poppins', fontWeight: "620", margin: "30px 0px 0px 0px", paddingLeft: "0px" }} >Contact Us </p>
      <Row className="mx-auto container align-items-center d-flex justify-content-end ">
      <Col
      style={{  paddingTop: "30px", paddingBottom: "80px" }}>
        <Card style={{  border: "none" }}>
          <Card.Body>
            <Card.Text style={{ paddingLeft: "5px", fontSize: "26px" }}>
              How can we help you?
            </Card.Text >
            <Card.Text style={{ paddingLeft: "5px", color: "#737373", fontSize: "15px" ,marginBottom:"0px" }}>
              Fill in the form or use any of the given details to get in touch. 
            </Card.Text>
            <Card.Text style={{ paddingLeft: "5px", color: "#737373", fontSize: "15px", paddingBottom: "50px" }}>
            Our team will respond shortly
            </Card.Text>
            <div style={{ paddingLeft: "30px" }}>
              <Card.Img variant="top" src={phone} style={{ height: "40px", width: "20px" }} />
              <span style={{ paddingLeft: "50px", color: "#737373" }}> +91 87776 88535</span> </div>
            <div style={{ height: "45px" }}></div>
            <div style={{ paddingLeft: "20px" }}>
              <Card.Img variant="top" src={mail} style={{ height: "30px", width: "40px" }} />
              <span style={{ paddingLeft: "50px", color: "#737373" }}>support@elekrity.com</span> </div>
          </Card.Body>
        </Card>
      </Col>

      <Col style={{  paddingTop: "45px", paddingBottom: "80px" }}>
        {/* REMOVE COMMENT FROM BELOW CARD TO GET FIRST FORM */}

        <Grid >{renderAuthButton()} </Grid>


        {/* REMOVE COMMENT FROM BELOW CARD TO GET SECOND FORM */}
        {/* REMOVE COMMENT FROM BELOW CARD TO GET SECOND FORM */}


        {/* REMOVE COMMENT FROM BELOW CARD TO GET THIRD FORM */}

      </Col>
    </Row>
  </div>);
}
