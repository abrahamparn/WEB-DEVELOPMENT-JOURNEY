import React from "react";
export default function Card(props){
    console.log(props)
    return(
        <div className="card">
            <div className="card-container">
                <img src={props.data.img.goodPicture} className="card-img"/>
                <div className="card-status">
                    <p>Hai Kamu</p></div>
            </div>
            <p><i className="fa fa-star"/> {props.data.rating} ({props.data.reviewCount}) - {props.data.country}</p>
            <p>{props.data.title}</p>
            <p><strong>From ${props.data.price}</strong> / person</p>
        </div>

    )  
}