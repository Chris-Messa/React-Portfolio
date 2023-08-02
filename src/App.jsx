import { useState } from 'react'
import Header from './components/Header'
import About from './components/AboutMe'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './App.css'
import Nav from './components/Nav'

function App() {

  return (
    <div>
      <Nav />
<Header />
<About />
<Projects />
<footer>
<Contact />
</footer>
    </div>
  )
}

export default App
