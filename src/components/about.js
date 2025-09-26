import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MdDashboard, MdHome } from 'react-icons/md';
import { FiLogOut } from 'react-icons/fi';

const About = () => {
  const navigate = useNavigate();

  return (
    <div
      className="d-flex flex-column"
      style={{
        minHeight: '100vh',
        backgroundColor: 'rgba(30, 8, 73, 1)',
        color: 'orange',
      }}
    >
      <header
        style={{
          backgroundColor: 'rgba(231, 222, 231, 1)',
          color: 'black',
        }}
        className="p-4 text-center fw-bold shadow-lg mb-5 position-relative"
      >
        <span className="fs-3">SkillHunt</span>

        <button
          onClick={() => navigate('/dashboard')}
          style={{
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            position: 'absolute',
            top: '25px',
            left: '20px',
            color: 'black',
          }}
          title="Dashboard"
        >
          <MdDashboard size={28} />
        </button>

        <button
          onClick={() => navigate('/home')}
          style={{
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            position: 'absolute',
            top: '25px',
            left: '70px',
            color: 'black',
          }}
          title="Home"
        >
          <MdHome size={28} />
        </button>

        <button
          onClick={() => {
            if (window.confirm('Are you sure you want to logout?')) {
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
            color: 'black',
          }}
          title="Logout"
        >
          <FiLogOut size={28} />
        </button>
      </header>

      {/* About Content */}
      <div className="container my-5">
        {/* <h2 className="fw-bold fs-1 text-center text-white">Welcome to SkillHunt</h2>
        <p
          style={{ fontFamily: 'Times New Roman' }}
          className="lead fs-5 text-white mt-4 text-center"
        >
          SkillHunt is a MERN-based quiz platform designed to help students and tech enthusiasts improve their programming and problem-solving skills.
        </p> */}

        {/* Sections */}
        <div className="mt-5 text-white fs-5">
          <section className="mb-4">
            <h4 className="fw-bold" style={{color:'yellow'}}>What is SkillHunt?</h4>
            <hr className="border-light" />
            <p>
              SkillHunt is an interactive quiz application built using the MERN stack (MongoDB, Express, React, Node.js). It allows users to practice quizzes on various programming languages and topics.
            </p>
          </section>

          <section className="mb-4">
            <h4 className="fw-bold"style={{color:'yellow'}}>Why we built this app?</h4>
            <hr className="border-light" />
            <p>
              We wanted to create a fun and efficient way for students to strengthen their coding knowledge while preparing for competitive exams, interviews, and placements. This platform gives real-time feedback, helping users learn from their mistakes.
            </p>
          </section>

          <section className="mb-4">
            <h4 className="fw-bold"style={{color:'yellow'}}>Who can use it?</h4>
            <hr className="border-light" />
            <p>
              This app is perfect for students, beginners in programming, and anyone who loves solving coding problems. Whether you want to revise concepts, test yourself before exams, or just have fun with quizzes, SkillHunt is for you!
            </p>
          </section>

          <section className="mb-4">
            <h4 className="fw-bold"style={{color:'yellow'}}>Tech Behind SkillHunt</h4>
            <hr className="border-light" />
            <p>
              Built with the powerful MERN stack, SkillHunt ensures smooth performance, scalability, and a user-friendly interface. We use React for the frontend, Node.js & Express for backend APIs, and MongoDB for secure data storage.
            </p>
          </section>

          <p className="text-center fw-boldmt-4 fs-5" style={{color:"pink"}}>
            Learn, Practice, and Grow with 💛 SkillHunt!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
