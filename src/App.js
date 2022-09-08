import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import NavBar from './NavBar';
import CreateBlog from './pages/CreateBlog';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  const [isAuth, setIsAuth] = useState(false)
  return (
    <Router>
      <NavBar isAuth={isAuth} setIsAuth={setIsAuth} />
      <Routes>
        <Route path="/" element={<Home isAuth={isAuth} />} />
        <Route path='/login' element={<Login setIsAuth={setIsAuth} />} />
        <Route path='/createpost' element={<CreateBlog isAuth={isAuth} />} />
      </Routes>
    </Router>
  );
}

export default App;
