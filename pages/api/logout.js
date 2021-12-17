import Cookies from "cookies";

export default function logout(req, res){

    var keys = ['keyboard cat']
    const cookies = new Cookies(req, res, { keys: keys })

    cookies.set('token')
    res.sendStatus(204);
}