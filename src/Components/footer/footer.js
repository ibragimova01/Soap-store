import React from "react";
import "./footer.css"

const Footer = () => {
  return(
    <div className="main-footer">
      <div className="container">
        <div className="row">
          
          <div className="col">
            <h6>Наш адрес</h6>
            <ul className="list-unstyled">
              <li>+996772778933</li>
              <li>Бишкек, Кыргызстан</li>
              <li>ул. Токтогула 27</li>
            </ul>
          </div>
        </div>
        <hr/>
        <div className="row">
          <p className="col-sm center">
            &copy;{new Date().getFullYear()} LaVanda
          </p>
        </div>
      </div>
    </div>
  )
}
export default Footer;