import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Feature8.css";
import Card from 'react-bootstrap/Card';
//import About from "../Images/About.png"
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";
import feature8img from "./Feature8img.svg";
import { Formik, Field, Form } from "formik";
function Feature8() {
   return (
      <div style={{ paddingTop: '50px', fontFamily: "Poppins" }}>
         <div className="container px-4  align-middle" style={{ paddingBottom: "50px", fontFamily: "Poppins", fontWeight: "620" }}>
            <div className="row  align-items-center d-flex justify-content-end d-flex flex-column-reverse flex-md-row">
               {/* <div className="col-md  " style={{ height:'100%',padding:'3% 6%', borderRadius:"6px" }}>

        <div className="pt-4 pt-md-0 mobile-text" style={{  fontSize: "21px" }}>
        We are coming soon
        </div>
        <div className="pt-4 pt-md-0 mobile-text" style={{  fontSize: "18px" }}>
        Our team is currently still working to ensure we deliver the best product to you. To stay updated about the launch and
        get early access, please leave your name and email ID with us and we will get back to you soon!
        </div>
     </div> */}
               <div className="col-md mt-4 ml-md-5  " style={{ height: '100%', padding: '3%', borderRadius: "6px", textAlign: "left", padding: '2rem 1rem  ' }}>
                  <div style={{ fontSize: "36px" }} >
                     We are <span style={{ color: "#0129FF", fontSize: "36px", fontFamily: "Poppins" }}>coming</span> soon
                  </div>
                  <br />
                  <div style={{ fontSize: "16px" }} >
                     Our team is currently still working to ensure we deliver the best product to you. To stay updated about the launch and
                     get early access, please leave your name and email ID with us and we will get back to you soon!
                  </div>
                  <Formik initialValues={{ youremail: "", yourname: "" }}
                     onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                           alert(JSON.stringify(values, null, 2));
                           setSubmitting(false);
                           console.log("yay");
                        }, 500);
                     }}>
                     {props => {
                        const {
                           values,
                           isSubmitting,
                           handleChange,
                           handleSubmit,
                        } = props;
                        return (
                           <Form onSubmit={handleSubmit}>
                              <Form className='d-flex flex-column align-center flex-md-row' style={{ paddingTop: '40px', alignItems: 'center' }}>
                                 <Field label="Name"
                                    name="yourname" onChange={handleChange}
                                    value={values.yourname} id="yourname" placeholder="Your Name" style={{
                                       width: "200px", marginTop: '1rem', height: "40px", fontFamily: 'Poppins',
                                       fontWeight: "620", border: "1px solid #BFBFBF", borderRadius: "10px", color: "#737373", paddingLeft: "15px"
                                    }} />
                                 <Field label="E-mail" onChange={handleChange}

                                    name="youremail"
                                    placeholder="E-mail"
                                    value={values.youremail} id="youremail" className=' mx-md-4 '  style={{
                                       width: "200px", height: "40px", marginTop: '1rem',
                                       fontFamily: 'Poppins', fontWeight: "620", border: "1px solid #BFBFBF", borderRadius: "10px", color: "#737373", paddingLeft: "15px"
                                    }} />

                              </Form>
                              <div className="flex-md-row mt-5 button-para" style={{ margin: '0 0' }}>
                                 <button type="submit" disabled={isSubmitting} variant="outline-primary" size="lg" className="button_trial " href="#" active
                                    style={{
                                       textDecoration: 'none', boxShadow: "2px 5px 7px rgba(0, 0, 0, 0.15)", background: "rgb(1, 41, 255)", border: "0.3px solid blue", margin: '0 0',
                                       borderRadius: "10px", fontSize: "20px", width: "130px"
                                    }}>
                                    Submit
                                    {/* <Link to="/">Sign-Up</Link>  */}
                                 </button>
                              </div>
                           </Form>
                        )
                     }}
                  </Formik>



               </div>
               <div className="col-md text-center " >
                  <img src={feature8img} alt="feature8" srcset="" style={{ width: '100%' }} />
               </div>

            </div>
         </div>

      </div>
      //     <div style={{backgroundColor:"#263238", paddingBottom:"50px" , height: "600px" , fontFamily:"Poppins" }}>
      //   <Row className="p-0 m-0">
      // <Col lg={6} md={7} sm={12} xs={12} style={{display:"flex",justifyContent:"space-around",paddingTop:"100px" , paddingBottom:"80px"}}>
      //           <Card  style={{ width: '32rem' ,border: "none" ,backgroundColor:"#263238" , color:"white"}}>
      //   <Card.Body>
      //     <Card.Text style={{ textAlign:"right" , fontSize:"23px"}}>
      //     <br/>
      //     <br/>
      //     <br/>
      //     We connect you to people with similar goals and time commitments, so you can experience the magic of coworking anywhere, anytime
      //     </Card.Text>
      //     {/* <Card.Text style={{ textAlign:"right" , fontSize:"23px" }}>
      //     goals and time commitments, so you can
      //     </Card.Text>
      //     <Card.Text style={{ textAlign:"right" , fontSize:"23px" }}>
      //     experience the magic of coworking
      //     </Card.Text>
      //     <Card.Text style={{ textAlign:"right" , fontSize:"23px"}}>
      //     anywhere, anytime
      //     </Card.Text> */}
      //     <br/>
      //   </Card.Body>
      // </Card>
      //         </Col>
      //         <Col
      //         lg={5} md={3} sm={12} xs={12} style={{display:"flex",justifyContent:"space-around",paddingTop:"20px" , paddingBottom:"20px"}}>
      //         <Card style={{alignItems: "center" ,border: "none", background:"#263238"}}>
      //     <Card.Img variant="top" src={feature2img}  style={{height: "550px" ,width: "500px"}}/>
      //   </Card>
      //         </Col>
      //     </Row>
      // </div>
   );
}
export default Feature8;