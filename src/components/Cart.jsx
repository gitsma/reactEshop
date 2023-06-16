import React from 'react'
import Table from 'react-bootstrap/Table'
import OneProduct from './OneProduct'
import { Button } from 'react-bootstrap'
import ProductList from './ProductList'

const Cart = ({
  products,
  increaseQuantity,
  decreaseQuantity,
  deleteProduct,
  clearCart
}) => {
  console.log(products)

  const getTotal = () => {
    return products
      .reduce((sum, { price, quantity }) => sum + price * quantity, 0)
      .toFixed(2)
  }

  if (products.length > 0) {
    return (
      <div>
        <h2>Cart</h2>
        <Table size="sm">
          <thead>
            <tr>
              <th>Num</th>
              <th>Product name</th>
              <th className="d-flex justify-content-evenly">Quantity</th>
              <th>Price</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {products.map((oneProduct, index) => (
              <tr className='container-fluid h-100' key={index}>
                <td>{index + 1} </td>
                <td>{oneProduct.name} </td>
                <td className="d-flex align-items-center justify-content-evenly">
                  <Button onClick={() => decreaseQuantity(oneProduct)}>
                    -
                  </Button>
                  {oneProduct.quantity}
                  <Button onClick={() => increaseQuantity(oneProduct)}>
                    +
                  </Button>
                </td>
                <td>{oneProduct.price} € </td>
                <td>
                  <Button onClick={() => deleteProduct(oneProduct)}>
                    Remove item
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
              <td><Button onClick={clearCart} > Clear Cart </Button></td>
            </tr>
          </tfoot>
        </Table>
      </div>
    )
  } else return <div>Your Cart Is Empty</div>
}

export default Cart
