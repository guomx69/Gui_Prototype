import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import TestCalcite from "./pages/TestCalcite.jsx"
import TestMapComp from "./pages/TestMapComp.jsx"
import './assets/index.css'
import DataViewer from './pages/DataViewer.jsx'

function App() {
  return (
      <div>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dataview" element={<DataViewer />} />
          <Route path="/testCalcite" element={<TestCalcite />} />
          <Route path="/testMapComp" element={<TestMapComp />} />
          
          {/* Add other routes as needed */}
        </Routes>
      </div>
  )
}

export default App
