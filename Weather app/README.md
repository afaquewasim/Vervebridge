# Weather Application

This is a simple React application that fetches and displays the current weather for a given location using the WeatherAPI.

## Features

- Fetches and displays current weather information for a specified location.
- Displays temperature, humidity, wind speed, and cloud cover.
- Responsive design that works well on both desktop and mobile devices.

## Technologies Used

- React
- Tailwind CSS
- WeatherAPI

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/weather-app.git
    cd weather-app
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file in the root directory and add your WeatherAPI key:
    ```plaintext
    WEATHER_API_KEY=your_api_key_here
    ```

4. Add `.env` to `.gitignore`:
    ```plaintext
    .env
    ```

5. Start the development server:
    ```sh
    npm start
    ```

6. Open your browser and navigate to `http://localhost:3000`.

## Usage

1. Enter a location in the input box.
2. Click the "Get Weather" button.
3. The current weather information for the entered location will be displayed.

## File Structure

```plaintext
.
├── public
│   ├── index.html
│   └── ...
├── src
│   ├── App.css
│   ├── App.js
│   ├── index.js
│   └── ...
├── .env
├── .gitignore
├── package.json
└── README.md
