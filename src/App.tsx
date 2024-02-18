import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <>
   <Navbar /> 
<div className="bg-blue-100">
      <main className="container mx-auto my-6">
        <h1 className="text-3xl font-bold text-blue-900 mb-4">Welcome to Maxx Website Builder</h1>
        <p className="text-blue-800">Build your dream website with ease using Maxx Website Builder. Our intuitive drag-and-drop interface makes it simple for anyone to create stunning websites without any coding knowledge.</p>
        <p className="text-blue-800 mt-4">Get started today and unleash your creativity!</p>
      </main>
    </div>
   <Footer/>
    </>
  )
}

export default App
