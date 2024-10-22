import React from 'react'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
//import Login from './components/login'
import LoginPage from './components/login_new'
//import Signup from './components/signup'
import SignupForm from './components/signup_new'
import SignupYahoo from './components/singup_yahoo'
import MapLayout from './components/maplayout'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/layout" element={<MapLayout />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/yahoo" element={<SignupYahoo />} />
          {/* Add other routes as needed */}
        </Routes>
      </div>
    </Router>
  )
}

export default App
