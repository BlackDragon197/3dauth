import Router from "next/router";
import * as React from "react";
import axios from "axios";
//import { UserModel } from "../../../utils/UserModel"
import { GetUserModel } from "../../../utils/GetUserModel"

export default class RegistrationForm extends React.Component{

    state = {
        findAll:'',
        adminPassword:'',
        email:''

    };
    handleChange = event => {
        this.setState({[event.target.name]: event.target.value});
    }
    handleSubmit = async event => {
      const {adminPassword, email, findAll} = this.state
    
        event.preventDefault();
       
        //console.log(this.state);
        if (adminPassword == "000qqq"){
            const requestInstance = axios.create({
                method:'POST',
                baseURL: process.env.API,
                headers: {'Content-Type': 'application/json'}
            })
            const updateModel = new GetUserModel(email)
            console.log(updateModel.email)
            const user = await requestInstance({url: 'findOne', data: {email: email}})
            // this.setState({userEmail: user.data.email})
            this.setState(prevState => ({
                ...prevState, findAll: user.data
            }))
            console.log("findAll: ",findAll )
        
         //const user = await requestInstance({url: 'getUser',data:{email: "emailo@mail.nen"} })
      // const user = UserModel.findOne({'email': emailo})
         
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
            const {adminPassword, email, findAll} = this.state
           
      
           
            return(
                <div className="agileits-top">
                    <form onSubmit={this.handleSubmit} style={{color: 'black'}}>

                    (email пользователя)<input className="" type="text" name="email" placeholder="" required="" value={email} onChange={this.handleChange}/>
                        (admin-password)<input className="text input-text" type="password" name="adminPassword" placeholder="" required="" value={adminPassword} onChange={this.handleChange}/>
                        
                        <input className="input-submit" type="submit" value="НАЙТИ ПОЛЬЗОВАТЕЛЯ" />
                        
                        <table>
         <tbody>
             {Object.keys(findAll)?.map(
(keke) => 
<tr><td>{keke} : {findAll[keke]}</td></tr>
)
             
             }
             {/* {findAll?.map(} */}
        
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
    
    