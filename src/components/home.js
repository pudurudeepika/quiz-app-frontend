import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    const navigate = useNavigate();
    return (
        <div style={{ backgroundColor: "rgb(118, 23, 134)", color: "orange", minHeight: "100vh", padding: "0px" }}>
        <header style={{ backgroundColor: "rgb(233, 172, 230)", color: "purple" }} className="p-4 fs-1 mb-5 text-center fw-bold fs-3 shadow-lg mb-0">
        <span className="fs-3">SkillHunt</span>
        <div className='d-flex justify-content-start'>
            <a href="/signup" className="btn btn-light btn-outline-dark btn-sm p-2 fw-bold">Signup</a>
            <a href="/login" className="btn btn-light btn-outline-dark btn-sm mx-2 p-2 fw-bold">Login</a>
        </div>
        </header>
            <div style={{
                backgroundImage: "url('/public/images/photo.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                display: "flex",
                padding: "20px",
                height: "380px",
                width: "600px",
                justifyContent: "center",
                alignItems: "center",
                margin: "0 auto",
            }}
            ></div>
            <div className="container">
                <h2 className="fw-bold fs-1 text-center text-white mt-5">Welcome to SkillHunt</h2>
                <p style={{ fontFamily: 'Times New Roman' }} className="lead fs-5 text-white mt-4 text-center">
                    SkillHunt is a platform designed to enhance your skills through interactive learning and engaging challenges.
                </p>
            </div>
        </div>
    
    );
};

export default Home;
