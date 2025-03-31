import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Dashboard = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch("/api/user");
                const data = await response.json();
                setUser(data);
            } catch (error) {
                console.error("Error fetching user:", error);
            }
        };
        fetchUser();
    }, []);

    return (
        <div style={{ backgroundColor: "rgb(118, 23, 134)", color: "orange", minHeight: "100vh", padding: "0px" }}>
            <header style={{ backgroundColor: "rgb(233, 172, 230)", color: "purple" }} className="p-4 fs-1 mb-5 text-center fw-bold fs-3 shadow-lg mb-0">
                <span className="fs-3">SkillHunt</span>
            </header>

            <div className="container">
                <h2 className="fw-bold fs-1 text-center text-white mt-5">Learn, Grow, Succeed!</h2>
                <p className="lead fs-5 text-white mt-4 text-center">
                    Choose your language and dive into the MCQ challenge!
                </p>
            </div>

            <div className="container mt-5">
                <div className="row justify-content-center">
                    {[
                        { name: "Python", image: "/images/pythonlogo.png" },
                        { name: "JavaScript", image: "/images/jslogo.png" },
                        { name: "Java", image: "/images/javalogo.png" },
                        { name: "C", image: "/images/clogo.png" }
                    ].map((lang, index) => (
                        <div key={index} className="col-md-3 mb-4">
                            <div className="card shadow-lg text-center">
                                <img src={lang.image} className="card-img-top" alt={lang.name} style={{ height: "180px", objectFit: "cover" }} />
                                <div className="card-body">
                                    <h5 className="card-title">{lang.name}</h5>
                                    <p className="card-text">Start learning {lang.name} with interactive quizzes.</p>
                                    <button className="btn btn-primary" onClick={() => navigate(`/quiz/${lang.name.toLowerCase()}`)}>Start Learning</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
    
};

export default Dashboard;
