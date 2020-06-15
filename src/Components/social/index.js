import React from "react";
import "./social.css";

function Social(){
  return(
    <nav className="social">
      <ul>
        <li><a className="social-icon" href="https://www.facebook.com" target="blank"><i className="fa fa-facebook-f s-icon"></i><span>Facebook</span></a></li>
        <li><a className="social-icon" href="https://twitter.com/home?lang=ru" target="blank"><i className="fa fa-twitter s-icon" ></i><span>Twitter</span></a></li>
        <li><a className="social-icon" href="https://www.instagram.com/?hl=ru" target="blank"><i className="fa fa-instagram s-icon"></i><span>Instagram</span></a></li>
        <li><a className="social-icon" href="https://www.youtube.com/?hl=ru" target="blank"><i className="fa fa-youtube s-icon"></i><span>youtube</span></a></li>
      </ul>
    </nav>
  )
}
export default Social;