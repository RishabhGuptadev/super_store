import React, {useEffect} from "react";
import Navbar from "./Navbar";
import { Row, Col, Button } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useNavigate } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import { useAuth0 } from "@auth0/auth0-react";

const stripePromise = loadStripe(
  "pk_test_51KfqyUSBugkvhQZGRhf4yTQjqBw2NMgruYu87aetXQcCMyxWtaCy7tjwlxYczFQ8w9buq9XtnLoC47ICzO44niDr00TxFJh1Nd"
);

const SingleProduct = ({ match, location }) => {
  const value = window.location.href.split("=");
  let navigate = useNavigate();
  const options = {
    // passing the client secret obtained from the server
    clientSecret: "{{process.env.STRIPE_SK}}",
  };
  const { products, loading } = useSelector((state) => state.ProductsReducer);
  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();
  console.log("loginwithredirect", useAuth0());
  
  useEffect(()=>{
    
    if (!isLoading) {
      if (!isAuthenticated) { 
      window.location = "/";
        
      } 
    }
  }, [isLoading, isAuthenticated])

  const product = products?.filter(
    (product) => product.id === parseInt(value[1])
  );

  if (product !== undefined) {
    localStorage.setItem("product", JSON.stringify(product));
  }
  const SingleProduct = JSON.parse(localStorage.getItem("product"));

  const handleToken = (token, addresses) => {

    console.log(token, addresses);
  };
 
  return (
    <div>
    {isAuthenticated ? <div><Navbar />
    <Row>
      <Col lg={6} className="mt-5 pt-2">
        <img
          style={{ objectFit: "contain", width: "300px", height: "300px" }}
          src={SingleProduct[0]?.image}
        />
      </Col>
      <Col lg={6} className="mt-5 pt-2">
        <h4>{SingleProduct[0]?.title}</h4>
        <h4>Rating : 4</h4>
        <Button color="primary">
        <StripeCheckout
        token={handleToken}
        billingAddress 
        shippingAddress
        amount={product?.price * 100}
        name = {product?.name}
        stripeKey="pk_test_51KfqyUSBugkvhQZGRhf4yTQjqBw2NMgruYu87aetXQcCMyxWtaCy7tjwlxYczFQ8w9buq9XtnLoC47ICzO44niDr00TxFJh1Nd"
      />
        </Button>
        
      </Col>
    </Row> </div> : <div>Loading...</div>}
      
    </div>
  );
};

export default SingleProduct;
