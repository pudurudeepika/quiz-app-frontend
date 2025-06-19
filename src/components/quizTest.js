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
    axios.get(`http://localhost:5000/api/quizzes/${language}`)
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
      await axios.post('http://localhost:5000/api/results', resultData);
    } catch (error) {
      console.error("Failed to save result:", error);
    }
  };

  if (loading) return <p className="text-center text-white mt-5">Loading Questions...</p>;

  return (
    <div style={{ backgroundColor: "rgb(118, 23, 134)", color: "orange", minHeight: "100vh", padding: "0px" }}>
      <header style={{ backgroundColor: "rgb(233, 172, 230)", color: "purple" }} className="p-4 fs-1 mb-5 text-center fw-bold shadow-lg">
        <span className="fs-3">SkillHunt</span>
        <button className="btn btn-light mb-3 d-flex align-items-center btn-outline-dark" onClick={() => navigate('/home')}>
          <BsArrowLeft className="me-2" /> Back to Home
        </button>
      </header>

      <h2 className="text-center fw-bold text-white m-5">Quiz for {language}</h2>

      {!showResult ? (
        <div className="rounded-5 text-white p-5 fs-5 shadow-lg justify-content-center"
             style={{ backgroundColor: "rgb(56, 15, 63)", margin: "0 auto", width: "700px" }}>
          <h5 className="fw-bold fs-3">{currentQuestionIndex + 1}. {questions[currentQuestionIndex].question}</h5>

          {questions[currentQuestionIndex].options.map((option, index) => (
            <div key={index} className="form-check p-1 m-3">
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
              onClick={() => setCurrentQuestionIndex(currentQuestionIndex - 1)}
              disabled={currentQuestionIndex === 0}
            >
              Previous
            </button>

            {currentQuestionIndex === questions.length - 1 ? (
              <button className="btn btn-success" onClick={calculateScore}>
                Submit
              </button>
            ) : (
              <button
                className="btn btn-primary"
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
          <button className="btn btn-primary mt-3" onClick={() => navigate("/home")}>Go to Home</button>
        </div>
      )}
    </div>
  );
};

export default QuizTest;
