import React, { useState } from "react";
// import useFetch from '../../useFetch'
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Card from "./Card/Card";
import "./Search.css";


function Search() {
    
  //function and queries to get movie name from URL
  function useQuery() {
      return new URLSearchParams(useLocation().search);
    }
  const query = useQuery();
  const movieName = query.get("movie");

  const API_KEY = '31ccaa658a188c30177dadc10d191ef9';
  // const half_url = 'https://api.themoviedb.org/3/movie/';
  const url = `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${movieName} `;

  const imgURL = "https://image.tmdb.org/t/p/original";
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
    // getMovies();
  }, [url]);

  return (
    <div className="search">
      {movies !== undefined &&
        movies.length > 0 &&
        movies.map((movie, id) => {
          if (movie.title && movie.vote_average!==0) {
            if (movie.poster_path !== null) {
              return (
                <Link
                to={{
                    pathname: `/movie/${movie.id}/details`,
                    state: {name:'ritvik'}
                  }}
                >
                  {" "}
                  <Card
                    key={id}
                    title={
                      // movie.title != null ? movie.title : movie.original_name
                      movie.title
                    }
                    imgURL={imgURL}
                    image={
                      movie.poster_path != null
                        ? imgURL + movie.poster_path
                        : ""
                    }
                    overview={movie.overview != null ? movie.overview : ""}
                    id={movie.id}
                    vote_average={movie.vote_average}
                  />
                </Link>
              );
            }
          }
        })}
      {/* id,title,vote_average,posterpath */}
    </div>
  );
}

export default Search;
