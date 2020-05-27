import React, { useState } from "react";
import ImgComp from "../slider/imgComp";
import "./slider.css"
import i1 from "./soapimg.jpg";
import i2 from "./soapimg.jpg";
import i3 from "./soapimg.jpg";
function Slider() {
    const [x, setX] = useState(0);
    let sliderArr = [
    <ImgComp src={i1}/>,
    <ImgComp src={i2}/>,
    <ImgComp src={i3}/>,
    <ImgComp src={i3}/>,
    <ImgComp src={i3}/>
  ];
    const goLeft=() => {
      x === 0 ? setX(-100 * (sliderArr.length -1 )) : setX(x + 100);
    };
    const goRight=() => {
      x === -100 * (sliderArr.length -1 ) ? setX(0) : setX(x - 100);
    };
  return (
    <div className="slider">
      {
        sliderArr.map((item, index)=>{
        return(
          <div key={index} className="slide" style={{transform:`translateX(${x}%)`}}>
            {item}
          </div>
        );
      })}
      <button className="slide-btn" id="goLeft" onClick={goLeft}><i className="fa fa-chevron-left slide-icon"></i></button>
      <button className="slide-btn" id="goRight" onClick={goRight}><i className="fa fa-chevron-right slide-icon"></i></button>
    </div>
  );
}

export default Slider;