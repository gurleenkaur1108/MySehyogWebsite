import Carousel from 'react-bootstrap/Carousel';
import i1 from "./i1.jpg";
import im1 from "./img1.jpg";
import i2 from "./i2.jpg";
import im2 from "./img2.jpg";
import i3 from "./i3.jpg";
import im3 from "./img3.jpg";
import i4 from "./i4.jpg";
import im4 from "./img4.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

function MyCaraousel()
{
  return(
     <div style={{  margin:'10px 0',maxWidth:'100%', display:'flex',flexDirection:'column',alignItems:'center' }}>
<Carousel interval={1500} variant="dark" style={{maxWidth:'1800px', width:'100%',height:'100%',padding:'7%' , paddingTop:"2rem"}} >
    <Carousel.Item>
      <img
        className="d-block w-100 "
        src={im1}
        alt="First slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 "
        src={im2}
        alt="Second slide"

      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 "
        src={im3}
        alt="Third slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 "
        src={im4}
        alt="Fourth slide"
      />
    </Carousel.Item>
  </Carousel>
  </div>
  );
}
export default MyCaraousel;