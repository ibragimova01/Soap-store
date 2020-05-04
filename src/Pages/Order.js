import React, { Component } from "react";
import Main from "../Components/form/Main";

class Order extends Component {
  render() {
    const order = {
    
    }
    return (
      <div style={order}>
        <h1 style={{color:'#2f3444', fontSize: '50px', fontFamily: 'Caveat, cursive', textAlign: 'center', marginTop: '60px', paddingTop: '50px'}}>Мыло на заказ</h1>
        <div style={{maxWidth:'600px', margin:'0 auto'}}>
          <p style={{textAlign:'center', fontSize: '26px', fontFamily:'Caveat'}}>В данном разделе вы можете самостоятельно выбрать ингредиенты, из которых наши специалисты изготовят мыло ручной работы на заказ.</p>
        </div>
        <Main/>
      </div>
    )
  }
}

export default Order