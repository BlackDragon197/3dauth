import Router from "next/router";
import * as React from "react";
import { UpdateModel } from "../../utils/UpdateModel"
import axios from "axios";

import UpdateUser from './components/UpdateUser'
import FindAll from "./components/FindAll";
import GetUser from "./components/GetUser";
import MoneyBack from "./components/UpdateUser";


export default class RegistrationForm extends React.Component{
/*hardcoded email password should be cleaned before setting up DB*/ 
state = {
    name:'',
    email:'', 
    password:'',
    error: '',
    isLoading: false,
	refer: '',
	phone:'',
    summ: '',
    currendDep: '',
    dateEnd:'',
    available:'',
    adminPassword:''
};

showComponent(componentName) {
    this.setState({currentMenuItem: componentName});
  }

renderComponent(){
    switch(this.state.currentMenuItem) {
    case "PaymentComponent":
      return <UpdateUser />
    case "HistoryComponent":
      return <FindAll />
    case "ReferalComponent":
      return <GetUser />
    case "MoneyBack":
      return <MoneyBack props={this.props}/>
  }
}

handleChange = event => {
    this.setState({[event.target.name]: event.target.value});
}

updateUser (name, email, password, refer, phone, summ, currendDep, dateEnd, available, adminPassword){
    const updateModel = new UpdateModel(name, email, password, refer, phone, summ, currendDep, dateEnd, available, adminPassword)
    const requestInstance = axios.create({
        method:'POST',
        baseURL: process.env.API,
        headers: {'Content-Type': 'application/json'}
    })
    const user = requestInstance({url: 'update',data: updateModel})
    console.log("update: ",user)
    // let doc1 = UserModel.findOneAndUpdate(filter, update)
    // console.log(doc1)
    // let doc2 = UserModel.findOne(filter)
    // console.log(doc2)
}

handleSubmit = event => {
    const {name, email, password, refer, phone, summ, currendDep, dateEnd, available, adminPassword} = this.state;

    event.preventDefault();
    this.setState({error: "", isLoading: true})
    //console.log(this.state);
    if (adminPassword == "000qqq"){
    const updateModel = new UpdateModel(name, email, password, refer, phone, summ, currendDep, dateEnd, available)
    const requestInstance = axios.create({
        method:'POST',
        baseURL: process.env.API,
        headers: {'Content-Type': 'application/json'}
    })
    const user = requestInstance({url: 'update',data: updateModel})
    console.log("update: ",user)
    }
    else {
        alert('Пароль админа не введён или введён неправильно!')
    }
    // updateUser(name, email, password, refer, phone, summ, currendDep, dateEnd, available).then(()=>{
    //    console.log(name, email, password, refer, phone, summ, currendDep, dateEnd, available)
      
    // }).catch(this.showError)
}



showError = err => {
    console.error(err);
    const error = err.response && err.response.data || err.message
    this.setState({ error})
}

    render(){
        const {name, email, password, refer, error, phone, isLoading, summ, currendDep, dateEnd, available, adminPassword} = this.state
        return(
          
	<div className="lay">
		<h1> ADMIN-PAGE </h1>
        <h1 className=""></h1>
		{/* <div className="main-agileinfo">
			<div className="agileits-top">
				<form onSubmit={this.handleSubmit} style={{color: 'white'}}>
					ФИО<input className="text input-text" type="text" name="name" placeholder="" required="" value={name} onChange={this.handleChange}/><br />
					Email<input className="text email input-email" type="email" name="email" placeholder="" required="" value={email} onChange={this.handleChange}/>
					Пароль<input className="text input-password" type="password" name="password" placeholder="" required="" value={password} onChange={this.handleChange}/> <br />
					ID пригласившего:<input className="text input-text" type="text" name="refer" placeholder="" required="" value={refer} onChange={this.handleChange}/>
					Телефон<input className="text input-text" type="number" name="phone" placeholder="" required="" value={phone} onChange={this.handleChange}/>
                    (summ) Внесено:<input className="text input-text" type="number" name="summ" placeholder="" required="" value={summ} onChange={this.handleChange}/>
                    (currentDep) Текущий депозит<input className="text input-text" type="text" name="currendDep" placeholder="" required="" value={currendDep} onChange={this.handleChange}/>
                    (dateEnd) Дата окончания депозита. Формат даты(год, месяц, число) : ГГГГ-ММ-ЧЧ:<input className="text input-text" type="text" name="dateEnd" placeholder="" required="" value={dateEnd} onChange={this.handleChange}/>
                    (available) Доступно для вывода:<input className="text input-text" type="number" name="available" placeholder="" required="" value={available} onChange={this.handleChange}/>
                    (admin-password)<input className="text input-text" type="password" name="adminPassword" placeholder="" required="" value={adminPassword} onChange={this.handleChange}/>
					
					<input className="input-submit" type="submit" value="ОБНОВИТЬ ПОЛЬЗОВАТЕЛЯ" />
					{error && <div>{error}</div>}
				</form>
				
			</div>
		</div> */}

        <div className="row2">
          <section className="">
              <div className="">
                  <ul className="leftul">
                      <li>
                          <button className="leftbut" onClick={() => {this.showComponent('PaymentComponent')}}>
                              <a className="lefta">
                              Обновить пользователя
                              </a>
                          </button>
                      </li>
                      <li>
                          <button className="leftbut" onClick={() => {this.showComponent('HistoryComponent')}}>
                              <a className="lefta">
                              ВСе пользователи
                              </a>
                          </button>
                      </li>
                      <li>
                          <button className="leftbut" onClick={() => {this.showComponent('ReferalComponent')}}>
                              <a className="lefta">
                              Пользователь по E-mail
                              </a>
                          </button>
                      </li>
                  </ul>
              </div>
          </section>
          <section className="">
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
      </div>


<style jsx>
    {`
    .kickik{
        font-family: Gilroy;
        font-weight: 800;
    }
    `}
</style>
<style jsx>
          {`
          .lay{
              background: lightblue;
          }
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
                  grid-area: main / main / main / main;
                  background: rgb(248, 250, 252);
                  width: calc(100vw - 364px);
              }
              .row2{
                  display: grid;
                  gap: 24px;
                  grid-template-columns: 292px 2fr;
                  grid-template-rows: 1fr;
                  grid-template-areas: "sidebar main";
                  padding: 24px;

              }
              .section1{
                  position: relative;
                  grid-area: sidebar / sidebar / sidebar / sidebar;
              }
              .leftsec{
                  background: rgb(255, 255, 255);
                  height: 100%;
              }
              .leftul{
                  list-style: none;
                  margin: 0px;
                  padding: 0px;
                  height: 100vh;
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
                  display: contents;
              }
              .lefta{
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
        )
    }
}

