# Quiz App

## Overview

Quiz App is a web-based application that allows users to select and take quizzes on various topics. The app provides a user-friendly interface with timed questions and a scoring system. Users can log in or sign up to access the quizzes and view their scores upon completion.

## Features

- User Authentication: Users can log in or sign up to access the quizzes.
- Quiz Selection: Users can select from a list of available quizzes.
- Timed Questions: Each question has a time limit of 60 seconds.
- Random Questions: Each quiz presents 5 random questions from a pool of questions.
- Scoring System: Users receive a score based on their correct answers.
- Responsive Design: The app is responsive and works on various screen sizes.

## Technologies Used

- React.js: For building the user interface.
- Tailwind CSS: For styling the components.
- JavaScript: For logic and functionality.

## Installation

1. **Clone the Repository**
    ```bash
    git clone https://github.com/your-username/quiz-app.git
    cd quiz-app
    ```

2. **Install Dependencies**
    ```bash
    npm install
    ```

3. **Start the Application**
    ```bash
    npm start
    ```

4. Open your browser and go to `http://localhost:3000`

## File Structure

quiz-app/
├── public/
│ ├── index.html
├── src/
│ ├── Components/
│ │ ├── Login.jsx
│ │ ├── Signup.jsx
│ │ ├── Quiz.jsx
│ ├── data/
│ │ ├── quizzes.js
│ ├── App.jsx
│ ├── index.js
├── package.json
├── README.md


## Usage

1. **Authentication**
   - Users can log in or sign up on the home page.

2. **Quiz Selection**
   - After logging in, users can select a quiz from the available list.

3. **Taking a Quiz**
   - Once a quiz is selected, users will be presented with questions one by one, each with a 60-second timer.
   - Users can select an answer by clicking on the option text or the radio button.
   - After answering a question, click 'Next' to proceed to the next question.

4. **Quiz Completion**
   - Upon completing the quiz, users will see their final score.
   - Users can return to the home page to select another quiz.

## Example Data (quizzes.js)

```javascript
export const quizzes = [
    {
        title: 'General Knowledge',
        questions: [
            // Add more questions as needed
            {
                question: 'What is the capital of France?',
                options: ['Paris', 'Berlin', 'Madrid', 'Rome'],
                answer: 'Paris',
            },
            {
                question: 'Who wrote "To Kill a Mockingbird"?',
                options: ['Harper Lee', 'J.K. Rowling', 'Ernest Hemingway', 'Mark Twain'],
                answer: 'Harper Lee',
            },
            // More questions...
        ],
    },
    {
        title: 'Science',
        questions: [
            {
                question: 'What is the chemical symbol for water?',
                options: ['O2', 'H2O', 'CO2', 'NaCl'],
                answer: 'H2O',
            },
            {
                question: 'What planet is known as the Red Planet?',
                options: ['Mars', 'Venus', 'Jupiter', 'Saturn'],
                answer: 'Mars',
            },
            // More questions...
        ],
    },
    // More quiz categories...
];
