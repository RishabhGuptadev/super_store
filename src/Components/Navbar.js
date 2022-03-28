import React from "react";
import { Button, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
const Navbar = () => {
    const { logout, user } = useAuth0();
  console.log("user", user.name.split(' ')[0])
  return (
    <Row className="bg-light p-4" style={{}}>
      <Col lg={1}>
        <Link to="/products">
          {" "}
          <Button color="transparent">Home</Button>{" "}
        </Link>
      </Col>
      <Col lg={1}>
        <Link to="/products">
          {" "}
          <Button color="transparent">Products</Button>{" "}
        </Link>
      </Col>
      <Col lg={1}>
        <Link to="/products">
          {" "}
          <Button color="transparent">About US</Button>{" "}
        </Link>
      </Col>
      <Col lg={1}>
        <Link to="/products">
          {" "}
          <Button color="transparent">Profile</Button>{" "}
        </Link>
      </Col>
      <Col lg={1}>
        <Link to="/products">
          <Button color= "transparent" onClick={() => logout({ returnTo: window.location.origin })}>
            Log Out
          </Button>
        </Link>
      </Col>
      <Col>
      <h5 style={{float:"right"}}><span><img style={{height:"20px"}} src= "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/User_font_awesome.svg/1200px-User_font_awesome.svg.png" /></span> {user.name.split(' ')[0]}</h5>
      </Col> 
    </Row>
  );
};

export default Navbar;
