import React from 'react';
import logo from './logo.svg';
import './App.css';
import Quotes from './components/Quotes';
import WeatherForecast from './components/WeatherForecast';
import RedditAw from './components/RedditAw';

function App() {
  return (
    <div className="App">
      <RedditAw />
      <WeatherForecast />
      <Quotes />
      
    </div>
  );
}

export default App;
