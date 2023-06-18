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
import './app.css'
import axios from 'axios';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
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
                <Link className='button condensed new' to="/new-applicant">Add new</Link>
                
                <table className="fl-table">
              

            <thead>
              <tr>
           
              <th>ID</th>
                <th>First_Name</th>
                <th>Last_Name</th>
                <th>Email</th>
                <th>Phone_Number</th>
                <th>date_updated</th>
                <th>action</th>

              </tr>
            </thead>
            <tbody>
          
              {applicants.map((item,i) => (
                <tr key={item.id}>
                   
                   <td>{++i}</td>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
                  <td>{item.phone_number}</td>
                  <td>{item.date_updated}</td>
                  <td>
                  <Link className="button condensed new " to={`/edit-applicant/${item._id}`}>
                <i className="fa-solid fa-pen-to-square">edit</i></Link>
                 {/* &nbsp;&nbsp;&nbsp;&nbsp;
              <Link onClick = {() => { window.confirm('Are you sure you wish to delete this data?', )
                                     && onClickDelete(data._id)}}>
                <i className="fa-sharp fa-solid fa-trash" style={{color:'#f41032'}}></i>
              </Link>
              
               &nbsp;&nbsp;&nbsp;&nbsp;
              <Link to={`addCourse/${data._id}`}> 
              <Link className='button condensed new' to="/edit-applicant">
                <i className="fa-solid fa-plus" style={{color: '#1f5122'}}></i>
                <span className='tooltiptext'>edit-applicant</span>
              </Link>
                &nbsp;&nbsp;&nbsp;&nbsp;
              <Link to={`getDetail/${data._id}`}>
                <i className="fa-sharp fa-solid fa-circle-info"></i>
              </Link>  */}
             </td>
                  
                </tr>
              ))}
           </tbody>
          </table>
        </div>
      )
              
    

console.log(applicants)

 

}
export default ViewApp;