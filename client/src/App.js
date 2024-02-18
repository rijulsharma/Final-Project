import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthForm from './scenes/AuthForm';
import Home from './scenes/Home';
import Board from './components/Board';
import Settings from './components/Settings';
import Analytics from './components/Analytics';
function App() {
  return (
    <Router>
      <Routes> 
        <Route exact path="/" element={<Home path={'/'}/>} />
        <Route exact path="/login" element={<AuthForm path={'/login'}/>} />
        <Route exact path="/register" element={<AuthForm path={'/register'}/>} />
        <Route path="/board" element={<Home path={'/board'}/>} />
        <Route path="/settings" element={<Home path={'/settings'}/>} />
        <Route path="/analytics" element={<Home path={'/analytics'}/>} />
      </Routes>
    </Router>
  );
}

export default App;
