import axios from 'axios';
import Router from 'next/router';
//var axios = require('axios');
axios.defaults.withCredentials = false;

/*const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
  };
*/
export const getServerSideToken = req => {
  const { signedCookies = {} } = req;
  if (!signedCookies){
      return {};
  }else if (!signedCookies.token){
      return {};
  }
  return { user: signedCookies.token}
}

export const getClientSideToken = () => {
  if (typeof window !== 'undefined'){
    const user = window[WINDOW_USER_SCRIPT_VARIABLE] || {};
    return { user } ;
  }
  return { user: {} }
}
  
const WINDOW_USER_SCRIPT_VARIABLE = '__USER__';

  export const getUserScript = user =>{
    return `${WINDOW_USER_SCRIPT_VARIABLE} = ${JSON.stringify(user)};`
  }

export const authInitialProps = isProtectedRoute => ({req, res}) => {
  const auth = req ? getServerSideToken(req) : getClientSideToken();
  const currentPath = req ? req.url : window.location.pathname; // checking where the req is coming from
  const user = auth.user;
const isAnonymous = !user || user.type !== 'authenticated';

  if (isProtectedRoute && isAnonymous && currentPath !== "/login"){
   return redirectUser(res, "/login");
 }
  return { auth };
}

const redirectUser = (res, path) => {
  if (res){
    Router.push(path);
    res.finished = true;
    return {};
  }
  Router.replace(path)
  return {};
}

export const createUser = async (name, email, password, refer, phone) =>{
  //const response = await axios.post('/api/reg', {name, email, password, refer})
  const response = await instancePost({url: 'reg', data: {name, email, password, refer, phone}})
  console.log(response)
if (response.data){
  Router.push('/login')
}else{
   throw new Error ('Email уже используется')
}
}



const instancePost = axios.create({
  baseURL: process.env.API,
  method:'POST',
  headers: {'X-Custom-Header': 'foobar', 'Content-Type': 'application/json'}
});
export const loginUser = async (email, password) => {
console.log('APIurl: ',process.env.API)
  const{data} = await instancePost({url: 'login', data: {email, password}})

    //const {data} = await axios.post('http://localhost:3000/api/login', { email, password });
    console.log('kek');
    console.log(data);
    console.log('kek2');
  if(typeof window !== 'undefined'){
    window[WINDOW_USER_SCRIPT_VARIABLE] = data || {};
  }

   // cookie.set('token', data)
}

export const logoutUser = async () =>{
  if(typeof window !== 'undefined'){
    window[WINDOW_USER_SCRIPT_VARIABLE] = {};
  }
  //await axios.post('/api/logout')
  await instancePost({url: 'logout'})
  //Router.push('/')
  return redirectUser(res, "/");
}

const instanceGet = axios.create({
  baseURL: process.env.API,
  headers: {'X-Custom-Header': 'foobar'}
});

// export const getUserProfile = async() =>{
//   //const {data} = await axios.get('/api/profile');
//   const {data} = instanceGet({url: 'profile', method:'get'})
//   return data;
// }

export const getBtcPrice = async() =>{
  const btcprice = await axios.get('https://api.coindesk.com/v1/bpi/currentprice/usd.json')
  console.log(btcprice.data)
  return btcprice.data
}

export const payAdv = async(amount) => {
  const qiwikam = amount
  console.log('eto qiwikam',qiwikam)

  //const qiwi = await axios.post('/api/payadv', {qiwikam})
  const qiwi = await instancePost({url: 'payadv', data: {qiwikam}})

  console.log('eto qiwi',qiwi.data)
  Router.push(qiwi.data.payment_url)
  return qiwi
}