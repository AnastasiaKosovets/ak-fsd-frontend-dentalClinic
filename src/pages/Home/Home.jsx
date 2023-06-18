import React from 'react';
import './Home.css';
// import { ChangeView } from '../../common/ChangeView/ChangeView';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import space1 from "../../img/space1.jpg";
import space2 from "../../img/space2.jpg";
import space3 from "../../img/space3.jpg";
 
export const Home = () => {

    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
      };

     return (
         <div className='homeDesign'> 
          <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block carouselImg"
          src={space1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className="fw-semibold">Tú sonrisa es nuestra prioridad</h3>
          {/* <p>Tú sonrisa es nuestra prioridad </p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block carouselImg"
          src={space2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className="fw-semibold">Contamos con el mejor equípo y últimas tecnologías</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block carouselImg"
          src={space3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className="fw-semibold">Trato especial para los mas peques</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
            {/* <ChangeView 
                path={"/login"}
                name={"Login"}
            />
            <ChangeView 
                path={"/register"}
                name={"Register"}
            /> */}
         
         </div>
     )
}