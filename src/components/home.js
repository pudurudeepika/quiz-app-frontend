import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MdDashboard } from 'react-icons/md';
import { FiLogOut } from 'react-icons/fi';

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className="d-flex flex-column" style={{ minHeight: "100vh", backgroundColor: "rgb(118, 23, 134)", color: "orange" }}>
        <header style={{ backgroundColor: "rgb(233, 172, 230)", color: "purple" }} className="p-4 fs-1 mb-5 text-center fw-bold fs-3 shadow-lg mb-0">
        <span className="fs-3">SkillHunt</span>
        {/* <div className='d-flex justify-content-start'>
            <a href="/signup" className="btn btn-light btn-outline-dark btn-sm p-2 fw-bold">Signup</a>
            <a href="/login" className="btn btn-light btn-outline-dark btn-sm mx-2 p-2 fw-bold">Login</a>
        </div> */}
        <div className='d-flex justify-content-start'>
            <button onClick={() => navigate('/dashboard')} 
            style={{
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    position: 'absolute',
                    top: '25px',
                    left: '20px',
                    color: 'purple'
                }}title="Dashboard"> 
                < MdDashboard size={28}/>
            </button>
            <button
                onClick={() => {
                    if (window.confirm("Are you sure you want to logout?")) {
                        localStorage.clear();
                        navigate('/login');
                    }
                }}
                style={{
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    position: 'absolute',
                    top: '25px',
                    right: '20px',
                    color: 'purple'
                }}
                title="Logout"
                >
                <FiLogOut size={28} />
                </button>
        </div>

        </header>

        <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <img
              src={process.env.PUBLIC_URL + "/images/banner.png"}
              alt="SkillHunt Banner"
              className="img-fluid rounded shadow"
              style={{ maxHeight: '400px', objectFit: 'cover', width: '100%' }}
            />
          </div>
        </div>
      </div>
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
