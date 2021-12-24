import Cookies from "cookies";
import Router from 'next/router';
export default function logout(req, res){

    var keys = ['keyboard cat']
    const cookies = new Cookies(req, res, { keys: keys })

    cookies.set('token')
    cookies.set('token.sig')
    res.status(204);
}