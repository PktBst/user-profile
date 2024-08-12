import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import UserProfile from './components/UserProfile';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/user/:id" element={<UserProfile/>}/>
        </Routes>
      </div>
    </Router>
  )

}

export default App;
