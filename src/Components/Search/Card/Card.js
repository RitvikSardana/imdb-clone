import React from 'react'
import './Card.css'
import StarBorderIcon from '@material-ui/icons/StarBorder';


function Card({title,imgURL,image,overview,id,vote_average}) {
    return (
        <div className = 'cards__all'>

                <img src={image} alt="" />
                <div className="cards__rating">
                    <StarBorderIcon/>
                    <p>{vote_average}</p>
                </div>
        </div>
    )

}

export default Card
