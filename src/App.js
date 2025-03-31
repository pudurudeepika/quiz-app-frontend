// src/App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/signup';
import Login from './components/login';
import Home from './components/home';  
import Dashboard from './components/dashboard';  
import Quiz from './components/quiz';
import QuizTest from './components/quizTest';
import { Navigate } from "react-router-dom";
function App() {
    return (
        <Router>
            <Routes>
                {}
                <Route path="/quiz/:language" element={<QuizTest />} />
                <Route path='/quiz' element={<Quiz />}/>
                <Route path="/" element={<Home />} /> 
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />  
            </Routes>
        </Router>
    );
}

export default App;
