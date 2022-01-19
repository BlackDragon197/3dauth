import Router from "next/router";
import * as React from "react";
import { UpdateModel } from "../../../utils/UpdateModel"
import axios from "axios";


export default class RegistrationForm extends React.Component{
    /*hardcoded email password should be cleaned before setting up DB*/ 
    constructor(props){
        super(props)
        this.state = {
            currentMenuItem: 'PaymentComponent',
            name: 'PaymentComponent'
        }
      }
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
                <div className="main-agileinfo">
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
                <style jsx>
                    {`
                    .kickik{
                        font-family: Gilroy;
                        font-weight: 800;
                    }
                    `}
                </style>
                </div>
                </div>
            )
        }
    }
    
    