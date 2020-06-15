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
      <h5>Мы в Intagram</h5>
        <div className="insta__inner">
          <a href="https://www.instagram.com/p/CBTq_CbDVsk/?utm_source=ig_web_copy_link" target="blank"><img alt="soap" src={img1}/></a>
          <a href="https://www.instagram.com/p/CBTrjfNDUMX/?utm_source=ig_web_copy_link" target="blank"><img alt="soap" src={img13}/></a>
          <a href="https://www.instagram.com/p/CBTrBvAjE4M/?utm_source=ig_web_copy_link" target="blank"><img alt="soap" src={img3}/></a>
          <a href="https://www.instagram.com/p/CBTriniDP98/?utm_source=ig_web_copy_link" target="blank"><img alt="soap" src={img11}/></a>
          <a href="https://www.instagram.com/p/CBTrDpsD7JD/?utm_source=ig_web_copy_link" target="blank"><img alt="soap" src={img5}/></a>
          <a href="https://www.instagram.com/p/CBTrFJQjzmo/?utm_source=ig_web_copy_link" target="blank"><img alt="soap" src={img6}/></a>
          <a href="https://www.instagram.com/p/CBTrGSWDRwy/?utm_source=ig_web_copy_link" target="blank"><img alt="soap" src={img9}/></a>
          <a href="https://www.instagram.com/p/CBTrKZ_jkm5/?utm_source=ig_web_copy_link" target="blank"><img alt="soap" src={img8}/></a>
          <a href="https://www.instagram.com/p/CBTrJErj6eO/?utm_source=ig_web_copy_link" target="blank"><img alt="soap" src={img4}/></a>
          <a href="https://www.instagram.com/p/CBTrHj7jtal/?utm_source=ig_web_copy_link" target="blank"><img alt="soap" src={img10}/></a>
        </div>
          <a href="https://www.instagram.com/1311584949fjdj/?hl=ru" target="blank"><i className="fa fa-instagram insta-icon"></i></a>
      </div>
  )
}
export default InstagramPage;