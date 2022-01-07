import Router from "next/router";
import * as React from "react";
import { loginUser, createUser, getUserProfile, authInitialProps} from "../../lib/auth";
import { useRouter } from "next/router";
import { UpdateModel } from "../../utils/UpdateModel"
import axios from "axios";


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
    available:''
};

handleChange = event => {
    this.setState({[event.target.name]: event.target.value});
}

updateUser (name, email, password, refer, phone, summ, currendDep, dateEnd, available){
    const updateModel = new UpdateModel(name, email, password, refer, phone, summ, currendDep, dateEnd, available)
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
    const {name, email, password, refer, phone, summ, currendDep, dateEnd, available} = this.state;

    event.preventDefault();
    this.setState({error: "", isLoading: true})
    //console.log(this.state);
    
    const updateModel = new UpdateModel(name, email, password, refer, phone, summ, currendDep, dateEnd, available)
    const requestInstance = axios.create({
        method:'POST',
        baseURL: process.env.API,
        headers: {'Content-Type': 'application/json'}
    })
    const user = requestInstance({url: 'update',data: updateModel})
    console.log("update: ",user)

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
        const {name, email, password, refer, error, phone, isLoading, summ, currendDep, dateEnd, available} = this.state

        return(
          
	<div className="main-w3layouts">
		<h1> Регистрация </h1>
		<div className="main-agileinfo">
			<div className="agileits-top">
				<form onSubmit={this.handleSubmit} style={{color: 'white'}}>
					ФИО<input className="text input-text" type="text" name="name" placeholder="" required="" value={name} onChange={this.handleChange}/><br />
					Email<input className="text email input-email" type="email" name="email" placeholder="" required="" value={email} onChange={this.handleChange}/>
					Пароль<input className="text input-password" type="password" name="password" placeholder="" required="" value={password} onChange={this.handleChange}/> <br />
					ID пригласившего:<input className="text input-text" type="text" name="refer" placeholder="" required="" value={refer} onChange={this.handleChange}/>
					Телефон<input className="text input-text" type="number" name="phone" placeholder="" required="" value={phone} onChange={this.handleChange}/>
                    summ<input className="text input-text" type="number" name="summ" placeholder="" required="" value={summ} onChange={this.handleChange}/>
                    currentDep<input className="text input-text" type="text" name="currendDep" placeholder="" required="" value={currendDep} onChange={this.handleChange}/>
                    dateEnd<input className="text input-text" type="text" name="dateEnd" placeholder="" required="" value={dateEnd} onChange={this.handleChange}/>
                    available<input className="text input-text" type="number" name="available" placeholder="" required="" value={available} onChange={this.handleChange}/>
					<div className="wthree-text">
						<label className="anim">
							<input type="checkbox" className="checkbox" required="" />
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

    </div>         
        )
    }
}

