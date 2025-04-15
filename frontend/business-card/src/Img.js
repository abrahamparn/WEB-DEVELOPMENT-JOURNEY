import React from "react";
import carImg from './unsplash.jpg'
export default function ImgCar(){
return (
    <img src={carImg} className="image" loading="lazy" />
)
}