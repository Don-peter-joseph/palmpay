import React from 'react';
// import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Amplify } from 'aws-amplify';
import awsmobile from './aws-exports';
import { BrowserRouter } from "react-router-dom";
Amplify.configure(awsmobile);

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    </BrowserRouter>,
  document.getElementById("root")
);

