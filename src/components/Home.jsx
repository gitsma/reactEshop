import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import data from '../data/products'
import styles from './Home.module.css'
import { Link } from 'react-router-dom'

import { useState } from 'react'

const Home = () => {
  const [hoverleft, setHoverLeft] = useState(false)
  const [hoverright, setHoverRight] = useState(false)

  const mouseLeft = () => {
    hoverleft ? setHoverLeft('') : setHoverLeft(`${styles.HoverLeft}`)
  }

  const mouseRight = () => {
    hoverright ? setHoverRight('') : setHoverRight(`${styles.HoverRight}`)
  }

  return (
    <body>
      <div className={`${styles.Container} ${hoverleft} ${hoverright}`}>
        <div
          className={`${styles.Split} ${styles.Left}`}
          onMouseEnter={mouseLeft}
        >
          <h1>Playstation 5</h1>
          <Link to="/products" className={styles.Btn}>View More</Link>
        </div>
        <div
          className={`${styles.Split} ${styles.Right}`}
          onMouseEnter={mouseRight}
        >
          <h1>Xbox Series X 5</h1>
          <Link to="/products" className={styles.Btn}>View More</Link>
        </div>
      </div>
    </body>
  )
}

export default Home
