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

      <a className="menu-item" href="">
        Настройки
      </a>

      <a className="menu-item" href="">
        Выход
      </a>

    </Menu>
  )
}
