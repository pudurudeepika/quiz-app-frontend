import { useState } from "react";
import { loginUser} from "../services/api";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
// import { BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';

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
            navigate("/home");
        } catch (error) {
            const msg = error?.response?.data?.message || "Login failed!";
            alert(msg);
        }
    };

    return (
        <div style={{backgroundImage: `url("/images/background.jpg")`,backgroundSize: "cover",backgroundPosition: "center",backgroundRepeat: "no-repeat", color: "orange", minHeight: "100vh", padding: "0px" }}>
            <header style={{ backgroundColor: "rgba(236, 233, 241, 1)", color: "purple"}} className="p-4 fs-1 mb-5 text-center fw-bold fs-3 shadow-lg mb-0">
                <span className="fs-3" style={{color:'black'}}>SkillHunt</span>
                
            </header>          
        <div className="card p-5 shadow-lg" style={{ width: '520px',marginTop:'200px',marginLeft:'auto',marginRight:'150px',height: '440px', }}>
                <h2 className="text-center mb-4">Login</h2>
                <form onSubmit={handleSubmit}>
                    
                    <div className="mb-4">
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
                    <button type="submit" className="btn btn-primary w-100 fw-bold mb-3" >Login</button>
                    <Link to="/signup">Don't have an account? Signup</Link>
                </form>
            </div>
            </div>
    );
};


export default Login;