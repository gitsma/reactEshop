import React from 'react';
import MyHeader from './components/MyHeader';
import { Container } from 'react-bootstrap';
import ProductList from './components/ProductList';
import { BrowserRouter} from 'react-router-dom';


const App = () => {
  return (
    <BrowserRouter>
      <Container style={{paddingLeft: "0", paddingTop: "20px", width: "100vw"}}>
        <MyHeader/>
        <ProductList/>
      </Container>
      </BrowserRouter>
  )
}

export default App