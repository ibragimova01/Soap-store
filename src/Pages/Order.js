import React, { Component } from "react";
import Main from "../Components/form/Main";
import "../Components/form/form.css";

class Order extends Component {
  render() {
    return (
      <div>
        <div style={{maxWidth:'800px', margin: '0 auto', textAlign: 'center'}}>
        <h1>Мыло на заказ</h1>
          <p>В данном разделе вы можете самостоятельно выбрать ингредиенты, из которых наши специалисты изготовят мыло ручной работы на заказ.</p>
        </div>
          <div className='wrapper'><Main/></div>
      </div>
    )
  }
}

export default Order