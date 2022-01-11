import * as React from "react";
import  { PropTypes } from 'react'

class HistoryComponent extends React.Component {
  constructor(props) {
    super(props)
   this.state ={

   }
  }
    render() {
      const{user} = this.props.props.auth;
      return (<div><h3>Заказать выплату</h3><br /><br /><br />

        <div className="col1">
              
              <div className="col1d2">
                <div className="col1d2col3">
                <img src="mobile/profile/rub.svg" width="36" height="36"/>
                <div>
                    <div className="col3desc1">
                        <span className="cringe"><h3>Доступно для вывода:</h3></span>
                    </div>
                    <div className="col3desc2">
                      <h3>
                    {user.available ? (user.available):("0.00") } руб
                    </h3>
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