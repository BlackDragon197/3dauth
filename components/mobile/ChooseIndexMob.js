import * as React from "react";
import styled from 'styled-components'

const AddBtn = styled.a`
margin: 10px 0;
width: ${props => props.width};
height: 2.8em;
font-family: Gilroy;
font-style: normal;
font-weight: 600;
font-size: 3vw;
line-height: 4vw;
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
        
        <div className="row3" style={{background: 'url(../block2.1.png)', backgroundSize: '100% 100%'}}>
          
          <div className="col1">
              <div className="col1d1">
                  <div className="col1text">
                  Депозит CTD
                  </div>
              </div>
              <div className="col1d2">
                <div className="col1d2col3">
                <img src="mobile/profile/rub.svg" width="36" height="36"/>
                <div>
                    <div className="col3desc1">
                        <span className="cringe">Минимальный депозит:</span>
                    </div>
                    <div className="col3desc2">
                        10000 
                    </div>
                    <div className="col3desc1">
                        <span className="cringe">Доходность (за месяц):</span>
                    </div>
                    <div className="col3desc2">
                        14%
                    </div>
                    
                </div>
                
                <button className="cringebut"></button>
                </div>
                <div>
                    <AddBtn width="80vw" background="#15274E" onClick={() => {this.props.showComponent('AdvCash'), this.props.index(1)} }>Выбрать депозит </AddBtn>
                </div>
              </div>
          </div>
          <div className="col1">
              <div className="col1d1">
                  <div className="col1text">
                  Депозит STD
                  </div>
              </div>
              <div className="col1d2">
                <div className="col1d2col3">
                <img src="mobile/profile/rub.svg" width="36" height="36"/>
                <div>
                    <div className="col3desc1">
                        <span className="cringe">Минимальный депозит:</span>
                    </div>
                    <div className="col3desc2">
                        100000 
                    </div>
                    <div className="col3desc1">
                        <span className="cringe">Доходность (за месяц):</span>
                    </div>
                    <div className="col3desc2">
                        16%
                    </div>
                    
                </div>
                
                <button className="cringebut"></button>
                </div>
                <div>
                    <AddBtn width="80vw" background="#15274E"  onClick={() => {this.props.showComponent('AdvCash'), this.props.index(2)} }>Выбрать депозит </AddBtn>
                </div>
              </div>
          </div>
          <div className="col1">
              <div className="col1d1">
                  <div className="col1text">
                  Депозит GTD
                  </div>
              </div>
              <div className="col1d2">
                <div className="col1d2col3">
                <img src="mobile/profile/rub.svg" width="36" height="36"/>
                <div>
                    <div className="col3desc1">
                        <span className="cringe">Минимальный депозит:</span>
                    </div>
                    <div className="col3desc2">
                        1000000 
                    </div>
                    <div className="col3desc1">
                        <span className="cringe">Доходность (за месяц):</span>
                    </div>
                    <div className="col3desc2">
                        18%
                    </div>
                    
                </div>
                
                <button className="cringebut"></button>
                </div>
                <div>
                    <AddBtn width="80vw" background="#15274E" onClick={() => {this.props.showComponent('AdvCash'), this.props.index(3)} }>Выбрать депозит </AddBtn>
                </div>
              </div>
          </div>
          
          
      </div>
      

      <style jsx>
            {`
            .cringebut{
                position: relative;
    right: 3px;

    border: none;
    background: url(mobile/profile/i.svg) center center / 16px no-repeat transparent;
    width: 16px;
    height: 16px;
    margin: auto;
;
            }
            .cringe{
                font-family: 'Lato', sans-serif;
            }
           .col3desc2{
            font-weight: bold;
            font-size: 20px;
            line-height: 24px;
        }
        .col3desc1{
            font-size: 12px;
line-height: 16px;
font-weight: normal;
color: rgb(152, 157, 168);
        }
        .col1d2col3{
            display: grid;
grid-template-columns: 36px auto 20px;
column-gap: 12px;
-webkit-box-align: center;
align-items: center;
position: relative;
        }
        .col1text{
            color: rgb(0, 0, 0);
            font-weight: bold;
            font-size: 16px;
            line-height: 20px;
            padding: 0px 30px 16px 0px;
        }
        .col1d2{
            display: grid;
background: rgb(255, 255, 255);
box-shadow: rgb(124 124 149 / 8%) 0px 8px 30px;
border-radius: 8px;
min-height: 100px;
padding: 10px 16px 0px;
-webkit-box-align: stretch;
align-items: stretch;
grid-area: balance;
grid-template-rows: 40px;
row-gap: 37px;
}
        }
        .col1d1{
column-gap: 10px;
display: grid;
grid-area: title / title / title / title;
place-items: flex-start;
grid-template-columns: 3fr 1fr;
column-gap: 12px;
min-width: 300px ;
        }
        .kol{
          width: 100%;
        }
        .curIndex{
          width: 80%;
          justify-content: center;
          align-items: center;
          
        }
        .flex-basis{
          flex-basis:100%;
        }
      .row3{
        background-image: url(/public/mobile/profile/back2.png);
        background-size: 100%;
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap; 
          align-items: center;
          flex-direction: column;
          width: 100%;
          row-gap:20px;
      }
        .col1{
            display: grid;
            column-gap: 16px;
            grid-template-columns: minmax(30%, 388px) auto;
            grid-template-areas:
                "title title"
                "balance support";
            grid-area: uahBlock / uahBlock / uahBlock / uahBlock;
            min-width: 0px;

          grid-template-columns: auto;
          grid-template-areas:
              "title"
              "support"
              "balance";
          row-gap: 2px;
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
          
            `}
        </style>
      </div>
    }
  }
  export default ChooseIndex