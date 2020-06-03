import React from "react";
import "./insta.css"
import img1 from "./i1.jpg";
import img3 from "./i3.jpg";
import img4 from "./i4.jpg";
import img5 from "./i5.jpg";
import img6 from "./i6.jpg";
import img8 from "./i8.jpg";
import img9 from "./i9.jpg";
import img10 from "./i10.jpg";
import img11 from "./i11.jpg";
import img13 from "./i13.jpg";

const InstagramPage = () => {
  return (
    <div className="insta-page container">
      <h6>Мы в Intagram</h6>
        <div className="insta__inner">
          <img alt="soap" src={img1}/>
          <img alt="soap" src={img13}/>
          <img alt="soap" src={img3}/>
          <img alt="soap" src={img11}/>
          <img alt="soap" src={img5}/>
          <img alt="soap" src={img6}/>
          <img alt="soap" src={img9}/>
          <img alt="soap" src={img8}/>
          <img alt="soap" src={img4}/>
          <img alt="soap" src={img10}/>
        </div>
          <i className="fa fa-instagram insta-icon"></i>
      </div>
  )
}
export default InstagramPage;