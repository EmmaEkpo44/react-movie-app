import React from 'react'
import TestEffect from './components/TestEffect'
import MovieApi from './components/MovieApi'
import Practice from './components/Practice'
import { useState } from 'react'
import bootstrap from 'bootstrap'

function App() {
    
  // const name = "Emmanuel Richard Ekpo"
  // const age = 19

  const [numb, setnumb] = useState(0)

  const increment = ()=>{
        
    
    let c = Math.floor(Math.random()*10)
    setnumb(c)

  }
  return (
    <>
      {/* <TestEffect/> */}
      <MovieApi/>
      {/* <Practice/> */}
      {/* {age >70?<h1>Hello Granda</h1>:<h1>Hello Damilare</h1>  }
        <h1>Welcome {name}</h1>
        <p>I am {Math.floor(Math.random()*100)} years old</p> 
   */}
    {/* {numb >5 ?<h3 className='text-danger'>Big Number</h3>:<h3 className='text-primary'>Small Number</h3>}
    <h1>The Number is {numb}</h1>
    <button  onClick={()=>increment()}>Increment</button> */}
      
    </>
  )
}

export default App