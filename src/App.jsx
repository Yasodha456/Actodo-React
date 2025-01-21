import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import Landing from './pages/Landing.jsx'

function App()
{
  const [users, setusers] = useState([
    {
        username: "yaso",
        password: "789"
    }
])
  return(
    <>
  <BrowserRouter>
  
  <Routes>
   <Route path={"/login"} element={<Login users={users} setusers={setusers}/>}></Route>
   <Route path={"/signup"} element={<Signup users={users} setusers={setusers}/>}></Route>
   <Route path={"/landing"} element={<Landing/>}></Route>
   <Route path="*" element={<div>Page Not Found</div>}></Route>
   </Routes>
  </BrowserRouter>
 
  </>
  )
}

export default App
