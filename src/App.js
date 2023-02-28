import './App.css';
import logo from './breakingbad.jpg';
import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [quote, setQuote] = useState("");

  const getQuote = async () => {
    const response = await axios.get("https://api.breakingbadquotes.xyz/v1/quotes");
    setQuote(response.data[0].quote);
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div className="breakwrapper">
      
      <div className="bodywrap">
      <img src={logo} className="logo" alt="Logo" />
      <h1>Random Breaking Bad Quote</h1>
      <p>{quote}</p>
      <button onClick={getQuote}>Get New Quote</button>
      </div>
    </div>
  );
};

export default App;
