import Router from "next/router";
import * as React from "react";
import { loginUser, createUser, getUserProfile, authInitialProps} from "../lib/auth";
import api from "../lib/api"
import { useRouter } from "next/router";

export default class RegistrationForm extends React.Component{
/*hardcoded email password should be cleaned before setting up DB*/ 
state = {
    name:'',
    email:'', 
    password:'',
    error: '',
    isLoading: false,
	refer: '',
	phone:''
};

handleChange = event => {
    this.setState({[event.target.name]: event.target.value});
}

handleSubmit = event => {
    const {name, email, password, refer, phone} = this.state;

    event.preventDefault();
    this.setState({error: "", isLoading: true})
    //console.log(this.state);
    
    createUser(name, email, password, refer, phone).then(()=>{
       console.log(name, email, password, refer, phone)
      
    }).catch(this.showError)

}

showError = err => {
    console.error(err);
    const error = err.response && err.response.data || err.message
    this.setState({ error})
}

    render(){
        const {name, email, password, refer, error, phone, isLoading} = this.state

        return(
          
	<div className="main-w3layouts wrapper">
		<h1> Регистрация </h1>
		<div className="main-agileinfo">
			<div className="agileits-top">
				<form onSubmit={this.handleSubmit} style={{color: 'white'}}>
					ФИО<input className="text input-text" type="text" name="name" placeholder="" required="" value={name} onChange={this.handleChange}/><br />
					Email<input className="text email input-email" type="email" name="email" placeholder="" required="" value={email} onChange={this.handleChange}/>
					Пароль<input className="text input-password" type="password" name="password" placeholder="" required="" value={password} onChange={this.handleChange}/> <br />
					ID пригласившего:<input className="text input-text" type="text" name="refer" placeholder="" required="" value={refer} onChange={this.handleChange}/>
					Телефон<input className="text input-text" type="number" name="phone" placeholder="" required="" value={phone} onChange={this.handleChange}/>
					<div className="wthree-text">
						<label className="anim">
							<input type="checkbox" className="checkbox" required="true" />
							<span>I Agree To The Terms  Conditions</span>
						</label>
						<div className="clear"> </div>
					</div>
					<input className="input-submit" type="submit" value="SIGNUP" />
					{error && <div>{error}</div>}
				</form>
				<p>Уже есть аккаунт? <a href="/login"> Войти!</a></p>
			</div>
		</div>
		
	
		
		<ul className="colorlib-bubbles">
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
		</ul>
	</div>
	



            
        )
    }
}

