

export default function payadv(req, res){

    const crypto = require('crypto')
    const request = require('request')
     
    const apiKey2 = '3FJLtxjxA6dq6CMwMKhU8TBh4aflv1YgGBdbph1w';
    const apiSecret2 = 'Y5rXB4CMwtpEeDSDnhM5h3LHYPcgr9f5fn9AGg5I';
    
    const apiKey = 'MY7fL7xnAOskifWlwSWaD3NQB3BWzXBxQkrOfxMw';
    const apiSecret = 'gGFKOPnmyxYIdwBcnFFm4ISHwcd08eFVkcgNtqIK';

    const {qiwikam} = req.body
console.log(req.body)
const apiPath = '/v3/auth/deposit';
const nonce = Date.now().toString()
const body = {
    'currency': 'rub',
    'amount': qiwikam,
    'payment_service': 'default'
  }
let signature = `${apiPath}${nonce}${JSON.stringify(body)}`
 
const sig = crypto.createHmac('sha384', apiSecret).update(signature)
const shex = sig.digest('hex')

 const options = {
      url: `https://api.kuna.io${apiPath}`,
      headers: {
        'kun-nonce': nonce,
        'kun-apikey': apiKey,
        'kun-signature': shex
      },
      body: body,
      json: true
    }
let id ;
 request.post(options, async (error, response, body) => {
    console.log(body);
    //console.log(response);
    console.log(error);
    id = await body.deposit_id;
    console.log('это ид: ',id)
    console.log(qiwikam)
res.json(body)
   
  })
}