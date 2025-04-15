import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Nav from './Components/Nav';
import Hero from './Components/Hero';
import Card from './Components/Card';
import CardData from './Components/CardData';

const root = ReactDOM.createRoot(document.getElementById('root'));
const cardData = CardData.map(data =>
  <Card 
    data = {data}

  />
  )
root.render(
  <div>
    <Nav/>
    <Hero/>
    <div className='card-placement'>
      {cardData}
    </div>
    
  </div>

);
{/* <Card
      img={goodPicture}
      rating="5.0"
      reviewCount="10"
      country="USA"
      title ="Jalan jalan ke pulau berantah"
      price="1000"
    />

     <Card
      img={goodPicture}
      rating="5.0"
      reviewCount="10"
      country="USA"
      title ="Jalan jalan ke pulau berantah"
      price="1000"
    />
     <Card
      img={goodPicture}
      rating="5.0"
      reviewCount="10"
      country="USA"
      title ="Jalan jalan ke pulau berantah"
      price="1000"
    /> */}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
