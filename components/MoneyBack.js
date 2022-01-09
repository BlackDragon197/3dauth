import * as React from "react";

class HistoryComponent extends React.Component {
  constructor(props) {
    super(props)
   
  }
    render() {
      const{user} = this.props.props.auth;
      return (<div><h3>Заказать выплату</h3><br /><br /><br />
        <h4>Доступно для выплаты:</h4>
        <h3>0.00</h3>
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
                    {user.available ? (user.available):("0.00")}
                    </div>
                </div>
                <button className="cringebut"></button>
                </div>
              </div>
          </div>
        </div>
        
        );
    }
  }
  export default HistoryComponent