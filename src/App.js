import './App.css';
import {BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom"
import Login from './Components/Login';
import Home from "./Components/Home";
import SingleProduct from './Components/SingleProduct';
import { useAuth0 } from "@auth0/auth0-react";
function App() {

  const {isAuthenticated} = useAuth0();
  console.log(useAuth0());
  const options = {
    // passing the client secret obtained from the server
    clientSecret: '{{process.env.STRIPE_SK}}',
  };

  return (
    <div className="App">
        <Router>
        <Routes>
        <Route path = "/" element = {<Login/>}/>
        <Route path = "/products" element = {<Home/>}/>
        <Route path = "/shopping-cart/:id" element = {<SingleProduct/>}/>
        </Routes> 
        </Router>  
        
    </div>
  );
}

export default App;
// {!isAuthenticated && <Route path = "/" element = {<Login/>}/> }
// {isAuthenticated && (
//   <>
//   <Route path = "/products" element = {<Home/>}/>
//   <Route path = "/shopping-cart/:id" element = {<SingleProduct/>}/>
//   </>
// ) }

//  <Route path = "*" element = {isAuthenticated ? <Navigate to = "/login"/> : <Navigate to ="/"/>}/>
