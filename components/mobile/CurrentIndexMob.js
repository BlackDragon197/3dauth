import * as React from "react";


class CurrentIndex extends React.Component {
    render() {
      return <div className="kol">
        
      <div className="row4" style={{background: 'url(../back2.png)', backgroundSize: '100% 100%'}}>
      {/*<h2 className="flex-basis">Текущий Индекс</h2>*/}
          <div className="col1">
              <div className="col1d1">
                  <div className="col1text">
                  Текущий Депозит
                  </div>
              </div>
              <div className="col1d2">
                <div className="col1d2col3">
                <img src="mobile/profile/btc.svg" width="36" height="36"/>
                <div>
                    <div className="col3desc1">
                        <span className="cringe">Выбрано:</span>
                    </div>
                    <div className="col3desc2">
                        Не выбран
                    </div>
                </div>
                <button className="cringebut"></button>
                </div>
              </div>
          </div>

          <div className="col1">
              <div className="col1d1">
                  <div className="col1text">
                  Дата окончания
                  </div>
              </div>
              <div className="col1d2">
                <div className="col1d2col3">
                <img src="mobile/profile/rub.svg" width="36" height="36"/>
                <div>
                    <div className="col3desc1">
                        <span className="cringe">Дата:</span>
                    </div>
                    <div className="col3desc2">
                    -
                    </div>
                </div>
                <button className="cringebut"></button>
                </div>
              </div>
          </div>

          <div className="col1">
              <div className="col1d1">
                  <div className="col1text">
                  Общая сумма
                  </div>
              </div>
              <div className="col1d2">
                <div className="col1d2col3">
                <img src="mobile/profile/usd.svg" width="36" height="36"/>
                <div>
                    <div className="col3desc1">
                        <span className="cringe">Сумма:</span>
                    </div>
                    <div className="col3desc2">
                    0.00
                    </div>
                </div>
                <button className="cringebut"></button>
                </div>
              </div>
          </div>

          <div className="col1">
              <div className="col1d1">
                  <div className="col1text">
                  Доступно для вывода
                  </div>
              </div>
              <div className="col1d2">
                <div className="col1d2col3">
                <img src="mobile/profile/x.svg" width="36" height="36"/>
                <div>
                    <div className="col3desc1">
                        <span className="cringe">Сумма:</span>
                    </div>
                    <div className="col3desc2">
                    0.00
                    </div>
                </div>
                <button className="cringebut"></button>
                </div>
              </div>
          </div>
         
          
      </div>
      

      <style jsx>
            {`
            .cringebut{
                position: absolute;
    right: 3px;
    top: 20px;
    border: none;
    background: url(mobile/profile/i.svg) center center / 16px no-repeat transparent;
    width: 16px;
    height: 16px
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
    padding: 30px 16px;
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
          .row4{
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
            `}
        </style>
      </div>
    }
  }
  export default CurrentIndex