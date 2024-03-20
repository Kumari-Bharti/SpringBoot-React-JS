import React, {useEffect,useState} from 'react'
import { listEmployees } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'
const ListOfEmpComponents = () => {
    const [employe,setEmployees] = useState([])

    const navigator = useNavigate();
    useEffect(() =>{
        listEmployees().then((response)=>{
            setEmployees(response.data);
        }).catch(error =>{
            console.error(error);
        })

    },[])

    function addNewEmployee(){
        navigator('/add-employee')
    }
  return (
    <div className='container'>
        <h1 className='text-center'>List of Employee</h1>
        <button className='btn btn-primary mb-2' onClick={addNewEmployee}>Add Employee</button>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>EmpId</th>
                    <th>firstName</th>
                    <th>lastName</th>
                    <th>email</th>
                </tr>
            </thead>
            <tbody>
                {
                    employe.map(user =>
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.firstName}</td>  
                            <td>{user.lastName}</td>
                            <td>{user.email}</td>
                        </tr>)
                }
                
            </tbody>
        </table>
    </div>
  )
}

export default ListOfEmpComponents