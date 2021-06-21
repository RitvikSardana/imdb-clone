import React, { useState } from "react";
import "./Slider.css";
import { SliderData } from "./SliderData";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
function Slider() {
  const [currentImg, setCurrentImg] = useState(0);
  const length = SliderData.length;

    const nextSlide = () =>{
        setCurrentImg(currentImg===length-1? 0 :currentImg+1);
        console.log(currentImg);
    }
    const prevSlide = () =>{
        console.log("Clicked prev");
        setCurrentImg(currentImg===0 ?  length-1 :currentImg-1);
        console.log(currentImg);
    }

  return (
    <div className="slider">
      <ArrowBackIosIcon className = 'slider__leftArrow' onClick={prevSlide} />
      <ArrowForwardIosIcon className = 'slider__rightArrow' onClick={nextSlide}/>
      {SliderData.map((slide, index) => {
        return (
            <div className={index === currentImg? 'slide__active': 'slide'}>
                {index === currentImg && (
                <img src={slide.image} alt="sliderImages" key={index} />
                )}
            </div>
        )

      })}
    </div>
  );
}

export default Slider;
