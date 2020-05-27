import React, { useState } from 'react'
import './ImageSlider.css'



export default function ImageSlider() {
    //const images = [
    //    { url: image1 },
    //    { url: image2 },
    //    { url: image3 },
    //    { url: image4 }
    //]

    //const [ height, setHeight ] = useState(window.innerHeight)
    //const [ width, setWidth ] = useState(window.innerWidth)

    //function windowSize() {
    //    setHeight(window.innerHeight)
    //    setWidth(window.innerWidth)
    //}
    
    //window.onresize = windowSize


    return (
        <>
            <div className="carousel-wrapper">
                <div className="carousel-slider">
                    <div className="img4 slider-img"/>
                    <div className="img1 slider-img"/>
                    <div className="img2 slider-img"/>
                    <div className="img3 slider-img"/>
                    <div className="img4 slider-img"/>
                    <div className="img1 slider-img"/>
                </div>
            </div>
            <button id="prevBtn">Prev</button>
            <button id="nextBtn">Next</button>
        </>
    );
}