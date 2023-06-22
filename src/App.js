import logo from './logo.svg';
import './App.css';
import Amplify ,{ API } from 'aws-amplify';
import React,{useEffect,useState} from 'react';
import { Button } from '@aws-amplify/ui-react';
import Home from "./home";
import { Route, Switch } from "react-router";
import Signup from "./pages/signup";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

const myAPI="csarestapi"
const path="/users"
const userId=1

function App() {

  const getUser=()=>{
    API.get(myAPI,path+'/'+userId)
    .then(response=>{
      console.log(response)
    })
    .catch(error=>{
      console.log(error)
    })
  }

  return (
    <>
    <BrowserRouter>
    <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/signup" component={Signup}></Route>
        <Route path="/login" component={Login}></Route> 
        <Route path="/dashboard" component={Dashboard}></Route>
        <Route component={Error}></Route>
      </Switch>
    </BrowserRouter>
  
      </>
  );
}

export default App;
