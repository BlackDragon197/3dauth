import AdvCash from "../components/AdvCash";
import Qiwi from "./Qiwi";
import * as React from "react";
import PaymentComponent from '../components/PaymentComponent'
import HistoryComponent from "./HistoryComponent";
import ReferalComponent from "./ReferalComponent";
import MoneyBack from "./MoneyBack";

class ProfileMenu extends React.Component {

  state = {
      currentMenuItem: 'PaymentComponent',
      name: 'PaymentComponent'
  }
  showComponent(componentName) {
    this.setState({currentMenuItem: componentName});
  }
  showName(componentName) {
    this.setState({name: componentName});
  }
  renderComponent(){
    switch(this.state.currentMenuItem) {
    case "PaymentComponent":
      return <PaymentComponent />
    case "HistoryComponent":
      return <HistoryComponent />
    case "ReferalComponent":
      return <ReferalComponent />
    case "MoneyBack":
      return <MoneyBack />
  }
}
renderName(){
  switch(this.state.name){
    case "PaymentComponent":
      return "Способы оплаты"
    case "HistoryComponent":
      return "История сделок"
    case "ReferalComponent":
      return "Реферальная программа"
      case "MoneyBack":
        return "Заказать выплату"
  }
}
    render() {
      return (
      <div>
      <div className="row2">
          <section className="section1">
              <div className="leftsec">
                  <ul className="leftul">
                      <li>
                          <button className="leftbut" onClick={() => {this.showComponent('PaymentComponent'), this.showName('PaymentComponent')}}>
                              <a className="lefta">
                              Выбрать Индекс
                              </a>
                          </button>
                      </li>
                      <li>
                          <button className="leftbut" onClick={() => {this.showComponent('HistoryComponent'), this.showName('HistoryComponent')}}>
                              <a className="lefta">
                              История ввода / вывода
                              </a>
                          </button>
                      </li>
                      <li>
                          <button className="leftbut" onClick={() => {this.showComponent('ReferalComponent'), this.showName('ReferalComponent')}}>
                              <a className="lefta">
                              Рефералка
                              </a>
                          </button>
                      </li>
                      <li>
                          <button className="leftbut" onClick={() => {this.showComponent('MoneyBack'), this.showName('MoneyBack')}}>
                              <a className="lefta">
                              Заказать выплату
                              </a>
                          </button>
                      </li>
                  </ul>
              </div>
          </section>
          <section className="section2">
              <div className="rightsec">
                  {/*
                  <div className="rightsecin">
                      { this.renderName() }
                  </div>
                  */}
                  <div className="rightseccontent">
                      { this.renderComponent() }
                  </div>
              </div>
          </section>
      </div>
      <style jsx>
          {`
              .rightsecin{
                  font-size: 18px;
                  line-height: 20px;
                  color: rgb(0, 0, 0);
                  padding: 10px 0px 20px;
              }
              .rightsec{
                  font-size: 16px;
                  background-color: transparent;
                  border-radius: 4px;
                  padding: 22px 11px;
              }
              .section2{
                  grid-area: main / main / main / main;
                  background: rgb(248, 250, 252);
                  width: calc(100vw - 364px);
              }
              .row2{
                  display: grid;
                  gap: 24px;
                  grid-template-columns: 292px 2fr;
                  grid-template-rows: 1fr;
                  grid-template-areas: "sidebar main";
                  padding: 24px;

              }
              .section1{
                  position: relative;
                  grid-area: sidebar / sidebar / sidebar / sidebar;
              }
              .leftsec{
                  background: rgb(255, 255, 255);
                  height: 100%;
              }
              .leftul{
                  list-style: none;
                  margin: 0px;
                  padding: 0px;
                  height: 100vh;
              }
              .leftbut{
                  color: inherit;
                  font-size: inherit;
                  font-weight: inherit;
                  border: none;
                  background: inherit;
                  text-align: inherit;
                  padding: 0px;
                  margin: 0px;
                  display: contents;
              }
              .lefta{
                  font-size: 16px;
                  line-height: 20px;
                  padding: 16px 34px;
                  display: block;
                  background: rgb(248, 250, 252);
                  color: rgb(0, 0, 0);
                  font-weight: bold;
              }
              .lefta:hover{
                  background: rgba(0,90,155,0.1);
                  color: rgb(0, 0, 0);
                  font-weight: bold;
                  transition: all 0.2s ease-in-out 0s;
              }
              .lefta:after {
                content: "";
                background: #90EE90;
                display: block;
                position: absolute;
                padding-top:15px;
                padding-left: 100%;
                opacity: 0;
                transition: all 0.8s
              }
              .lefta:active{
                  position:relative;
                  top:4px;
                  transition: all 0.5s;
                  outline: 1px solid lightblue;
              }
              .lefta:active:after {
                padding: 0;
                margin: 0;
                opacity: 1;
                transition: 0s
              }
          `}
      </style>
      </div>
     
      )
    }
  } 

export default ProfileMenu



