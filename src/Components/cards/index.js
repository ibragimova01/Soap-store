import React from "react";
import "./cards.css";
import cardImg1 from "./i5.jpg";
import cardImg2 from "./i6.jpg";
import cardImg3 from "./i8.jpg";

const Cards = () => {
  return(
  <div className="cards">
    <h6>В производстве используется только натуральная мыльная основа</h6>
  <div className="cards__inner">
    <div className="cards-container">
      <div className="cards-card">
        <div className="imgBx">
          <img alt="soap" src={cardImg1}/>
        </div>
        <div className="cards-content">
          <h5>Английская основа</h5>
          <p>Производится исключительно из растительного сырья, не раздражает кожу, не вызывает аллергии. Качество подтверждено сертификатом EcoCert.</p>
        </div> 
      </div>
      <div className="cards-card">
        <div className="imgBx">
          <img alt="soap" src={cardImg2}/>
        </div>
        <div className="cards-content">
          <h5>Цветная мыльная основа "MYLOFF COLOR"</h5>
          <p>Не содержит сырья животного происхождения. Для окрашивания основы используются только натуральные красители.</p>
        </div>
      </div>
      <div className="cards-card">
        <div className="imgBx">
          <img alt="soap" src={cardImg3}/>
        </div>
        <div className="cards-content">
          <h5>Оливковая мыльная основа "MYLOFF OSB"</h5>
          <p>Разработана на основе натурального оливкового масла. Не пересущивает кожу, хорошо пенится.</p>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}
export default Cards;