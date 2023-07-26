import React from 'react'
import Table from 'react-bootstrap/Table'
import OneProduct from './OneProduct'
import { Button } from 'react-bootstrap'
import ProductList from './ProductList'
import styles from './Cart.module.css'
import { Link } from 'react-router-dom'

const Cart = ({
  products,
  increaseQuantity,
  decreaseQuantity,
  deleteProduct,
  clearCart
}) => {
  console.log(products)

  if (products.length > 0) {
    

  const getTotal = () => {
    return products
      .reduce((sum, { price, quantity }) => sum + price * quantity, 0)
      .toFixed(2)
  }

    return (
      <div className={styles.ShoppingCart}>
        <h4>Shopping Cart</h4>
        <Table size="sm">
          <thead>
            <tr>
              <th>Item</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Unit Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>

            {products.map((oneProduct, index) => (
              
              <tr className='container-fluid h-100' key={index}>
                
                <td>
                   <div>
                    <img className={styles.cartImg} src={oneProduct.imageUrl}/>
                    </div>
                    </td>
                <td>{oneProduct.name} </td>
                <td className={styles.IncreaseDecrease}>
                  <Button className={styles.cartBtn} onClick={() => decreaseQuantity(oneProduct)}>
                    -
                  </Button>
                  {oneProduct.quantity}
                  <Button className={styles.cartBtn} onClick={() => increaseQuantity(oneProduct)}>
                    +
                  </Button>
                </td>
                <td> {`${oneProduct.quantity}`* `${oneProduct.price}`} € </td>
                <td>
                  <Button className={styles.cartRemoveItem} onClick={() => deleteProduct(oneProduct)}>
                    Remove
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>  
          <tfoot>
            <tr className='container-fluid h-100'>    
              <td></td> 
              <td></td> 
              <td><strong>Total Sum</strong></td>
              <td>{getTotal()} €  </td>
              <td><Button className={styles.cartRemoveItem} > BUY NOW </Button></td>
            </tr>
          </tfoot>
        </Table>
        
      </div>
      
    )
  } else return <div className={styles.ShoppingCart}>
  <h4>Shopping Cart</h4>
  <Table size="sm">
    <thead>
      <tr>
        <th>Item</th>
        <th>Name</th>
        <th>Quantity</th>
        <th>Unit Price</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td><h6>Your Cart is empty. Go to <Link to="/products" className={styles.link}>Catalogue.</Link> </h6>.</td>
          <td></td>
          <td></td>
          <td></td>

        </tr>
    </tbody>  
    
  </Table>
  
</div>
}

export default Cart
