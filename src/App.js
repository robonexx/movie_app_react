import React, { useEffect, useState }from "react";
import Movie from './components/Movie';
require('dotenv').config();


/* Setting api key imported from .env file */
const api_key = process.env.REACT_APP_API_KEY


/* api url for popular movies and page that loads up on first screen before searching for movies  */
/* const FEAUTRED_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${api_key}&page=1`; */
const FEAUTRED_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${api_key}&page=1`;

/* 
search url / query
*/
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?&api_key=${api_key}&query=`;

function App() {

  const [ movies, setMovies] = useState([]);

  const [ searchTerm , setSearchTerm] = useState('');

  useEffect(() => {
    getMovies(FEAUTRED_API);
  }, []);

  const getMovies = (API) => {
    fetch(API)
    .then(res => res.json())
    .then(data => {  
      console.log(data)
    setMovies(data.results);
    });
  }


  const handleOnSubmit = (e) => {
    e.preventDefault();
    
    if(searchTerm) {
      getMovies(SEARCH_API + searchTerm);
 
    setSearchTerm("");
  }
};

const handleOnChange = (e) => {
  setSearchTerm(e.target.value);
}

  return (
    <>
    <header>
        <div className="header">
            <h1>Movie search app</h1>
            <div>
                <form onSubmit={handleOnSubmit}>
            <label htmlFor="">Search Movie: </label>
            <input className="search" 
            type="text" 
            placeholder="Type here... "
            value={searchTerm}
            onChange={handleOnChange}/>
            </form>
            </div>
        </div>
      </header>
      
    <div className="container">
      {movies.length > 0 && 
      movies.map((movie) => 
        <Movie key={movie.id} {...movie}/>
      )}
    </div>
    </>
  );
}

export default App;
