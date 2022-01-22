// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { UserModel } from "../../utils/UserModel"

export default async function handler(req, res) {
  console.log("req.body: ",req)
  if (req.method === 'POST') {
  const {email} = await req.body
    
    console.log("email: ",email)
          //document exists }); 
          UserModel.findOne({email: email})
          .exec(function (err, users) {
            // var usersList = []

            //     users.forEach(function(user){
            //         usersList[user.email] = {}
            //     })
            var usersList = users
            res.json(usersList);
            })           
            //res.cookie('token', user/*, COOKIE_OPTIONS*/)
            //console.log(user);
  }
 else if(req.method === 'OPTIONS'){
  // Handle any other HTTP method
  res.status(200).json({status:"okkk"})
}
       
    



 // res.status(200).json({email, password})
}
