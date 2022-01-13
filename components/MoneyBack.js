import * as React from "react";
import  { PropTypes } from 'react'
import emailjs from 'emailjs-com'

import{ init } from 'emailjs-com';
init("user_t18aTjWVzTkXBjZSIEkUa");

function sendEmail(e) {
  e.preventDefault();

  emailjs.sendForm('service_kww6hls', 'template_9tqewk8', e.target, 'user_t18aTjWVzTkXBjZSIEkUa')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset();
}

class HistoryComponent extends React.Component {
  constructor(props) {
    super(props)
   this.state ={

   }
  }
  handleChange = event => {
    this.setState({[event.target.name]: event.target.value});
}
setMax = () =>{
  this.setState({number: this.props.props.auth.user.available});
}

    render() {
      const{user} = this.props.props.auth;
      return (<div>
<div className="col1">
              <div className="col1d2">
                <div className="col1d2col3">
                <div>
                    <div className="">
                        <span className="cringe"><h3>Доступно для вывода:</h3></span>
                    </div>
                    <div className="col3desc2">
                      <h3>
                    {user.available ? (user.available):("0.00") } руб
                    </h3>
                    </div>
                </div>
                <div className="mobeybackform1">
                  <div className="absolute">
                <img src="mobile/profile/rub.svg" width="36" height="36"/></div><h3>Заказать выплату</h3>
                  
                  <div className="margintop">
                  Сумма выплаты:<br/>
                  <form onSubmit={sendEmail} >
                    <div className="flex-col">
                      <div>
                        <div style={{display: 'inline-flex'}}>
                          <div>
                          <input type="number" className="input-email blacked maxinput" name="summ" value={this.state.number} onChange={this.handleChange} />
                          </div>
                          <div>
                            <input className="input-submit maxbut" type="button" onClick={this.setMax} value="MAX"/>
                          </div>
                          <input type="hidden" name="email" value={user.email} />
                        </div>
                      </div>
                      <div>
                      <button type="submit" className="moneybackbut1 input-submit">Заказать выплату</button>
                      </div>
                    </div>
                  </form>
                  </div>

                </div>
                
                </div>
              </div>
          </div>
          <style jsx>
              {`
              .margintop{
                margin-top: 2em;
              }
              .absolute{
                position: absolute;
              }
              .flex-col{
                display: flex;
                flex-direction: column;
                padding: auto;
                width: 600px;
              }
              .maxinput{
                margin: 0.8em 0;
                border: 2px solid orange;
              }
              .maxbut{
               
                margin: 0.8em 0;
                background: rgb(101 110 117 / 100%);
                padding: 0.8em;
              }
              .mobeybackform1{
                border-radius: 5px;
                margin: 2em auto;
                border: 1px solid lightblue;
                width: 600px;
                padding: 1em 2em;
              }
              .blacked{
                color: black;
              }
              .moneybackbut1{
                  width: 30%;
                  letter-spacing: 0;
              }
              `}
          </style>

        </div>
        
        );
    }
  }
  export default HistoryComponent