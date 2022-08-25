import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux" 
import { Link } from "react-router-dom";
import "../style/App.css";
import logo from "../assets/logo1.png";
import "../style/HeadStyle.css";
import Input from "../UI/Input";
import logoCart from "../assets/cart.png";
import Profile from "../assets/profile.png";
import Modal from "../UI/Modal";
import carrt from "../assets/carrt.png";
import deletee from "../assets/deletee.png";
import "../style/CartStyle.css";
import "../style/PopupStyle.css";
import { clearItems, setItems } from "../Rtk/clothes/slice";




const Head = () => {
  let total_price = "1000"
  

  const [modalActive, setModalActive] = useState();
  const [modalActiveP, setModalActiveP] = useState();
  
  return (
    <>
    <Modal active={modalActive} setActive={setModalActive}>
      <div className="TitleCart__Wrapper">
        <div className="Direction">
          <img src={carrt} alt="logo" className="PhotoL"/>
          <span className="Text">Корзина</span>
        </div>
        <div className="Direction">
          <img src={deletee} alt="del" className="PhotoL"/>
          <span className="Text1">отчистить корзину</span>
        </div>
      </div>
      <div className="ProductCart__Wrapper">

      </div>
      <div className="Info_Wrapper">
        <div> 
          <h5 className="Text2">Всего товаров: {} шт.</h5>
        </div>
        <div>
          <h5 className="Text2">Сумма заказа: {} ₽</h5>
        </div>
      </div>
      <div className="ButtonCart__Wrapper">
        <button className="Btn_3" onClick={() => setModalActive(false)}> Вернуться назад</button>
        <button className="Btn_3">Оплатить</button>
      </div>
    </Modal>
    <Modal active={modalActiveP} setActive={setModalActiveP}>
      <h1>Profile</h1>
    </Modal>

      <header className="Head">
        <div className="wrapper__logo">
      <Link to="/Home">
          <img src={logo} alt="логотип" className="logo" />
        </Link>
        </div>
          <Input />
        
        <div className="input__wrapper">
          <div className="cart__link" onClick={() => setModalActive(true)}>
            <img src={logoCart} alt="cart" className="cart__logo"/>
            <span className="price">{total_price} ₽</span>
          </div>
          <div onClick={() => setModalActiveP(true)}>
            <img src={Profile} alt="profile" className="profile"/>
          </div>
        </div>
      </header>
    </>
  );
};

export default Head;
