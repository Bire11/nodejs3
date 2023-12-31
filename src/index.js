import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import Bmi from './components/bmi';
import AjaxApi from './components/AjaxApi';
import ServerTwo from './components/ServerTwo';
//import Dashboard from './components/Dashbord/Dashbord';
//import ApplicationForm from'./components/Dashbord/ApplicationForm';

//import ViewApp from './components/ViewApp';
import Dashboard from './components/Dashbord/Dashbord';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      {/* <App />
   
     <AjaxApi/> 
    < ServerTwo/> 
    <ApplicationForm/> 
    <ViewApp/> */}
    <Dashboard/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
