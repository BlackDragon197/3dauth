import * as React from "react";
import styled from 'styled-components'

const AddBtn = styled.a`

width: ${props => props.width};
height: 2.8em;
font-family: Gilroy;
font-style: normal;
font-weight: 600;
font-size: 0.938vw;
line-height: 1.054vw;
color: #FFFFFF;
display: flex;
justify-content: center;
align-items: center;
box-sizing: border-box;
border-radius: 6px;
//position: relative;
cursor: pointer;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
transition: 500ms;
left: ${props => props.left};
background: ${props => props.background};
`

class ChooseIndex extends React.Component {

    showBack(){
        this.props.showComponent('ChooseIndex')
    }

    render() {
      return <div>
        
        <div className="column3" style={{background: 'url(../block2.1.png)', backgroundSize: '100% 100%'}}>
      <h1 className="flex-basis">Выберите Инвестиционный пакет</h1>
          <div className="col1 space">
              <h3>Депозит Крипто</h3>
              <div className="curIndex space3">
                    <div className="text70">
                        <h4>Минимальный депозит:</h4>
                    </div>
                    <div className="text30">
                        <h4>10000 р.</h4>
                    </div>
              </div>
              <div className="curIndex space3">
                    <div className="text70">
                    <h4>Доходность (за месяц):</h4>
                    </div>
                    <div className="text30">
                    <h3>14%</h3>
                    </div>
              </div>
              <div className="space3">
              <AddBtn width="16.667vw" background="#15274E" onClick={() => {this.props.showComponent('AdvCash'), this.props.index(1)} }>Выбрать Индекс </AddBtn>
              </div>
          </div>
          <div className="col1 space">
          <h3>Депозит Акции</h3>
              <div className="curIndex space3">
                    <div className="text70">
                        <h4>Минимальный депозит:</h4>
                    </div>
                    <div className="text30">
                        <h4>100000 р.</h4>
                    </div>
              </div>
              <div className="curIndex space3">
                    <div className="text70">
                    <h4>Доходность (за месяц):</h4>
                    </div>
                    <div className="text30">
                    <h3>16%</h3>
                    </div>
              </div>
              <div className="space3">
              <AddBtn width="16.667vw" background="#15274E"  onClick={() => {this.props.showComponent('AdvCash'), this.props.index(2)} }>Выбрать Индекс </AddBtn>
              </div>
          </div>
          <div className="col1 space">
          <h3>Депозит - Золото</h3>
          <div className="curIndex space3">
                    <div className="text70">
                        <h4>Минимальный депозит:</h4>
                    </div>
                    <div className="text30">
                        <h4>1000000 р.</h4>
                    </div>
              </div>
              <div className="curIndex space3">
                    <div className="text70">
                    <h4>Доходность (за месяц):</h4>
                    </div>
                    <div className="text30">
                    <h3>18%</h3>
                    </div>
              </div>
              <div className="space3">
              <AddBtn width="16.667vw" background="#15274E" onClick={() => {this.props.showComponent('AdvCash'), this.props.index(3)} }>Выбрать Индекс </AddBtn>
              </div>
              
          </div>
      </div>
      

      <style jsx>
            {`
           .text30{
            width: 30%;
            background: rgba(224,247,219,0.72);
            height: 80%;
            justify-content: center;
            align-items: center;
            display: flex;
        }
        .text70{
            width: 75%;
            height: 80%;
            justify-content: center;
            align-items: center;
            display: flex;
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
            flex-wrap: wrap; 
            height: 450px;
            align-items: center;
            flex-direction: row;
            width: 100%;
        }
          .col1{
            flex-direction: column;
            width: 28%;
            height: 85%;
            background: rgba(0,90,155,0.1);
            display: flex;
            justify-content: flex-start;
            align-items: center;
          }
        
        .glhYQM a{
            font-size: 16px;
            line-height: 20px;
            padding: 16px 34px;
            display: block;
            background: rgb(248, 250, 252);
            color: rgb(0, 0, 0);
            font-weight: bold;
        }
            `}
        </style>
      </div>
    }
  }
  export default ChooseIndex