import React, { useState } from 'react'
import { createEmployee } from '../services/EmployeeService'
import {useNavigate} from 'react-router-dom';
const EmployeeComponent = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')

  const [errors, setErrors] = useState({
    firstName:'',
    lastName:'',
    email:''

  })
   
  const navigator = useNavigate();
  function saveEmployee(e){
    e.preventDefault();

    if(validateForm){
      const employee = {firstName, lastName, email}
      console.log(employee)
  
      createEmployee(employee).then((response) => {
        console.log(response.data);
        navigator('/')
      })
    }
  }
  function validateForm(){
    let valid = true;

    const errorsCopy = {...errors}
  
    if(firstName.trim()){
      errorsCopy.firstName = '';
    } else {
      errorsCopy.firstName = 'First name is required';
      valid = false;
    }
    if(lastName.trim()){
      errorsCopy.lastName = '';
    } else {
      errorsCopy.lastName = 'Last name is required';
      valid = false;
    }
    if(email.trim()){
      errorsCopy.email = '';
    } else {
      errorsCopy.email = 'Email is required';
      valid = false;
    }
    setErrors(errorsCopy);
    return valid;
  }
  
  
  return (
    <div className='container'>
      <br /> <br />
      <div className='row'>
        <div className='card col-md-6 offset-md-3 offset-md-3'>
          <h2 className='text-center'>Add Employee</h2>
          <div className='card-body'>
          <form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputfirstname">First Name</label>
      <input type="firstname" className={`form-control ${errors.firstName ? 'is-invalid' : ''}`} id="inputFirstName"  value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" />
      
    </div>
    <div class="form-group col-md-6">
      <label for="inputlastname">Last Name</label>
      <input type="lastname" id="inputLastName" placeholder="Last Name" value={lastName} className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}  onChange={(e) => setLastName(e.target.value)} />
      </div>
  </div>
  <div class="form-group col-md-6">
    <label for="inputemail">Email</label>
    <input type="email" className={`form-control ${errors.email ? 'is-invalid' : ''}`} id="inputEmail" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
    
  </div>
 
  
    
 <br></br>
  <button className='btn btn-success' onClick={saveEmployee} >Submit</button>
</form>
          </div>
        </div>
      </div>
    </div>
   
  )
    

}

export default EmployeeComponent