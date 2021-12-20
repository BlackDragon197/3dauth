import * as React from "react";

class CurrentIndex extends React.Component {
    render() {
      return <div className="kol">
        
      <div className="column4" style={{background: 'url(../back2.png)', backgroundSize: '100% 100%'}}>
      {/*<h2 className="flex-basis">Текущий Индекс</h2>*/}
          <div className="col1">
              <h3>Текущий Депозит</h3>
              <div className="curIndex"><h3>
                Не выбран</h3>
              </div>
          </div>
          <div className="col1">
          <h3>Дата окончания</h3>
              <div className="curIndex">
              <h3>-</h3>
              </div>
          </div>
          <div className="col1">
          <h3>Сумма:</h3>
              <div className="curIndex">
              <h3>0.00</h3>
              </div>
          </div>
          <div className="col1">
          <h3>Доступно для вывода:</h3>
              <div className="curIndex">
              <h3>0.00</h3>
              </div>
          </div>
      </div>
      

      <style jsx>
            {`
            .kol{
              width: 100%;
            }
            .curIndex{
              width: 80%;
              height: 25%;
              justify-content: center;
              align-items: center;
              
            }
            .flex-basis{
              flex-basis:100%;
            }
          .column4{
            background-image: url(./public/back2.png);
            background-size: 100%;
              display: flex;
              justify-content: space-around;
              flex-wrap: wrap; 
              height: 250px;
              align-items: center;
              flex-direction: row;
              width: 100%;
          }
            .col1{
              flex-direction: column;
              width: 20%;
              height: 75%;
              background: rgba(0,90,155,0.1);
              display: flex;
              justify-content: center;
              align-items: center;
            }
            `}
        </style>
      </div>
    }
  }
  export default CurrentIndex