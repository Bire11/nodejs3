// import { useEffect, useState } from "react";

// function viewApp (){

//     const [error, setError] = useState(null);
//     const [isLoaded, setIsLoaded] = useState(false);
//     const [items, setItems] = useState([]);


//     useEffect (() =>{
//         document.title ="REST API Test";

//     })
//     useEffect (() =>{
//         // fetch("https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8")
        
//         //fetch("http://127.0.0.1:5000")
//         fetch("http://localhost:4000/applicant/list-applicant")
//            .then(res=> res.json())
//            .then((result)=> {
//             setIsLoaded(true)
//             setItems(result)

//         },

//         (error)=> {
//             setIsLoaded(true)
//             setError(error)

//         })
        

//     }, [])
// Show applicants list 
// import modules
import React from 'react';
import './table.css';
//import './app.css'
import axios from 'axios';
import {useState, useEffect} from 'react';
//import {Link, useNavigate} from 'react-router-dom'


function ViewApp (){

  // define state variable to store data from api
  const [applicants, setApplicants] = useState([]);
  const [getMessage, setMessage] = useState('') // success message after deleted
  const [isSuccess, setSuccess] = useState(false); // manage success of deleting item
  //const navigate = useNavigate()

  // add title 
  useEffect(() =>{
    document.title ='Aplicants List';
  })

  // API: get data from mongoDB database
  useEffect(() =>{
    axios.get('http://localhost:4000/applicant/list-applicant')
    .then((res) =>{
      setApplicants(res.data); // set api data to useState as an array
    })
    .catch(err => { // catch error message
      console.log('Data not found.' +err.message)
    });
  }, []);
        
    // if(error){
    //     return(<div>Error:{error.message}</div>)
    // }
    // else if(! isLoaded){
    //     return <div>Loading ...</div>
    // }
    // else{
   
    return (
    
            <div className="table-wrapper">
                <table className="fl-table">
          
            <thead>
              <tr>
                <th>First_Name</th>
                <th>Last_Name</th>
                <th>Email</th>
                <th>Phone_Number</th>
                <th>date_updated</th>
              </tr>
            </thead>
          
              {applicants.map(item => (
                <tr key={item.id}>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
                  <td>{item.phone_number}</td>
                  <td>{item.date_updated}</td>
                </tr>
              ))}
           
          </table>
        </div>
      )
              
    

console.log(applicants)

 

}
export default ViewApp;