import React from 'react'
import ReactDOM from 'react-dom'
import Navbar from './Navbar'
import 'tachyons'
import NewComponent from './NewComponent'
import Quote from './Quote'
import Courses from './Courses'
import './App.css'
import Example from './Example'
import Instructor from './Instructor'





const App = () =>{
  return(

    <div className='tc'>

      <Navbar />
      <NewComponent />
      <Quote />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <hr />
      <br />
      
      <Courses />
      <br />
      <br />
      

      <hr />
      
      

      
      <Example />
      <br />
      <h1>Meet the instructor</h1>
      

      


      

      




      
      
      
      





    </div>
  )
}

export default App;










