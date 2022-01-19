// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { UserModel } from "../../utils/UserModel"

export default function handler(req, res) {
  const {email} = req.body
    console.log("req.body: ",req.body)
    console.log("email: ",email)
          //document exists }); 
          UserModel.findOne({'email': "emailo@mail.nen"})
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
          
       
    



 // res.status(200).json({email, password})
}
