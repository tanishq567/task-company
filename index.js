import React from 'react';
import ReactDOM from 'react-dom';
//import Getapi from './apifetch/Getapi';
//import Getapi from './apifetch/Getapi';
//import Ecomm from './apifetch/Ecomm';
//import Post_api from './apifetch/Post_api';
import App from "./App"
///import Project1 from './Assignment/Project1';
////import Hook_obj from './functional/Hook_obj';
//import Fetchget from './apifetch/Fetchget'
//import Project from './functional/Project'
//import Project1 from './Assignment/Project1
//import App from './apifetch/App'
import ClickCounter from './HOC/ClickCounter';
import HoverCounter from './HOC/HoverCounter';
ReactDOM.render(
  <React.StrictMode>
     {/* <ClickCounter/>  */}
   <App/>
     {/* <HoverCounter/> */}
  </React.StrictMode>,
  document.getElementById('root')
);


