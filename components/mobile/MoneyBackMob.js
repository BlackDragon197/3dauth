import * as React from "react";
import  { PropTypes } from 'react'

class HistoryComponent extends React.Component {
  constructor(props) {
    super(props)
   this.state ={
    number: ''
   }
   this.max = React.createRef();
  }
  
  
handleChange = event => {
    this.setState({[event.target.name]: event.target.value});
}
setMax = () =>{
  this.setState({number: this.props.props.auth.user.available});
}
    render() {
        const {number} = this.state
      const{user} = this.props.props.auth;
      return (<div>
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
                <div className="mobeybackform">
                <h3>Заказать выплату</h3>
                Сумма выплаты:<br/>
                <div style={{display: 'inline-flex'}}>
                  <div>
                    <input type="number" className="input-email blacked maxinput" name="number" value={this.state.number} onChange={this.handleChange} />
                  </div>
                  <div>
                    <input className="input-submit maxbut" type="button" onClick={this.setMax} value="MAX"/>
                  </div>
                </div>
                  <button className="moneybackbut input-submit">Заказать выплату</button>
                </div>
                </div>
              </div>
          </div>
          <style jsx>
              {`
              .maxinput{
                margin: 0.8em 0;
                border: 2px solid orange;
              }
              .maxbut{
               
                margin: 0.8em 0;
                background: rgb(101 110 117 / 100%);
                padding: 0.8em;
              }
              .mobeybackform{
                border-radius: 5px;
                margin: 10px 0;
                border: 1px solid lightblue;
              }
              .blacked{
                color: black;
              }
              .moneybackbut{
                  width: 50%;
                  letter-spacing: 0;
              }
              `}
          </style>
        </div>
        
        );
    }
  }
  export default HistoryComponent