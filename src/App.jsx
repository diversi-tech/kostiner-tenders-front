import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Component_example from './Components/component_example'
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import { Button } from '@mui/material'
import singleton from './Logic/AuthService'
import axios from 'axios'
import GoogleAuthOld from './Components/GoogleAuth-old'
import CreditCard from './Components/CreditCard'
// import CreditCards from './Components/CreditCard'
import GGG from './Components/ggg'
function App() {
  function btn()
  {
   const res= axios.get('http://127.0.0.1:5000/')
 console.log("btn",res);
  }
  
  return (
    <>
     {/* <Component_example/> */}
     <Login></Login>
      <SignUp/>
      
    {/* <Button class="btn" onClick={btn}>goooooooooogle</Button>*/}
     
    {/* <GoogleAuthOld></GoogleAuthOld>*/}

<p>----------------------------------------------</p>
<br></br>


<CreditCard></CreditCard>

<p>***************************</p>
   
   <GGG></GGG>
   
         </>
  )
}

export default App
