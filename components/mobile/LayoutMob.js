import Link from 'next/link'
import { loginUser, logoutUser, getBtcPrice } from '../../lib/auth'
import Image from 'next/image'
import logo from '../../public/pegas.png'
import {useEffect, useState} from 'react'
import profileicon from '../../public/profileicon.svg'
import MobileMenuProfile from './../mobile/MobileMenuProfile'
const Layout = ({ title, children, auth }) => {

    const { user = {} } = auth || {}
    console.log(user)
    //const {btc = {}} = btc || {}
    return(
    <div className = "root">
        <div className="fulltop">
        <div className="holder">
        
            
            
            <div className="topdiv1">
            <span><a href="https://pegascapital.herokuapp.com/"><Image src={logo} width='110px' height='90px'/></a></span>
            </div>
                {/*<Link href="">
                    <a>Курс биткоина(USD): {btcPrice}</a>
             </Link>*/}
            <div>
                
                
                {user.email ? (""
                   
               
                ) : ( // UnAuth Navigation
                <div className="topdiv2">
                    <Link href="/registration">
                        <a>Registration</a>
                    </Link> 
                    <Link href="/login">
                        <a>Login</a>
                    </Link>
                </div>
                )
                }
            </div>
            <div>
            
            </div>
        </div>
        </div>
        <h1>{title}</h1>
        {children}

        <style jsx>
            {`
            .fulltop{
                background: rgba(0,90,155,0.1);
                width: 100%;
            }
            .topdiv2{
                position: absolute;
            }
            .topdiv1{
                display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: start;
    justify-content: flex-start;
    height: 100%;
            }
            .holder {
                font-size: 20px;
   
    padding: 0px 20px;
    width: 100%;
    max-width: 1180px;
    margin: 0px auto;
    box-sizing: border-box;
    color: rgb(51, 51, 51);
    
    display: flex;
    -webkit-box-align: center;
    place-items: center stretch;
   
    justify-content: space-around;
}
            
            .root{
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
            }
            `}
        </style>
        
    </div>
)}
export default Layout;