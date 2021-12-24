import Qiwi from "./../Qiwi";
import * as React from "react";
import PaymentComponentMob from './PaymentComponentMob'
import HistoryComponent from "./../HistoryComponent";
import ReferalComponent from "./../ReferalComponent";
import MoneyBack from "./../MoneyBack";
import CurrentIndexMob from "./CurrentIndexMob";
import { TiTickOutline } from "react-icons/ti";
import { TiFlowMerge } from "react-icons/ti";
import { TiChartLineOutline } from "react-icons/ti";
import { TiGroupOutline } from "react-icons/ti";
import { TiBriefcase } from "react-icons/ti";

import { authInitialProps } from "../../lib/auth";
class ProfileMenu extends React.Component {
  constructor(props) {
    super(props);

  this.state = {
      currentMenuItem: 'CurrentIndexMob',
      name: 'CurrentIndexMob',
  }
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
      return <PaymentComponentMob />
    case "HistoryComponent":
      return <HistoryComponent />
    case "ReferalComponent":
      return <ReferalComponent />
    case "MoneyBack":
      return <MoneyBack />
      case "CurrentIndexMob":
        return <CurrentIndexMob props={this.props}/>
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
    case "CurrentIndexMob":
      return "Текущий депозит"
  }
}
    render() {
      const {user} = this.props.auth;
      return (
      <div style={{width: '100%'}}>
      
      <div className="row2">
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
          <section className="section1">
              <div className="leftsec">
                  <ul className="leftul">
                      <li>
                          <button className="leftbut" onClick={() => {this.showComponent('CurrentIndexMob'), this.showName('CurrentIndexMob')}}>
                              <TiTickOutline/>
                              <a className="lefta">
                              Текущий депозит
                              </a>
                          </button>
                      </li>
                      <li>
                          <button className="leftbut" onClick={() => {this.showComponent('PaymentComponent'), this.showName('PaymentComponent')}}>
                              <TiFlowMerge/>
                              <a className="lefta">
                              Выбрать депозит
                              </a>
                          </button>
                      </li>
                      <li>
                          <button className="leftbut" onClick={() => {this.showComponent('HistoryComponent'), this.showName('HistoryComponent')}}>
                              <TiChartLineOutline/>
                              <a className="lefta">
                              История ввода / вывода
                              </a>
                          </button>
                      </li>
                      <li>
                          <button className="leftbut" onClick={() => {this.showComponent('ReferalComponent'), this.showName('ReferalComponent')}}>
                              <TiGroupOutline/>
                              <a className="lefta">
                              Реферальная программа
                              </a>
                          </button>
                      </li>
                      <li>
                          <button className="leftbut" onClick={() => {this.showComponent('MoneyBack'), this.showName('MoneyBack')}}>
                              <TiBriefcase/>
                              <a className="lefta">
                              Заказать выплату
                              </a>
                          </button>
                      </li>
                  </ul>
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
                  background: rgb(248, 250, 252);
                  min-width: 300px;
              }
              .row2{
                  display: flex;
                  gap: 24px;
                  flex-direction: column;
                  row-gap: 24px;

              }
              .section1{
                  position: relative;
              }
              .leftsec{
                  background: rgb(255, 255, 255);
                  position: fixed;
                  bottom: 0;
                  width: 100%;
              }
              .leftul{
                  list-style: none;
                  margin: 0px;
                  padding: 0px;
                  display: flex;
                  justify-content: space-between;
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
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
              }
              .lefta{
                  font-size: 9px;
                  line-height: 11px;
                  display: block;
                  background: rgb(248, 250, 252);
                  color: rgb(0, 0, 0);
                  font-weight: normal;
              }
              .lefta:hover{
                  background: rgba(0,90,155,0.1);
                  color: rgb(0, 0, 0);
                  font-weight: bold;
                  transition: all 0.2s ease-in-out 0s;
              }
              .leftbut:after {
                content: "";
                background: #90EE90;
                display: block;
                position: absolute;
                padding-top:15px;
                top: -30px;
                padding-left: 100%;
                opacity: 0;
                transition: all 0.8s
              }
              .leftbut:active{
                  position:relative;
                  top:2px;
                  transition: all 0.5s;
                  outline: 1px solid lightblue;
              }
              .leftbut:active:after {
                opacity: 0;
                transition: 0s
              }
          `}
      </style>
      </div>
     
      )
    }
  } 

export default ProfileMenu

