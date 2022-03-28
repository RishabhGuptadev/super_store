import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Card, CardBody, Button } from "reactstrap";
import shoplogo from "./shoplogo.png";
const Login = () => {
  const { loginWithRedirect } = useAuth0();
  console.log("auth0", useAuth0());
  return (
    <div style={{display: "flex", alignItems: "center", justifyContent: "center", height: "100vh", backgroundColor : "#D9DDDC"}}>
      <Card className= "text-white mb-3 w-50 h-50" style={{backgroundColor: ""}}>
        <CardBody style={{display: "flex", alignItems : "center", height:"100%" }}>
        <div style={{ height: "50vh", width:"50%", position: "relative", right: "3.5%"}}> 
            <img src= "https://thumbs.dreamstime.com/b/rg-logo-letter-monogram-slash-modern-designs-template-black-color-white-background-164908197.jpg" style = {{height: "100%", width: "100%"}}/>
        </div>
        <div style={{ margin:"0px auto", display: "flex", flexDirection:"column", justifyContent:"center"}}>
        <h1 style={{color: "black"}}>Super Store</h1>
        <img src="https://media.istockphoto.com/vectors/shopping-bag-design-icon-shopping-logo-shop-concept-vector-vector-id1276423485?k=20&m=1276423485&s=170667a&w=0&h=FEvvNCaxIqMxa3Cwet6xLkE5WWW-hAJdfw-b3UvvQKg=" style={{height:"20vh", width: "20vh", margin:"0px auto"}}/>
        <Button color="primary" className="p-3" style = {{fontSize: "100%"}} onClick={async () => { 
          loginWithRedirect()
        }}>
          Log In
        </Button>
        </div> 
        
        </CardBody>
      </Card>
    </div>
  );
};

export default Login;
