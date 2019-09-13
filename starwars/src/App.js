import React, { useEffect, useState } from 'react';
import axios from "axios";
import "./App.css";
import './App.css';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (currentPage < 10) {
      axios
        .get(`https://swapi.co/api/people?page=${currentPage}`)
        .then(response => {
          setCharacters(response.data.results);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, [currentPage]);


  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
    </div>
  );
}

export default App;
