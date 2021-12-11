import Router from "next/router";
import * as React from "react";
import { loginUser } from "../lib/auth";
import api from "../lib/api"

class LoginForm extends React.Component{
/*hardcoded email password should be cleaned before setting up DB*/ 
state = {
    email:'', 
    password:'',
    error: '',
    isLoading: false,
	show: false
};

showDropdown = event =>{
	this.setState({show: !show})
}

handleChange = event => {
    this.setState({[event.target.name]: event.target.value});
}

handleSubmit = event => {
    const {email, password} = this.state;

    event.preventDefault();
    this.setState({error: "", isLoading: true})
    //console.log(this.state);
    
    loginUser(email, password).then(() => {
        Router.push('/profile');
    })
    .catch(this.showError)
}

showError = err => {
    
    const error = err.response && err.response.data || err.message
    this.setState({ error, isLoading: false })
    console.error(error);
}

    render(){
        const {email, password, error, isLoading} = this.state

        return(
            <div style={{width: '100%'}}>
            <div className="main-w3layouts wrapper">
		<h1> Войти в аккаунт </h1>
		<div className="main-agileinfo">
			<div className="agileits-top">
				<form onSubmit={this.handleSubmit}>
					<input className="text email input-email" type="email" name="email" placeholder="Email" required="" value={email} onChange={this.handleChange}/>
					<input className="text input-password" type="password" name="password" placeholder="Password" required="" value={password} onChange={this.handleChange}/>
					<div className="wthree-text">
						
						<div className="clear"> </div>
					</div>
					<input className="input-submit" type="submit" value="SIGNUP" style={{width: '94.5%'}}/>
                    {error && <div>{error}</div>}
				</form>
				<p>Ещё нет аккаунта? <a href="/registration"> Зарегистрироваться!</a></p>
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


            </div>
        )
    }
}
export default LoginForm;