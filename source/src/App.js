import React, {Component} from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from "./Components/Navbar/CustomNavbar1";
import Landingpage from "./Components/Landingpage/Landingpage.js";
// import Contactus from "./Components/Contactus/Contactus.js";
// import FAQ from "./Components/FAQ/FAQ.js";
import TheScience from "./Components/TheScience/TheScience.js";
// import CommunityGuidelines from "./Components/CommunityGuidelines/CommunityGuidelines.js";
import Footer from "./Components/Footer/Footer";
import { Navigate  } from 'react-router-dom';
import ScrollToTop from "./Components/scrolltoTop";
// import Policy from "./Components/Privacy Policy/policy";
// import AboutUs from "./Components/AboutUs/AboutUs.js";


function App() {
  return (
    <Router>
            <ScrollToTop />
      <Nav />
      <div style={{marginTop:'80px'}}></div>
          <Routes>
            <Route path='/' element={<Landingpage />} exact />
            {/* <Route path='/FAQ' element={<FAQ />} />
            <Route path='/CommunityGuidelines' element={<CommunityGuidelines />} />
            <Route path='/ContactUs' element={<Contactus />} /> */}
            <Route path='/TheScience' element={<TheScience />} />
            {/* <Route path='/Policy' element={<Policy />} />
            <Route path='/AboutUs' element={<AboutUs />} /> */}
            <Route path="*" element={<Navigate to ="/" />}/>
          </Routes>

       <Footer />
    </Router>
  )
}

export default App;

