import React from "react";
import "./social.css";
import { Link } from "react-router-dom";

function Social(){
  return(
    <nav className="social">
      <ul>
        <li><Link className="social-icon" to="#!"><i className="fa fa-facebook-f s-icon"></i><span>Facebook</span></Link></li>
        <li><Link className="social-icon" to="#!"><i className="fa fa-twitter s-icon" ></i><span>Twitter</span></Link></li>
        <li><Link className="social-icon" to="#!"><i className="fa fa-instagram s-icon"></i><span>Instagram</span></Link></li>
        <li><Link className="social-icon" to="#!"><i className="fa fa-youtube s-icon"></i><span>youtube</span></Link></li>
      </ul>
    </nav>
  )
}
export default Social;