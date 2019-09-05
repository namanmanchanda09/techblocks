import React from 'react'
import ReactDOM from 'react-dom'
import Navbar from './Navbar'
import 'tachyons'
import NewComponent from './NewComponent'
import Quote from './Quote'






const App = () =>{
  return(

    <div className='tc'>
      <Navbar />
      <Quote />
      <NewComponent />



    </div>
  )
}

export default App;








