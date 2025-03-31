import { useState } from "react";
import { loginUser } from "../services/api";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsArrowLeft } from 'react-icons/bs';

const Login = () => {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await loginUser(formData);
            localStorage.setItem("token", data.token);
            navigate("/dashboard");
        } catch (error) {
            alert("Invalid Credentials!");
        }
    };

    return (
        <div style={{ backgroundColor: "rgb(118, 23, 134)", color: "orange", minHeight: "100vh", padding: "0px" }}>
            <header style={{ backgroundColor: "rgb(233, 172, 230)", color: "purple"}} className="p-4 fs-1 mb-5 text-center fw-bold fs-3 shadow-lg mb-0">
                <span className="fs-3">SkillHunt</span>
                <button className="btn btn-light mb-3 d-flex align-items-center btn-outline-dark" onClick={() => navigate('/')}>
                            <BsArrowLeft className="me-2" /> Back to Home
                </button>
            </header>          
        <div className="card p-5 shadow-lg " style={{ width: '490px',  margin: "0 auto", height: '400px' }}>
                <h2 className="text-center mb-4">Login</h2>
                <form onSubmit={handleSubmit}>
                    
                    <div className="mb-3">
                        <input 
                            type="email" 
                            name="email" 
                            className="form-control" 
                            placeholder="Email" 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    <div className="mb-3">
                        <input 
                            type="password" 
                            name="password" 
                            className="form-control" 
                            placeholder="Password" 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100 fw-bold" >Login</button>
                    <a href='/signup' >Don't have an account? Signup</a>
                </form>
            </div>
            </div>
    );
};

export default Login;
