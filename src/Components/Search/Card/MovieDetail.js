import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./MovieDetails.css";
import { Button } from "@material-ui/core";
import StarIcon from '@material-ui/icons/Star';

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);

  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=31ccaa658a188c30177dadc10d191ef9&language=en-US`;
  const imgURL = "https://image.tmdb.org/t/p/original" + movie.backdrop_path;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
      });
  }, [id]);

  return (
    <div className='movie__pos'>
    <div className="movie__details">
      <img src={imgURL} alt="Image not available"  />
      <div className="movie__details__heading">
        <h2>{movie.release_date && movie.title +'('+movie.release_date.slice(0, 4)+')'}</h2>
        {/* <h2>{movie.release_date && '('+movie.release_date.slice(0, 4)+')'}</h2> */}
      </div>
      <p>{movie.overview}</p>
      <div className="movie__details__genres">


        {movie.genres&&
          // console.log(movies.genres[0].name)
          movie.genres.map((genre) => (
            <Button>{genre.name}</Button>
          ))
        }
      </div>
      <h3>{"Release Date- "+ movie.release_date}</h3>
      <div className="movie__details__rating">
        <StarIcon/>
        <h4>{movie.vote_average}</h4>
      </div>
    </div>
    </div>
  );
}

export default MovieDetail;
