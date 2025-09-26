import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsArrowLeft } from 'react-icons/bs';

const QuizTest = () => {
  const { language } = useParams();
  const navigate = useNavigate();

  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    axios.get(`https://quiz-app-backend-8hp3.onrender.com/api/quizzes/${language}`)
      .then(response => {
        const shuffled = response.data.sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, 5);
        setQuestions(selected);
        setUserAnswers(Array(selected.length).fill(null));
        setLoading(false);
      })
      .catch(error => console.error("Error fetching questions:", error));
  }, [language]);

  const handleOptionSelect = (selectedOption) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestionIndex] = selectedOption;
    setUserAnswers(updatedAnswers);
  };

  const calculateScore = () => {
    let totalScore = 0;
    questions.forEach((q, index) => {
      if (userAnswers[index] === q.correctAnswer) {
        totalScore++;
      }
    });
    setScore(totalScore);
    setShowResult(true);
    saveResult(totalScore);
  };

  const saveResult = async (finalScore) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user?._id) {
      console.error("User not found in localStorage");
      return;
    }

    const resultData = {
      userId: user._id,
      language,
      score: finalScore,
      total: questions.length,
      timeTaken: 60, // Optional: Replace with actual timer if needed
    };

    try {
      await axios.post('https://quiz-app-backend-8hp3.onrender.com/api/results', resultData);
    } catch (error) {
      console.error("Failed to save result:", error);
    }
  };

  if (loading) return <p className="text-center text-white mt-5">Loading Questions...</p>;

  return (
    <div style={{ backgroundColor: "rgba(30, 8, 73, 1)", color: "orange", minHeight: "100vh", padding: "0px" }}>
      <header style={{ backgroundColor: "rgba(210, 203, 210, 1)", color: "black" }} className="p-4 fs-1 mb-3 text-center fw-bold fs-3 shadow-lg mb-0">
        <span className="fs-3">SkillHunt</span>
        <button className="btn btn-light mb-3 d-flex align-items-center btn-outline-dark" onClick={() => navigate('/dashboard')}>
          <BsArrowLeft className="me-2" /> Back to Dashboard
        </button>
      </header>

      <h2 className="text-center fw-bold text-white" style={{marginTop:'90px', marginBottom:'50px'}}>Quiz for {language}</h2>

      {!showResult ? (
        <div className="rounded-5 text-white p-5 fs-4 shadow-lg justify-content-center"
             style={{ backgroundColor: "rgba(122, 135, 173, 1)", margin: "0 auto", width: "700px" }}>
          <h5 className="fw-bold fs-3">{currentQuestionIndex + 1}. {questions[currentQuestionIndex].question}</h5>

          {questions[currentQuestionIndex].options.map((option, index) => (
            <div key={index} className="form-check p-1 m-3 fs-20px">
              <input
                className="form-check-input"
                type="radio"
                name={`question-${currentQuestionIndex}`}
                value={option}
                checked={userAnswers[currentQuestionIndex] === option}
                onChange={() => handleOptionSelect(option)}
              />
              <label className="form-check-label">{option}</label>
            </div>
          ))}

          <div className="d-flex justify-content-between mt-4">
            <button
              className="btn btn-warning"
              style={{ cursor: "pointer" }}
              onClick={() => setCurrentQuestionIndex(currentQuestionIndex - 1)}
              disabled={currentQuestionIndex === 0}
            >
              Previous
            </button>

            {currentQuestionIndex === questions.length - 1 ? (
              <button className="btn btn-success" 
              style={{ cursor: "pointer" }}
              onClick={calculateScore}>
                Submit
              </button>
            ) : (
              <button
                className="btn btn-primary p-3"
                style={{ cursor: "pointer" }}
                onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}
                disabled={userAnswers[currentQuestionIndex] === null}
              >
                Next
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="text-center mt-4 text-white">
          <h3>Your Score: {score} / {questions.length}</h3>
          <button className="btn btn-primary mt-3" onClick={() => navigate("/dashboard")}>Go to Home</button>
        </div>
      )}
    </div>
  );
};

export default QuizTest;
