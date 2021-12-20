import { UserModel } from "../../utils/UserModel"


export default async function reg(req, res) {

    if(req.method === 'POST')
    {
        const {name, email, password, refer} = req.body;
        
        UserModel.countDocuments({email: email}, async function (err, count) { 
            if(count>0)
            {
                res.json(null)
            }
            else
            {
                const doc = new UserModel({
                    name: name,
                    email: email,
                    password: password,
                    refer: refer
                })
                    //const mem = await doc.save()
                    //doc.save()
                try
                    {
                    const mem = await doc.save()
                    res.json(mem)
                    }
                catch(er)
                {
                        console.log(er)
                }

                
            }
        })
    }
    else if(req.method === 'OPTIONS'){
        // Handle any other HTTP method
        res.status(200).json({status:"okkk"})
      }

}