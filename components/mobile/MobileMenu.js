import React from "react";
import { elastic as Menu } from "react-burger-menu";
import props from 'prop-types';
export default function Mobilenu () {
  return (
    // Pass on our props
    <Menu {...props} right>
      <a className="menu-item" href="/">
        Главная
      </a>
      <a className="menu-item" href="/deposits">
        Инвестиционные пакеты
      </a>

      <a className="menu-item" href="/faq">
        Faq
      </a>

      <a className="menu-item" href="">
        Помощь
      </a>

      <a className="menu-item" href="#contact">
        Заказать звонок
      </a>

      <a className="menu-item" href="#onas">
        О Pegas
      </a>
      <a className="menu-item" href="/login">
        Вход
      </a>
      <a className="menu-item" href="/registration">
        Регистрация
      </a>
    </Menu>
  )
}
