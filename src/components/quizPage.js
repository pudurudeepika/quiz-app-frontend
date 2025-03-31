import { useParams, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsArrowLeft } from "react-icons/bs";
const QuizPage = () => {
    const { language } = useParams();
    const navigate = useNavigate();

    const startQuiz = () => {
        navigate(`/quiz/test/${language}`); // Navigate to test page
    };

    return (
        <div style={{ backgroundColor: "rgb(118, 23, 134)", color: "orange", minHeight: "100vh", padding: "0px" }}>
            <header style={{ backgroundColor: "rgb(233, 172, 230)", color: "purple" }} className="p-4 fs-1 mb-5 text-center fw-bold shadow-lg mb-0">
                <span className="fs-3">SkillHunt</span>
                <button className="btn btn-light mb-3 d-flex align-items-center btn-outline-dark" onClick={() => navigate('/')}>
                            <BsArrowLeft className="me-2" /> Back to Home
                        </button>
            </header>

            <div>
                <h1 className="text-white text-center fs-2 fw-bold">
                    Welcome to the SkillHunt MCQ Challenge!!
                </h1>
                <p className="m-5 text-center text-white fs-5">
                    This page will contain the MCQ test for <strong>{language}</strong>.
                </p>

                <div className="shadow-lg text-white" style={{
                    backgroundColor: "rgb(69, 20, 84)",
                    borderRadius: "40px",
                    margin: "0 auto",
                    padding: "20px",
                    width: "600px",
                    height: "auto"
                }}>
                    <h2 className="m-4 fs-4">Quiz Instructions:</h2>
                    <ul className="m-4 p-2">
                        <li className="mt-3">This quiz consists of <strong>20 multiple-choice questions</strong> designed to test your understanding of <strong>{language}</strong>.</li>
                        <li>Each question carries <strong>1 mark</strong>.</li>
                        <li>There is <strong>no negative marking</strong>, so feel free to attempt all questions.</li>
                        <li>Once you submit, you will receive your final score immediately.</li>
                    </ul>
                    
                    <div className="text-center mt-4">
                        <button className="btn btn-success p-2 fw-bold" onClick={startQuiz}>
                            Start Test
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuizPage;
