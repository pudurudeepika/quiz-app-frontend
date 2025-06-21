import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Signup from './components/signup';
import Login from './components/login';
import Home from './components/home';  
import Dashboard from './components/dashboard';  
import Quiz from './components/quiz';
import QuizTest from './components/quizTest';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/quiz/:language" element={<QuizTest />} />
                <Route path='/quiz' element={<Quiz />}/>
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                {/* <Route path="/dashboard" element={<Dashboard />} />  */}
                <Route path="/"  element={<Navigate to="/login" replace />} /> 
                <Route path="/home" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </Router>
    );
}

export default App;
