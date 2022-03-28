import React, { useEffect } from 'react'
import { Button, Row, Col, Card, CardBody } from "reactstrap";
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../redux/actions/Products';
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

 const Products = () => {
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const {products, loading} = useSelector((state)=> state.ProductsReducer);
   const { loginWithRedirect, isAuthenticated } = useAuth0();
   console.log("auth0", useAuth0());
   console.log("products", products); 
    useEffect(()=>{
        dispatch(getAllProducts())    
    }, []); 

  return (
      <React.Fragment>
      <div className='mt-3'>
      <h1>Latest Arrivals</h1>
        </div>  
        {loading  && <div className = "mt-4 pt-4">Loading...</div>}
        <Row className='d-flex justify-content-center'> 
        {products?.map((product)=> {
            return  <Col lg = {3} sm= {6} md = {4} className = "m-4">
            <Card>
            <CardBody>
              <img style= {{objectFit: "contain", width: "300px", height: "300px"}} src= {product.image}/>
              <h4 className='mt-3'>{product.title.substr(0, 25)}</h4>
              <Button onClick= {() => navigate(`/shopping-cart/product=${product.id}`)
              } color='primary'>Add To Cart</Button> 
            </CardBody>
            </Card>   
      </Col>
        })}
           
        </Row>
      </React.Fragment>
    
  )
}

export default Products;