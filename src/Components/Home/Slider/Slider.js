import React from 'react'
import "./Slider.css";
import 'react-slideshow-image/dist/styles.css'
import { Fade } from 'react-slideshow-image';

const fadeImages = [
    "https://images.unsplash.com/photo-1515634928627-2a4e0dae3ddf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aXJvbm1hbiUyMG1vdmllfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1595495529106-adb18dfe16a8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGFyayUyMHNlcmllc3xlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1597436968340-1ec93f3f2883?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjZ8fGZpbG18ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
];

const properties = {
    duration: 3000
  };

function Slider() {
    return (
        <div>
            <div className="slide-container">
                <Fade {...properties}>
                <div className="each-fade">
                    <div>
                    <img src={fadeImages[0]} />
                    </div>
                    {/* <p>First Slide</p> */}
                </div>
                <div className="each-fade">
                    {/* <p>Second Slide</p> */}
                    <div>
                    <img src={fadeImages[1]} />
                    </div>
                </div>
                <div className="each-fade">
                    <div>
                    <img src={fadeImages[2]} />
                    </div>
                    {/* <p>Third Slide</p> */}
                </div>
                <div className="each-fade">
                    <div>
                    <img src={fadeImages[3]} />
                    </div>
                    {/* <p>Third Slide</p> */}
                </div>
                </Fade>
            </div>            
        </div>
    )
}

export default Slider
