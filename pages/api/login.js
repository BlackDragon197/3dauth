import axios from "axios";
import Cookies from "cookies";

export default async function handler(req, res) {

    var keys = ['keyboard cat']
    const cookies = new Cookies(req, res, { keys: keys })
    const AUTH_USER_TYPE = "authenticated";
    const COOKIE_SECRET = 'afacacasc';
    const COOKIE_OPTIONS = {
        httpOnly: true,
        signed: true
    };

    if (req.method === 'POST') {
        // Process a POST request
        const {email, password} = req.body;
    const requestInstance = axios.create({
        baseURL: process.env.API,
        headers: {'Content-Type': 'application/json'}
    })
    try{
    const user = await requestInstance({url: 'getUser',data:{email: email, password: password}
    })
    console.log('tut kek from server.js ', user)
   if(!user.data){
        return res.status(403).send('Invalid email or password');
    } else if(email == user.data.email){
    const userData = {
        password: user.data.password,
        name: user.data.name,
        email: user.data.email,
        type: AUTH_USER_TYPE,
        refer: user.data.refer,
        currentDep: user.data.currentDep,
        summ: user.data.summ,
        dateEnd: user.data.dateEnd
    }
    //console.log(userData)
    cookies.set('token', userData, COOKIE_OPTIONS);
    var token = cookies.get('token', { signed: true })
    //res.send(token);
    console.log(token)
    return res.json(userData)
}
}catch(e){
    console.log('errorrr:', e)
}
      } else if(req.method === 'OPTIONS'){
        // Handle any other HTTP method
        res.status(200).json({status:"okkk"})
      }

    
   // res.status(200).json({email, password})
  }