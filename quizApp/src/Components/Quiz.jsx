import React, { useState, useEffect } from 'react';

const Quiz = ({ quiz, onBackToHome }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState('');
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(60);
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [randomQuestions, setRandomQuestions] = useState([]);

    useEffect(() => {
        // Select 5 random questions from the quiz
        const shuffledQuestions = [...quiz.questions].sort(() => 0.5 - Math.random());
        const selectedQuestions = shuffledQuestions.slice(0, 5);
        setRandomQuestions(selectedQuestions);
        console.log("Selected random questions:", selectedQuestions);
    }, [quiz.questions]);

    useEffect(() => {
        if (timeLeft === 0) {
            handleNext();
        }
        const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
        return () => clearTimeout(timerId);
    }, [timeLeft]);

    const handleOptionChange = (option) => {
        setSelectedOption(option);
    };

    const handleNext = () => {
        if (randomQuestions[currentQuestionIndex].answer === selectedOption) {
            setScore(prevScore => prevScore + 1);
        }

        if (currentQuestionIndex + 1 < randomQuestions.length) {
            setCurrentQuestionIndex(prevIndex => prevIndex + 1);
            setSelectedOption('');
            setTimeLeft(60);
        } else {
            setQuizCompleted(true);
        }
    };

    if (quizCompleted) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
                <div className="w-full max-w-2xl p-8 space-y-6 bg-white shadow-md rounded-lg">
                    <h2 className="text-2xl font-bold text-center">Quiz Completed</h2>
                    <div className="text-center">Your final score is: {score}</div>
                    <button
                        className="w-full py-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600"
                        onClick={onBackToHome}
                    >
                        Go to Home
                    </button>
                </div>
            </div>
        );
    }

    if (randomQuestions.length === 0) {
        return <div>Loading...</div>;
    }

    const currentQuestion = randomQuestions[currentQuestionIndex];

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="w-full max-w-2xl p-8 space-y-6 bg-white shadow-md rounded-lg">
                <h2 className="text-2xl font-bold text-center">{quiz.title}</h2>
                <div className="text-center">Time left: {timeLeft} seconds</div>
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            {currentQuestion.question}
                        </label>
                        {currentQuestion.options.map((option, index) => (
                            <label key={index} className="flex items-center cursor-pointer">
                                <input
                                    type="radio"
                                    value={option}
                                    checked={selectedOption === option}
                                    onChange={() => handleOptionChange(option)}
                                    className="mr-2"
                                    required
                                />
                                <span>{option}</span>
                            </label>
                        ))}
                    </div>
                    <button
                        type="button"
                        className="w-full py-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600"
                        onClick={handleNext}
                    >
                        {currentQuestionIndex + 1 < randomQuestions.length ? 'Next' : 'Submit'}
                    </button>
                </form>
                <div className="text-center">Score: {score}</div>
                <button
                    className="w-full py-2 mt-4 text-white bg-gray-500 rounded-md hover:bg-gray-600"
                    onClick={onBackToHome}
                >
                    Back to Home
                </button>
            </div>
        </div>
    );
};

export default Quiz;
