import React from 'react';
import Card from 'react-bootstrap/Card';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import { Formik, Field, Form } from "formik";


export default function State2 ({handleNext1}){



    return (
      <Card   style={{ width: '460px' , height:"450px" ,border: "none" , boxShadow: "0 0 10px #B9C1EC"  }}>
      <form ></form>
      <FormLabel id="demo-error-radios" style={{ fontSize: "20px" ,paddingTop:"40px", color:"black" ,
      fontFamily: 'Poppins', fontWeight: "620" , paddingBottom:"30px" , textAlign:"center"}}> Feedback or feature requests</FormLabel>
      <Formik initialValues={{ email: "", name:"", subject:"", body:"" }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 500);
      }}


    >
      {props => {
        const {
          values,
        } = props;
        return (
      <Form>
        {/* <label htmlFor="body">Name</label> */}
        <div style={{ paddingLeft:"50px" , paddingBottom:"27px" }}>
        <Field label="Name"
              name="name"
              value={values.name}  placeholder="Name" style={{ width:"160px" , height:"40px" , fontFamily: 'Poppins',
         fontWeight: "620" , border:"1px solid #BFBFBF" , borderRadius:"10px" , color:"#737373"  , paddingLeft:"15px"}} />

        <Field label="E-mail"
              name="email"
              placeholder="E-mail"
              value={values.email} style={{ width:"160px" , marginLeft:"40px", height:"40px" ,
        fontFamily: 'Poppins', fontWeight: "620", border:"1px solid #BFBFBF" , borderRadius:"10px", color:"#737373" , paddingLeft:"15px"}} />
        <div style={{ width:"100px"  }} >
          {/* <Field id="title" name="title" placeholder="Email" /> */}
          </div>
          </div>
        {/* <label htmlFor="title">Email</label> */}
        {/* <Field id="title" name="title" placeholder="Email" /> */}

        {/* <label htmlFor="subtitle">Subject</label> */}
       <div style={{ paddingLeft:"50px" , paddingBottom:"27px" }}>
        <Field label="Subject"
              value={values.subject}
              id="subject" name="subject" placeholder="Subject" style={{ width:"360px"  , height:"40px" ,fontFamily: 'Poppins',
        fontWeight: "620" , border:"1px solid #BFBFBF" , borderRadius:"10px" , color:"#737373"  , paddingLeft:"15px"}} />
         <div style={{ width:"100px"  }} >
           {/* <Field id="title" name="title" placeholder="Email" /> */}
           </div>
           </div>
         {/* <Field id="subtitle" name="subtitle" placeholder="Subject" /> */}

         {/* <label htmlFor="lastName">Type your message here</label> */}
         <div style={{ paddingLeft:"50px" , paddingBottom:"27px" }}>
        <Field label="Body"
              name="body"
              placeholder="E-mail"
              value={values.body} placeholder="Type your message here..." style={{ width:"360px", height:"120px",
        fontFamily: 'Poppins', fontWeight: "620" , border:"1px solid #BFBFBF" ,  borderRadius:"10px" , color:"#737373", paddingLeft:"15px"}} />
         <div style={{ width:"100px"  }} >
           {/* <Field id="title" name="title" placeholder="Email" /> */}
         </div>
          </div>
          <div style={{ paddingLeft:"50px" , paddingBottom:"27px" }}>
          {/* <button
          type="submit" onClick={handleNext1}
          style={{ width:"360px", height:"40px" ,fontSize:"21px",fontFamily: 'Poppins', fontWeight: "620" ,
          border:"1px solid #BFBFBF" , borderRadius:"10px",  color:"#737373", background:"white" , paddingLeft:"15px", textTransform:"none" }}
          //onClick={()=>{setrdvarpost(true)}}
          >
          Submit
        </button> */}
        <Button sx={{ mt: 1, mr: 1 }} onClick={handleNext1}  variant="outlined" style={{ width:"360px", height:"40px" ,fontSize:"21px",fontFamily: 'Poppins', fontWeight: "620" ,
            border:"1px solid #BFBFBF" , borderRadius:"10px",  color:"white", background:"#0129FF" , textTransform:"none" }}>
          Submit
        </Button>
          </div>
      </Form>
      )
    }}
    </Formik>
  </Card>
  );
  };
