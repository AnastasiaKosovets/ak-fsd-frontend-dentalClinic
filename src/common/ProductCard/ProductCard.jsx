import React, {useEffect} from 'react';
import './ProductCard.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const ProductCard = ({image, name, species, id}) => {

    useEffect(()=>{
        console.log(image)
    },[]);

    const notFound = `https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png`;
     return (
         <div className="col-6 col-md-4 col-lg-3" >
            <Card className='productCardDesign' style={{  width: '20rem' }}>
        <Card.Img variant="top" className='pictureDesign' style={{  width: '12rem' }} src={image !== "" ? image : notFound} alt={id} />
        <Card.Body>
          <Card.Title className="cardText">{name}</Card.Title>
          <Card.Text className="cardText">
          Some text
          </Card.Text>
        </Card.Body>
      </Card>
            {/* <div className="imageDesign">
                <img className="pictureDesign" src={image !== "" ? image : notFound} alt={id} />
            </div>
            <div className="cardText">{name}</div>
            <div className="cardText">{species}</div> */}
         </div>
        
     )
}