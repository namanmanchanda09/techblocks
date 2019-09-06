import React from 'react'
import 'tachyons'
import './Card.css'



const Card = () =>{
    return(
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            
            <img className='course' alt="nothing" src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1024px-Python-logo-notext.svg.png'></img>
                <h2>C++</h2>
                <p>Data structures and algorithms,<br /> 
                    Data structures and algorithms, <br />
                    Data structures and algorithms</p>
            
        </div>

    )
}

export default Card;