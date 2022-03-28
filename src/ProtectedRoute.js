// import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";

// const ProtectedRoute = ({component : element, ...rest}) => {

//     return (
//         <Route 
//         {...rest}
//         render = { props => {return <element {...props}/>
//         }
//     }
//         />
//     )
// }

// export default ProtectedRoute;

import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
    const auth = null; // determine if authorized, from context or however you're doing it
 
    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return auth ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateRoute;