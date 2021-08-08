import React from 'react';


/* url for images */
const IMG_API = "https://image.tmdb.org/t/p/w1280";

const setVoteClass = (vote) => {
    if(vote >= 8) {
        return 'green'
    } else if (vote >= 6) {
        return 'orange'
    }
    else {
        return 'red'
    }
}

/* 
getting the info and setting it to show on the movie cards
 */

const Movie = ({ title, poster_path, overview, vote_average, vote_count }) => (
    <div className="movie">
        <img src={IMG_API + poster_path} alt={title}/>
        <div className="movie-info">
            <h2>{title}</h2>
            <span className={
                `tag ${setVoteClass(vote_average)}`
            }>{vote_average}</span>
            <span>{`Number of votes ${vote_count}`}</span>
        </div>

        <div className="movie-overview">
            <h3>Overview: </h3>
            <p>{overview}</p>
        </div>

    </div>
);

export default Movie;