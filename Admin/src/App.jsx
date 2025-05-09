import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Approvel from './compoenets/Approvelemployee'
import ProductApproval from './compoenets/Productapprovel'
import Sidebar from './Pages/Sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <BrowserRouter>
   <Routes>
    {/* <Route path='/Approveseller' element={<Approvel/>}/>
    <Route path='/productapprovel' element={<ProductApproval/>}/> */}
    <Route path='/' element={<Sidebar/>}/>

   </Routes>
   </BrowserRouter>
   </>
  )
}

export default App
