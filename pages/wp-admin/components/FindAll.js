import Router from "next/router";
import * as React from "react";
import { UpdateModel } from "../../../utils/UpdateModel"
import axios from "axios";
import User from "./user";

export default class RegistrationForm extends React.Component{
    /*hardcoded email password should be cleaned before setting up DB*/ 

    state = {
        findAll:[],
        adminPassword:'',
    };
    handleChange = event => {
        this.setState({[event.target.name]: event.target.value});
    }
 
    handleSubmit = async event => {
      const {adminPassword} = this.state
    
        event.preventDefault();
       
        //console.log(this.state);
        if (adminPassword == "000qqq"){
        const updateModel = new UpdateModel()
        const requestInstance = axios.create({
            method:'GET',
            baseURL: process.env.API,
            headers: {'Content-Type': 'application/json'}
        })
        const user = await requestInstance({url: 'findAll'})
        this.setState({findAll: user.data})
        console.log(this.state.findAll)

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
            const {adminPassword, findAll} = this.state
          const CardList = ({ robots }) => {
            return (
            <div> {robots?.map((user, i) => {
            return (
            <User key={i} email={user} />
            );})}
            </div>
            );};
           
            return(
                <div className="agileits-top">
                    <form onSubmit={this.handleSubmit} style={{color: 'black'}}>

                        (admin-password)<input className="text input-text" type="password" name="adminPassword" placeholder="" required="" value={adminPassword} onChange={this.handleChange}/>
                        
                        <input className="input-submit" type="submit" value="ПОКАЗАТЬ ВСЕХ ПОЛЬЗОВАТЕЛЕЙ" />
                        
                        <table>
         <tbody>
             
           {  <CardList robots={findAll}/>
           }
         </tbody>
       </table>
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
            )
        }
    }
    
    