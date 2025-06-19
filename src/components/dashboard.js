import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {MdHome} from 'react-icons/md';
import { FiLogOut } from 'react-icons/fi';

const Dashboard = () => {
  const navigate = useNavigate();
  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     try {
  //       const response = await fetch("/api/user");
  //       const data = await response.json();
  //       setUser(data);
  //     } catch (error) {
  //       console.error("Error fetching user:", error);
  //     }
  //   };
  //   fetchUser();
  // }, []);

  return (
    <div style={{ backgroundColor: "rgb(118, 23, 134)", color: "orange", minHeight: "100vh", padding: "0px" }}>
      <header style={{ backgroundColor: "rgb(233, 172, 230)", color: "purple" }} className="p-4 fs-1 mb-5 text-center fw-bold fs-3 shadow-lg mb-0">
        <span className="fs-3">SkillHunt - Dashboard</span>
        <div className='d-flex justify-content-start'>
                    <button onClick={() => navigate('/home')} 
                    style={{
                            background: 'transparent',
                            border: 'none',
                            cursor: 'pointer',
                            position: 'absolute',
                            top: '25px',
                            left: '20px',
                            color: 'purple'
                        }}title="Dashboard"> 
                        < MdHome size={28}/>
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

      <div className="container">
        <h2 className="fw-bold fs-1 text-center text-white mt-5">Learn, Grow, Succeed!</h2>
        <p className="lead fs-5 text-white mt-4 text-center">
          Choose your language and dive into the MCQ challenge!
        </p>
      </div>

      <div className="container mt-5">
        <div className="row justify-content-center">
          {["Python", "JavaScript", "Java", "C", "C++", "HTML", "CSS", "React.js"].map((lang, index) => (
            <div key={index} className="col-md-3 mb-4">
              <div className="card shadow-lg text-center p-3" style={{backgroundColor: "lavender"}}>
                <div className="card-body" >
                  <h5 className="card-title">{lang}</h5>
                  <p className="card-text">Start learning {lang} with interactive quizzes.</p>
                  <button className="btn btn-primary" onClick={() => navigate(`/quiz/${lang.toLowerCase()}`)}>
                    Start Learning
                  </button>
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
