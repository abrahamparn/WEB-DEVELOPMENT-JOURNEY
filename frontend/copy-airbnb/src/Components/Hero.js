
import React from "react"
import HeroImg from '../brids.jpg'


export default function Hero(){
    return (
        <section className="hero">
            <img src={HeroImg} className="hero-img"/>

            <h1 className="hero-title">Online Experience</h1>
            <div className="hero-text-container">
                <p className="hero-text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>

            </div>

        </section>
          
    )
}