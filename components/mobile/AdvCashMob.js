import * as React from "react";
import Image from "next/image";
import AdvMob from "./AdvMob";
import Qiwi from "./../Qiwi";
import WalletMob from './WalletMob'
import PaymentByDetailsMob from './PaymentByDetailsMob'

class AdvCash extends React.Component {

state = {
  index: null,
  payment: 1
}


componentDidMount(){
  const {index} = this.props
  this.setState({index})
}

setPayment(n){
  this.setState({payment: n})
}

renderPayment(){
  switch(this.state.payment){
    case 1: return <AdvMob />
    //case 2: return <Qiwi />
    case 2: return <WalletMob />
    case 3: return <PaymentByDetailsMob />
  }
}

renderComponent(){
  switch(this.state.index) {
  case 1:
    return (' Депозит CTD')
  case 2:
    return  ('Депозит STD') 
  case 3:
    return  ('Депозит GTD')
}
}

    render() {
      return (
        <div>
          <div style={{position :'absolute'}}><a onClick={() => this.props.showComponent('ChooseIndex')} className="previous">&laquo; Назад</a></div>
      {/*<h1>Привет, {this.props.name} {this.props.index} 
      AdvCash {this.state.index}
      </h1>*/}
      <h3>{this.renderComponent()}</h3>
      <h1 className="flex-basis">Выберите способ оплаты</h1>
          <div className="column3">
           
            <div className="col1 space">
                <div className="col1in" onClick={() => this.setPayment(1)}>
                  <div className="c1">
                    <Image src="/ADVCash.svg" width="120" height="40"/>
                  </div>
                  <div>
                      AdvCash 
                  </div>
                </div>
            </div>
            {/* {<div className="col1 space" >
            <div className="col1in" onClick={() => this.setPayment(2)}>
                  <div className="c1">  
                    <Image src="/Qiwi.svg" width="120" height="40"/>
                  </div>
                  <div>
                      Perfect Money
                  </div>
                </div>
            </div>} */}
            <div className="col1 space">
              <div className="col1in" onClick={() => this.setPayment(2)}>
                  <div className="c1" active="true">  
                    <Image src="/usd.svg" width="120" height="40"/>
                  </div>
                  <div>
                      Прямая оплата
                  </div>
              </div>
            </div>

            <div className="col1 space">
              <div className="col1in" onClick={() => this.setPayment(3)}>
                  <div className="c1" active="true">  
                    <Image src="/usd.svg" width="120" height="40"/>
                  </div>
                  <div style={{width: 'max-content'}}>
                      Реквизиты компании
                  </div>
              </div>
            </div>
            
          </div>
          {this.renderPayment()}
         
          <style jsx>
            {`
            c1:active{
              display: grid;
    border-radius: 8px;
    cursor: pointer;
    width: 128px;
    grid-template-rows: 104px;
    -webkit-box-align: center;
    place-items: center;
    position: relative;
    background-color: rgb(255, 255, 255);
    border: 2px solid rgb(87, 102, 236);
            }
            .c1:hover{
              box-shadow: rgb(125 175 189 / 14%) 0px 4px 16px;
            }
            .c1{
              display: grid;
    border-radius: 8px;
    cursor: pointer;
    width: 128px;
    grid-template-rows: 104px;
    -webkit-box-align: center;
    place-items: center;
    border: 1px solid rgb(222, 226, 240);
    position: relative;
    background-color: rgb(255, 255, 255);
            }
        .col1in{
          display: grid;
          grid-template-rows: auto auto;
          row-gap: 10px;
          font-size: 14px;
          text-align: left;
          margin-bottom: 10px;
          max-width: 128px;
          cursor: pointer;
          color: rgb(87, 102, 236);
          font-weight: bold;
        }        
        .space{
            margin-top: 2em;
            padding-top: 2em;
        }
        .space3{
            margin-top: 2em;
        }
        .curIndex{
            border-top: 1px solid;
            border-bottom: 1px solid;
            border-color: rgba(128, 128, 128 ,0.46);
            width: 80%;
            height: 20%;
            justify-content: center;
            align-items: center;
            background: white;
            display: flex;
            flex-direction: row;
            border-radius: 8px;
          }
          .flex-basis{
            flex-basis:100%;
          }
        .column3{
          background-image: url(./public/block2.1.png);
          background-size: 100%;
            display: flex;
            justify-content: flex-start;
            overflow-x: auto;
            height: 250px;
            align-items: center;
            flex-direction: row;
            width: 100%;
        }
          .col1{
            padding-top: 0px;
    padding-right: 10px;
    padding-bottom: 0px;
    flex-basis: unset;
    margin-bottom: 20px;
          }
        
       
            `}
        </style>
      </div>
      )
    }
  }
export default AdvCash