import axios from "axios";
import { UserModel } from "../../utils/UserModel"

export default async function handler(req, res) {

    if (req.method === 'POST') {
        // Process a POST request
        const {name, email, password, refer, phone, summ, dateEnd, currentDep, available} = req.body;
    const requestInstance = axios.create({
        baseURL: process.env.API,
        headers: {'Content-Type': 'application/json'}
    })
    try{
        const filter = {email : email}
        const update = {name : name,
            password : password,
            refer : refer,
            phone : phone,
            summ : summ,
            dateEnd : dateEnd,
            currentDep : currentDep,
            available : available}
        let doc = await UserModel.findOneAndUpdate(filter, update)
        console.log("doc1:", doc)
        
}catch(e){
    console.log('errorrr:', e)
}
res.status(200).json({status:"okkk"})
} else if(req.method === 'OPTIONS'){
        // Handle any other HTTP method
        res.status(200).json({status:"okkk"})
      }
   // res.status(200).json({email, password})
  }