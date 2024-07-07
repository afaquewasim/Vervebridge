import { useEffect, useState } from 'react';
import './App.css'

const Home = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [location, setLocation] = useState('New Delhi');
  const [inputLocation, setInputLocation] = useState('');

  const today = new Date();
  const options = { month: 'long', day: 'numeric', weekday: 'long' };
  const formattedDate = today.toLocaleDateString('en-US', options);

  const fetchCurrentWeather = async (loc) => {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=94ea05c94a3a4237bae65825240507&q=${loc}&aqi=no`);
    const data = await response.json();
    setCurrentWeather(data);
  };

  useEffect(() => {
    fetchCurrentWeather(location);
  }, [location]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputLocation.trim() !== '') {
      setLocation(inputLocation);
    }
  };

  return (
    <div className='w-[80%] md:w-[75%] lg:w-[50%] mx-auto'>
      <h1 className='text-3xl md:text-4xl lg:text-5xl text-center py-4 font-semibold'>
        Discover The Weather In Your City
      </h1>
      <form onSubmit={handleSubmit} className='w-full flex flex-col md:flex-row align-middle justify-center'>
        <input
          className='text-black py-2 px-4 text-lg border-none shadow-lg outline-none mx-4 font-semibold rounded-lg mb-4 md:mb-0'
          type="text"
          value={inputLocation}
          onChange={(e) => setInputLocation(e.target.value)}
          placeholder="Enter location"
        />
        <button
          type="submit"
          className='bg-gray-700 text-white shadow-lg px-4 py-2 text-lg rounded-lg hover:bg-gray-600 mx-4'
        >
          Get Weather
        </button>
      </form>
      {currentWeather ? (
        <div className='w-full bg-custom-gradient text-white my-4 mx-auto p-4 rounded-lg'>
          <img
            src={currentWeather.current.condition.icon.startsWith('//') ? `https:${currentWeather.current.condition.icon}` : currentWeather.current.condition.icon}
            alt={currentWeather.current.condition.text}
            className='mx-auto my-4 w-24 h-24'
          />
          <p className='text-xl my-4 text-center'>{formattedDate}</p>
          <p className='text-5xl md:text-6xl mt-4 text-center'>{currentWeather.current.temp_c.toFixed(0)}°</p>
          <p className='text-xl text-center mt-2'>{currentWeather.location.name}, {currentWeather.location.country}</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4 py-4">
            <div className="humidity">
              <p className='text-center'>Humidity</p>
              <p className='text-xl text-center mt-2'>{currentWeather.current.humidity}%</p>
            </div>
            <div className="wind">
              <p className='text-center'>Wind</p>
              <p className='text-xl text-center mt-2'>{currentWeather.current.wind_mph}mph</p>
            </div>
            <div className="cloud">
              <p className='text-center'>Cloud</p>
              <p className='text-xl text-center mt-2'>{currentWeather.current.cloud}%</p>
            </div>
          </div>
        </div>
      ) : (
        <p className='text-center'>Loading...</p>
      )}
    </div>
  );
};

export default Home;
