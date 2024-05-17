/** @format */

import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

const baseUrl = process.env.REACT_APP_BASEURL;

function App() {
  const [isData, setIsData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${baseUrl}/hello`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (response.ok) {
          console.log(response);
          const data = await response.json();
          setIsData(data);
        } else {
        }
      } catch (error) {}
    };
    fetchData().then();
  }, []);
  console.log('Isdata' + isData);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{isData === null ? 'Server is not running' : isData.message}</p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
