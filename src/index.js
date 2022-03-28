import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from "@auth0/auth0-react";
import 'bootstrap/dist/css/bootstrap.css';
import {Provider} from "react-redux";
import store from "./redux/store";


ReactDOM.render(
  <React.StrictMode>
  <Provider store = {store}> 
  <Auth0Provider
  domain="dev--jlcbrwp.us.auth0.com"
  clientId="7jMZGR1yrnkWl2vZZ4MV6S9UA0RHbhih"
  redirectUri={`${window.location.origin}/products`}
>
  <App />
</Auth0Provider>
</Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
