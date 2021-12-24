import React from 'react'
import { loginUser } from "../../lib/auth";
class LoginForm extends React.Component{

    handleSubmit = event => {
        const {email, password} = this.state;
    
        event.preventDefault();
        this.setState({error: "", isLoading: true})
        //console.log(this.state);
        
    }


    render(){
        return(
        <form onSubmit={this.handleSubmit}>
					<input className="text email input-email" type="email" name="email" placeholder="Email" required="" value={email} onChange={this.handleChange}/>
					<div className="wthree-text">
						
						<div className="clear"> </div>
					</div>
					<input className="input-submit" type="submit" value="Найти" style={{width: '94.5%'}}/>
                    {error && <div>{error}</div>}
				</form>)
    }
}
