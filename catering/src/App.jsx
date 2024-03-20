import { useState } from 'react'
import './App.css'
// import HelloWorld from './HelloWorld'
// import HelloWorldtest from './HelloWorld'
import ListOfEmpComponents from './components/ListOfEmpComponents'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import EmployeeComponent from './components/EmployeeComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <HeaderComponent />
    <Routes>
      {/* http://localhost:4000 */}
      <Route path='/' element = {<ListOfEmpComponents />}></Route>
      {/* // http://localhost:3000/employe */}
      {/* <Route path='/employe' element = { <ListOfEmpComponents />}></Route> */}
       {/* // http://localhost:3000/add-employee */}
      <Route path='/add-employee' element={ <EmployeeComponent />}></Route>

        </Routes> 
        <FooterComponent />  
        </BrowserRouter> 
    </>
        
  )
}
export default App
