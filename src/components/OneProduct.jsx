import React from 'react'
import products from '../data/products'
import Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap'

const OneProduct = ({addToCart}) => {
  return (
    <div className='d-flex flex-wrap justify-content-around'>
      {products.map((product, index) => (

          <Card style={{ width: '400px', marginTop: '20px'}} key={index}>
            <Card.Img style={{ height: '250px'}} variant="top" src={product.imageUrl} />
            <Card.Body>
              <Card.Title style={{textAlign:'center'}}>{product.name}</Card.Title>
              <Card.Text style={{textAlign:'justify'}}>{product.description}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">
                <Button style={{float:'right'}} variant='primary' onClick={() => addToCart(product)}>Add to Cart</Button>
                </small>
            </Card.Footer>
          </Card>

      ))}
    </div>
  )
}

export default OneProduct
