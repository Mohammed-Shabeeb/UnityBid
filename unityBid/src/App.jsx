import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';
import NavFromWelcome from './components/NavFromWelcome';
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<NavFromWelcome />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
