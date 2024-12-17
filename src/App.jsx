import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Products from './pages/Products'
import Navbar from './components/Navbar'
import PageNotFound from './pages/PageNotFound'
import { Routes, Route } from 'react-router-dom'
const App = () => {
  return (
    <>
     {/* navbar component */}
      <Navbar />
      {/* Routing setup for the app */}
      <Routes> {/* it will ensure there is only one route that matches the path is rendered in ui*/}
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/products' element={<Products />} />
        <Route path='*' element={<PageNotFound />} />

      </Routes>
    </>
  )
}

export default App