import React from "react";
import "./Home.css";
import Slider from "./Slider/Slider";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Card from "./Card/Card";

function Home() {
  return (
    <div className="home">
      <Slider />
      <section className="home__section">
        <div className="home__div">
          <div className="home__section__info">
            <h2>Top Picks</h2>
            <ArrowForwardIosIcon />
          </div>
          <p>TV shows and movies just for you</p>
        </div>
        <div className="home__section__cards">
        <Card
            src="https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_UX182_CR0,0,182,268_AL__QL50.jpg"
            title = "Black Panther"
            rating="7.3"
          />
          <Card 
            src = "https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_UX182_CR0,0,182,268_AL__QL50.jpg"
            title = "Doctor Strange"
            rating = "7.5"
          />

          <Card
            src="https://m.media-amazon.com/images/M/MV5BNjk1Njk3YjctMmMyYS00Y2I4LThhMzktN2U0MTMyZTFlYWQ5XkEyXkFqcGdeQXVyODM2ODEzMDA@._V1_UY268_CR43,0,182,268_AL__QL50.jpg"
            title = "Deadpool 2"
            rating="7.7"
          />
        </div>
      </section>
    </div>
  );
}

export default Home;
