import Link from 'next/link'
import { loginUser, logoutUser, getBtcPrice } from '../lib/auth'
import Image from 'next/image'
import logo from '../public/static/pegas.png'
import {useEffect, useState} from 'react'
import profileicon from '../public/static/profileicon.svg'

const Layout = ({ title, children, auth }) => {

    const [style, setStyle] = useState({display: 'none'});
    const { user = {} } = auth || {}
    console.log(user)
    //const {btc = {}} = btc || {}
    return(
    <div className = "root">
        <div className="fulltop">
        <div className="holder">
        
            
            
            <div className="topdiv1">
            <span><a href="http://localhost:3000"><Image src={logo} width='110px' height='90px'/></a></span>
            </div>
                {/*<Link href="">
                    <a>Курс биткоина(USD): {btcPrice}</a>
             </Link>*/}
            <div>
                
                
                {user.email ? (
                   
                <div className="topdiv2">
                    {/* <Link href="/profile">
                        <a>Profile</a>
                    </Link> */}
                
                <div className="emai" onMouseEnter={e =>{
                    setStyle({display: 'flex'})
                }}
                onMouseLeave={e => {
                    setStyle({display: 'none'})
                }}
                >
                    
                <button className="emaibut">
                    <div className="imageBox"><Image alt="user-icon" src={profileicon} width='24px' height='24px'/></div>
                    <div className="divemai">
                        {user.email || "Guest"} <i className="arrow"></i>
                    </div>
                </button>
                
                <div className="dropdown" style={style}>
                    <button>Настройки</button>
                    <button>Реферальная программа</button>
                    <button onClick={logoutUser}>Выход</button>
                </div>
                </div>
                </div>
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
            .dropdown button{
                clear: both;
    list-style: none;
    display: block;
    padding: 0 10px;
    margin: 0;
    float: left;
    line-height: 40px;
    color: rgb(33, 33, 33);
    background: white;
    border: 1px solid #ccc
            }
            .dropdown button:hover{
               background: #ccccf5;
            }
             .arrow{
                position: absolute;
    width: 10px;
    height: 10px;
    top: 50%;
    text-align: center;
    right: 0px;
    border-width: 5px 5px 0 5px;
    border-style: solid;
    border-color: rgba(0,0,0, 0.3) transparent;
             }
            .fulltop{
                background: rgba(0,90,155,0.1);
                width: 100%;
            }
            .dropp{
                
                margin-left: 8px;
    position: relative;
    border-radius: 4px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
            }
            .divemai{
                position: relative;
                bottom: 7px;
                font-style: normal;
                font-weight: normal;
                font-size: 17px;
                line-height: 20px;
                letter-spacing: 0.1px;
                color: rgb(13, 13, 63);
                padding-right: 0px;
                display: inline-block;
                width: 151px;
                margin-bottom: -5px;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            .imageBox{
                width: 24px;
    height: 24px;
    margin-right: 10px;
    display: inline-block;
            }
            .emaibut :hover{
                background: rgb(245, 247, 248);
    transition: all 0.2s ease-in-out 0s;
            }
            .emaibut{
                background-color: transparent;
    border: none;
    border-radius: 4px;
    padding: 6px 0px 6px 15px;
    cursor: pointer;
    max-width: 280px;
    text-align: left;
    position: static;
    top: 0px;
    height: 36px;
    width: 100%;
    outline: 0px !important;
            }
            .emai :hover{
                background: rgb(245, 247, 248);
    transition: all 0.2s ease-in-out 0s;
            }
            .emai{
                max-width: 280px;
                min-width: 270px;
                border-radius: 4px;
            }
            .dropdown{
                position: absolute;
                flex-direction: column;
                row-gap: 0.5em;
                top: 3.3em;
                background: white;
                max-width: 280px;
                min-width: 270px;
    
            }
            .topdiv2{
                display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: end;
    justify-content: flex-end;
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
    
    display: grid;
    -webkit-box-align: center;
    place-items: center stretch;
    grid-template-columns: 1.5fr 1fr;
    justify-self: center;
}
            }
            .root{
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
            }
            .navbar {
                width: 100%;
                display: flex;
                justify-content: space-around;
            }
            a {
                margint-right: 0.5em;
            }
            button {
                text-decoration: underline;
                padding: 0;
                font:inherit;
                cursor: pointer;
                border-style: none;
                color: rgb(0,0,248)

            }
            `}
        </style>
        
    </div>
)}
export default Layout;