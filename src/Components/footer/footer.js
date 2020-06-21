import React from "react";
import "./footer.css"

const Footer = () => {
  return(
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <h5>Компания</h5>
            <ul className="list-unstyled">
              <li>О нас</li>
              <li>Главная страница</li>
            </ul>
          </div>
          <div className="col">
            <h5>Продукция</h5>
            <ul className="list-unstyled">
              <li>Каталог</li>
              <li>Заказать мыло</li>
              <li>Корзина</li>
            </ul>
          </div>
          <div className="col">
            <h5>Контакты</h5>
            <ul className="list-unstyled">
              <li>+996 772 77 89 33</li>
              <li>+996 502 77 83 33</li>
              <li>+996 552 77 89 33</li>
            </ul>
          </div>
          <div className="col">
            <h5>Наш адрес</h5>
            <ul className="list-unstyled">
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