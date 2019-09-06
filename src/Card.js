import React from 'react'
import 'tachyons'
import './Card.css'



const Card = () =>{
    return(
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            
            <img alt="nothing" src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png'></img>
                <h2>C++</h2>
                <p>Data structures and algorithms,<br /> 
                    Data structures and algorithms, <br />
                    Data structures and algorithms</p>
            
        </div>

    )
}

export default Card;