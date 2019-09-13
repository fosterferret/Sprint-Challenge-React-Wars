import React, { useEffect, useState } from 'react';
import axios from "axios";
import Characters from "./Characters";
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
    <>
      <div className="App">
        <h1 className="Header">STAR WARS CHARACTER CARDS</h1>

        <h3>PAGE {currentPage}</h3>

        <Characters characters={characters} />

        <div className="wrapper">
          <div
            className="prev"
            onClick={() => currentPage === 1? setCurrentPage(1): setCurrentPage(currentPage - 1)}
          ></div>
          <h2>PREV / NEXT</h2>
          <div
            className="next"
            onClick={() => currentPage === 10? setCurrentPage(10) : setCurrentPage(currentPage + 1)}
          ></div>
        </div>
      </div>
    </>
  );
};

export default App;