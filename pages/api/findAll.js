// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { UserModel } from "../../utils/UserModel"

export default function handler(req, res) {

          //document exists });
          UserModel.find({})
          .exec(function (err, users) {
            // var usersList = []

            //     users.forEach(function(user){
            //         usersList[user.email] = {}
            //     })
            var usersList = users.map(function (user, index, users){
                return (user.email)
            })
console.log("userlist from findAll.js: ",usersList)
          if (err) {
            console.log('у вас ошибка: ',err);
            res.send('у вас ошибка: ',err)
          } else {
            //res.cookie('token', user/*, COOKIE_OPTIONS*/)
            res.json(usersList);
            //console.log(user);
          }
        });
    



 // res.status(200).json({email, password})
}
