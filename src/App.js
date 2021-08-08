import React, { useEffect, useState }from "react";
import Movie from './components/Movie';

const FEAUTRED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=5fa32f8341fad5c102aff8336a2ae512&page=1";


const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=5fa32f8341fad5c102aff8336a2ae512&query=";

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
