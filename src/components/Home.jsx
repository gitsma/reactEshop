import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import data from '../data/products';

const Home = () => {
    console.log(data);
  return (
    <Carousel variant="dark">
      {data.map((oneProduct, index)=> (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={oneProduct.imageUrl}
            alt={oneProduct.name}
          />
          <Carousel.Caption>
            <h5>{oneProduct.name}</h5>
            <p>Price {oneProduct.price} €</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))
      }
    </Carousel>
  )
}

export default Home
