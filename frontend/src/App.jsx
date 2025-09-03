import React from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
import Home from './pages/home.jsx'
import Projects from './pages/projects.jsx'
import Contact from './pages/contact.jsx'
import Error from './pages/error.jsx'
import Layout from './pages/layout.jsx'

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  )
}

export default App



