const next = require('next');
const express = require('express');
//const { default: axios } = require('axios');
const axios = require('axios');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const { response } = require('express');
const { Router } = require('next/router');
const cors = require('cors')

const dev = process.env.NODE_ENV !== 'production'; // !==
const port = process.env.PORT || 3000;
const app = next({dev});
const handle = app.getRequestHandler();



const { Schema } = mongoose;

mongoose.connect('mongodb+srv://1streact:1streact@cluster0.gc5rj.mongodb.net/mytable?retryWrites=true&w=majority');

//mongoose.connect('mongodb://1streact:1streact@cluster0-shard-00-00.gc5rj.mongodb.net:27017,cluster0-shard-00-01.gc5rj.mongodb.net:27017,cluster0-shard-00-02.gc5rj.mongodb.net:27017/mytable?ssl=true&replicaSet=atlas-z8u3u0-shard-0&authSource=admin&retryWrites=true&w=majority')

const Schem = new Schema({
    name: String,
    email: { type : String , unique : true, required : true, dropDups: true },
    password: String,
    refer: String,
    date: { type: Date, default: Date.now }
})

class UserClass {
    get userName(){

    }

    get userEmail(){

    }

    set userName(name){
        this.name = name;
    }
    set userEmail(email){
        this.email = email;
    }
    set userPassword(password){
        this.password = password;
    }
    set ref(refer){
        this.refer = refer;
    }

    static findByEmail(email){
    return this.findOne({email})
}
}

Schem.loadClass(UserClass);
const UserModel = mongoose.model('UserModel', Schem);

const doc = new UserModel({
    name: "name",
    email: "emailo@mail.net",
    password: "password",
    date: { type: Date, default: Date.now}
})


//doc.save();
// https://stackoverflow.com/questions/59716335/axios-get-request-to-mongodb-returns-empty-data
//https://mongoosejs.com/docs/queries.html
const AUTH_USER_TYPE = "authenticated";
const COOKIE_SECRET = 'afacacasc';
const COOKIE_OPTIONS = {
    httpOnly: true,
    secure: !dev,
    signed: true
};


app.prepare().then(() => {
    const server = express(); 
    


    server.use(express.json());
    server.use(cookieParser(COOKIE_SECRET));
    server.use(cors())

server.post('/api/reg', async (req, res) =>{
    const {name, email, password, refer} = req.body;

    UserModel.countDocuments({email: email}, async function (err, count) { 
        if(count>0){
            res.json(null)
        }else{
            const doc = new UserModel({
                name: name,
                email: email,
                password: password,
                refer: refer
            })
            const mem = await doc.save()
          //doc.save()
          try{
              const mem = await doc.save()
            }
          catch(er){
console.log(er)
          }

            res.json(mem)
        }
})
})



server.post('/api/logout', (req,res) =>{
    res.clearCookie('token', COOKIE_OPTIONS)
    res.sendStatus(204);
})


    // const crypto = require('crypto')
    // const request = require('request')
     
    // const apiKey2 = '3FJLtxjxA6dq6CMwMKhU8TBh4aflv1YgGBdbph1w';
    // const apiSecret2 = 'Y5rXB4CMwtpEeDSDnhM5h3LHYPcgr9f5fn9AGg5I';
    
    // const apiKey = 'MY7fL7xnAOskifWlwSWaD3NQB3BWzXBxQkrOfxMw';
    // const apiSecret = 'gGFKOPnmyxYIdwBcnFFm4ISHwcd08eFVkcgNtqIK';
    
   
// server.post('/api/payadv' , async(req,res) =>{
// const {qiwikam} = req.body
// console.log(req.body)
// const apiPath = '/v3/auth/deposit';
// const nonce = Date.now().toString()
// const body = {
//     'currency': 'rub',
//     'amount': qiwikam,
//     'payment_service': 'default'
//   }
// let signature = `${apiPath}${nonce}${JSON.stringify(body)}`
 
// const sig = crypto.createHmac('sha384', apiSecret).update(signature)
// const shex = sig.digest('hex')

//  const options = {
//       url: `https://api.kuna.io${apiPath}`,
//       headers: {
//         'kun-nonce': nonce,
//         'kun-apikey': apiKey,
//         'kun-signature': shex
//       },
//       body: body,
//       json: true
//     }
// let id ;
//  request.post(options, async (error, response, body) => {
//     console.log(body);
//     //console.log(response);
//     console.log(error);
//     id = await body.deposit_id;
//     console.log('это ид: ',id)
//     console.log(qiwikam)
// res.json(body)
//     // const apiPath2 = '/public-api/payment-invoices';
//     // const nonce2 = Date.now().toString()
  
  
//     // const body2 = {
//     //     "public_key": "rub public key",
//     //     "reference_id": id,    
//     //     "description": "string",
//     //     "service": "qiwi_rub_hpp",      
      
//     //     "service_fields": {
//     //       "phone": "+380953230576"
//     //     },
//     //     "currency": "rub",
//     //     "amount": qiwikam
//     // }  
  
//     // let signature2 = `${apiPath2}${nonce2}${JSON.stringify(body2)}`
     
//     // const sig2 = crypto.createHmac('sha384', apiSecret).update(signature2)
//     // const shex2 = sig2.digest('hex')
//     // const options2 = {
//     //         url: `https://paygate.kuna.io${apiPath2}`,
//     //         headers: {
//     //           'kun-nonce': nonce,
//     //           'kun-apikey': apiKey,
//     //           'kun-signature': shex
//     //         },
//     //         body: body2,
//     //         json: true
//     //       }
//     //       console.log(options2.headers)
//     //       request.post(options2, async (error, response, body) => {
//     //         console.log(body);
//     //         //console.log(response);
//     //        // console.log('kek');
//     //         //console.log(error);
//     //       })

//   })

//   const data = await axios.post(options.url, {data: options.data, headers: options.headers}) 
// const id = data.data.deposit_id

 

        // const options3 = {
        //     url: `https://paygate.kuna.io${apiPath2}`,
        //     body: body2,
        //     json: true
        //   }
  
//    const data2 = await axios.post(options2.url, {data: options2.body}, options2.headers) 
// console.log(data2.body)

//})

// server.get('/api/profile', async (req,res) => {
//     const { signedCookies = {} } = req;
//     const { token } = signedCookies;
//     if (token && token.email ){
//         console.log('token is ok', token.email)
//         // const {data} = await axios.get('http://localhost:3000/getUser', { 
//         //     data: {
//         //         email: token.email,
//         //         password: token.password 
//         //     }
//         // });
//         //const userProfile = data.find(user => user.email === token.email);
//         return res.status(200).json(/*{user: userProfile}*/token);
        
//     }else{
//     res.status(404);//срабатывает этот срипт
//     }
// })

// server.get('*', (req, res) => {
//     return handle(req, res);
// })

    // server.listen(port, err =>{//port 3000
    //     if (err) throw err;
    //     console.log(`Listening on port ${port}`)
    // })
})