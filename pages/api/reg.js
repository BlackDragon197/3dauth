import { UserModel } from "../../utils/UserModel"


export default function reg(req, res) {
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

}