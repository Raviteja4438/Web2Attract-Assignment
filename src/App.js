import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './components/Header'
import LivingRoomDesigns from './components/LivingRoomDesigns'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<LivingRoomDesigns />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App;

