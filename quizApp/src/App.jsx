import { useState } from 'react';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Quiz from './Components/Quiz';
import { quizzes } from './data/quizzes';

const App = () => {
  const [user, setUser] = useState(null);
  const [selectedQuiz, setSelectedQuiz] = useState(null);

  const handleQuizSelection = (quiz) => {
    setSelectedQuiz(quiz);
  };

  const handleBackToHome = () => {
    setSelectedQuiz(null);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center bg-gray-100 p-4">
      {!user ? (
        <div className="flex flex-col md:flex-row justify-around mx-auto space-y-4 md:space-y-0 md:space-x-4">
          <Login onLogin={setUser} />
          <Signup onSignup={setUser} />
        </div>
      ) : selectedQuiz ? (
        <Quiz quiz={selectedQuiz} onBackToHome={handleBackToHome} />
      ) : (
        <div className="flex items-center justify-center flex-grow">
          <div className="w-full max-w-2xl p-8 space-y-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold text-center">Select a Quiz</h2>
            <ul className="space-y-4">
              {quizzes.map((quiz, index) => (
                <li key={index} className="flex justify-between p-4 bg-gray-200 rounded-lg">
                  <span>{quiz.title}</span>
                  <button
                    onClick={() => handleQuizSelection(quiz)}
                    className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
                  >
                    Start Quiz
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
