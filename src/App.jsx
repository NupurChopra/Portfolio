import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import About from './pages/About'
import TechStacks from './pages/TechStacks'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full'>
      <Header/>
      <div className='w-full min-h-[85vh]'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/tech' element={<TechStacks/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
