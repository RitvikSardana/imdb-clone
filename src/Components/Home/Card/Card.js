import React from "react";
import "./Card.css";
import { Button } from "@material-ui/core";
import StarIcon from '@material-ui/icons/Star';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

function Card({src,title,rating}) {
  return (
    <div className="card">
      <img src={src} alt="Movie Image" />
      <div className='card__rating'>
          <div className="card__rating__num">
            <StarIcon/>{rating}
          </div>
        {/* <StarBorderIcon/> */}
      </div>
      {/* <div></div> */}
      <h2>{title}</h2>
      <Button className='card__button'><p>Watch options</p></Button>
      <div className='card__trailer'> 
            <PlayArrowIcon/>
            <h4>Trailer</h4>

      </div>
    </div>
  );
}

export default Card;
