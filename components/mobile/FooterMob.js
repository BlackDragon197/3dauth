import styled from 'styled-components'

const NavbarItem = styled.nav`
    display: flex;
    margin: ${props => props.margin};
`
const Logo = styled.a`
    font-style: normal;
    font-weight: 500;
    font-size:18px;
    line-height:21px;
    color: #332501;
    font-family: Gilroy;
`
const NavBtn = styled.a`
font-family: Gilroy;
font-style: normal;
font-weight: 400;
font-size: 3vw;
line-height: 140%;
display: flexbox;
color: #7B7B7B;
cursor: pointer;
:hover{
    color: #15274E;
}
`
const TopBarMenu = styled.div`
display: flex;
row-gap: 1rem;
//width: 100%;
//margin-left:12.240vw;
flex-direction: column;
    width: 80%;
    margin: auto;
align-items: flex-start;
margin-top: 25px;
flex-direction: column;

`
const Container = styled.div`
//width: 100%;
width: 100%;
display: flex;

margin: auto;
position: relative;
background: #F7F8FB;
flex-direction: column;
align-items: flex-start;
`
const AddBtn = styled.a`
width: ${props => props.width};
height: 3.5em;
font-family: Gilroy;
font-style: normal;
font-weight: 600;
font-size: 3vw;
line-height: 120%;
color: #FFFFFF;
display: flex;
justify-content: center;
align-items: center;
box-sizing: border-box;
border-radius: 6px;
position: relative;
cursor: pointer;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
transition: 500ms;
left: ${props => props.left};
background: ${props => props.background};
`

export default function Block(){
    
    return (
        <Container> 
            <div className="foot1"><img src="/footer/1.png" /></div>
            <div className="footmenu">
                
                <TopBarMenu>
                <div className="wrapitem flexwrap"  > 
                ООО «ПЕГАС КЕПИТАЛ»<br /><br />Россия, город Новосибирск,<br/> улица Чаплыгина 93
                <div className="footicons"><br />
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <a className="foota" href="">
                        <img src="/footer/you.png" />
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100074509421469">
                        <img src="/footer/face.png" />
                        </a>
                        <a href="https://instagram.com/pegas_capital?utm_medium=copy_link">
                        <img src="/footer/insta.png" />
                        </a>
                        <a href="">
                        <img src="/footer/teleg.png" />
                        </a>
                    </div>
                </div>
                </div>
        <NavbarItem margin="0 6vw 0 0">
            <Logo>
                <img src="/footer/logo.png" />
            </Logo>
        </NavbarItem>
        <NavbarItem>
                <NavBtn href="/deposits">
                Инвестиционные пакеты
                </NavBtn>
            </NavbarItem>
            <NavbarItem>
                <NavBtn href="/faq">
                Faq
                </NavBtn>
            </NavbarItem>
            <NavbarItem>
                <NavBtn>
                Помощь
                </NavBtn>
            </NavbarItem>
            <NavbarItem>
                <NavBtn  href="/#contact">
                Заказать звонок
                </NavBtn>
            </NavbarItem>
            <NavbarItem >
                <NavBtn  href="/#onas">
                О Pegas
                </NavBtn>
            </NavbarItem>
            
    </TopBarMenu>

            </div>
            <div className="footwrap">
                
                
                <div className="wrapitem"  > 
                <span style={{fontWeight: '700'}}>0 800 94 02 12</span><br/><span >Pegascapital@mail.ru</span>
                </div><br />
                <div className="wrapitem"  > 
                <span style={{fontWeight: '700'}}>Хотите узнать больше?</span><br /><span>Переходите в телеграм канал</span><br/>
                <br /><br />
                <AddBtn width="30vw" background="#0085FF" >Перейти
        </AddBtn>
                </div>
            </div>
            <style jsx>
            {`
            .foota{
                width: 30px;
            }
            .flexwrap{
                display: flex;
                flex-direction: column;
                text-align: left;
            }
            .wrapitem{
                font-family: Gilroy;
                font-style: normal;
                font-weight: 500;
                font-size: 3vw;
                line-height: 140%;
                color: #3D3D3D;
                text-align: left;
            }
            .footwrap{
                display: flex;
                width: 80%;
                justify-content: flex-start;
                flex-direction: column;
                align-items: flex-start;
                margin: auto;
            }
            .footmenu{
                width: 100%;
                margin-bottom: 30px;
            }
            .foot1{
               padding-left: 12vw;
               margin-right: 12vw;
            }
            `}
        </style>
        </Container>

    )
}