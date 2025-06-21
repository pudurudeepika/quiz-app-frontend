import React, { useState, useEffect } from 'react';

const Quiz = () => {
    const [quizzes, setQuizzes] = useState([]); 
    const [selectedLanguage, setSelectedLanguage] = useState(""); 

    useEffect(() => {
        fetch("https://quiz-app-backend-8hp3.onrender.com/api/quizzes/bulk")
            .then(response => response.json())
            .then(data => setQuizzes(data))  
            .catch(error => console.error("Error fetching questions:", error));
    }, []);

    const filteredQuizzes = quizzes.filter(quiz => quiz.language === selectedLanguage);

    return (
        <div className="container mt-5">
            <h2 className="text-center">Programming Quiz</h2>

            <select className="form-select my-3" onChange={(e) => setSelectedLanguage(e.target.value)}>
                <option value="">Select a Language</option> 
                <option value="Python">Python</option>
                <option value="JavaScript">JavaScript</option>
                <option value="Java">Java</option>
                <option value="C">C Language</option>
            </select>

            {filteredQuizzes.length > 0 ? (
                filteredQuizzes.map((quiz, index) => (
                    <div key={index} className="card my-3 p-3">
                        <h5>{quiz.question}</h5>
                        {quiz.options.map((option, i) => (
                            <div key={i}>
                                <input type="radio" name={`quiz-${index}`} id={`option-${index}-${i}`} value={option} />
                                <label className="ms-2" htmlFor={`option-${index}-${i}`}>{option}</label>
                            </div>
                        ))}
                    </div>
                ))
            ) : (
                <p className="text-center text-danger">No questions available for {selectedLanguage}.</p> 
            )}
        </div>
    );
};

export default Quiz;
