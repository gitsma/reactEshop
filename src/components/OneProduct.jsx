import React from 'react'
import products from '../data/products'
import Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap'

import styles from './OneProduct.module.css'

const OneProduct = ({addToCart}) => {
  return (
    <div className={styles.CardContainer}>
      {products.map((product, index) => (
          <Card className={styles.Card} key={index}>
            <Card.Img className={styles.CardImg} src={product.imageUrl} />
            <Card.Body>
              <Card.Title className={styles.CardTitle}>{product.name}</Card.Title>
              <Card.Text className={styles.CardText}>{product.description}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">
                <Card.Text></Card.Text>
                <Button className={styles.CardButton} variant='primary' onClick={() => addToCart(product)}>Add to Cart</Button>
                </small>
            </Card.Footer>
          </Card>
      ))}
    </div>
  )
}

export default OneProduct
