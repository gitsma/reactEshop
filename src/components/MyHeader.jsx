import React from 'react'
import styles from './MyHeader.module.css'
import { Link } from 'react-router-dom'

const MyHeader = () => {
  return (
    <>
    <div className={styles.body}>
      <nav className={styles.nav}>
        <div className={styles.container}>
          <h1><li><Link to="/" className={styles.link}>React E-shop</Link></li></h1>
            <ul className={styles.ul}>
              <li><Link to="/"className={styles.current}>Home</Link></li>
              <li><Link to="/products" className={styles.link}>Products</Link></li>
              <li><Link to="/cart" className={styles.link}>Cart</Link></li>
            </ul>
        </div>
      </nav>
    </div>
    </>


  )
}

export default MyHeader
