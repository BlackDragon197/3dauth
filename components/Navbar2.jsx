import styled from 'styled-components'
import Image from 'next/image'
// import lockImg from '../public/coin.png'
import Popup from '../components/Popup'
import { useState } from 'react'

const NavbarItem = styled.nav`
    display: flex;
    margin: ${props => props.margin};
`


const Logo = styled.a`
    font-style: normal;
    font-weight: 580;
    font-size:18px;
    line-height:21px;
    color: #332501;
    font-family: Gilroy;
`
const NavBtn = styled.a`
font-family: Gilroy;
font-style: normal;
font-weight: 600;
font-size: 0.938vw;
line-height: 1.094vw;
display: flexbox;
color: #7B7B7B;
cursor: pointer;
:hover{
    color: #15274E;
}
`

const TopBarMenu = styled.div`
display: inline-flex;
column-gap: 2rem;
//width: 100%;
//margin-left:12.240vw;
height: 55px;
align-items: center;
margin-top: 25px;
`

const AddPostBtn = styled.a`
width: 13em;
height: 2.8em;
font-family: Gilroy;
font-style: normal;
font-weight: 600;
font-size: 0.938vw;
line-height: 1.054vw;
color: #FFFFFF;
display: flex;
justify-content: center;
align-items: center;
background: #0085FF;
box-sizing: border-box;
border-radius: 6px;
position: relative;
cursor: pointer;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
transition: 500ms;
:hover{
    width: 14em;
    transition: 500ms;
}
.lock {
    display: none !important;
    transition: 500ms;
}
:hover .lock{
    display: block !important;
    transition: 500ms;
}
`

export default function Navbar(){
    
const [buttonPopup, setButtonPopup] = useState(false);

    return (
<div className="container">
    <TopBarMenu>
        <NavbarItem margin="0 6vw 0 0">
            <Logo>
                <img src="/footer/logo.png" />
            </Logo>
        </NavbarItem>
            <NavbarItem>
                <NavBtn>
                Инвестиционные пакеты
                </NavBtn>
            </NavbarItem>
            <NavbarItem>
                <NavBtn>
                Faq
                </NavBtn>
            </NavbarItem>
            <NavbarItem>
                <NavBtn>
                Помощь
                </NavBtn>
            </NavbarItem>
            <NavbarItem>
                <NavBtn>
                Заказать звонок
                </NavBtn>
            </NavbarItem>
            <NavbarItem  margin="0 3vw 0 0">
                <NavBtn>
                О Pegas
                </NavBtn>
            </NavbarItem>
            
    </TopBarMenu>
    
</div>
    )
}
