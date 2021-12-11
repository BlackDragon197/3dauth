import styled from 'styled-components'

import Navbar2 from '../components/Navbar2'

const Container = styled.div`
//width: 100%;
width: 100%;
display: flex;

height: 54.167vh;
margin: auto;
position: relative;
background: #F7F8FB;
flex-direction: column;
align-items: flex-start;
`

const AddBtn = styled.a`

width: ${props => props.width};
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
            
            
            <div className="foot1"><img src="/static/footer/1.png" /></div>
            <div className="footmenu">
                <Navbar2 />
            </div>
            <div className="footwrap">
                <div className="wrapitem flexwrap"  > 
                ООО «ПЕГАС КЕПИТАЛ»<br /><br />Россия, город Новосибирск,<br/> улица Чаплыгина 93
                <div className="footicons"><br />
                    <div style={{height: '36px', display: 'flex', alignItems: 'center'}}>
                        <a className="foota" href="">
                        <img src="/static/footer/you.png" />
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100074509421469">
                        <img src="/static/footer/face.png" />
                        </a>
                        <a href="https://instagram.com/pegas_capital?utm_medium=copy_link">
                        <img src="/static/footer/insta.png" />
                        </a>
                        <a href="">
                        <img src="/static/footer/teleg.png" />
                        </a>
                    </div>
                </div>
                </div>
                
                <div className="wrapitem"  > 
                <span style={{fontWeight: '700'}}>0 800 94 02 12</span><br /><br />Pegascapital@mail.ru
                </div>
                <div className="wrapitem"  > 
                <span style={{fontWeight: '700'}}>Хотите узнать больше?</span><br /><br />Переходите в телеграм канал
                <br /><br />
                <AddBtn width="8.719vw" background="#0085FF" >Перейти                  
                       
        </AddBtn>
                </div>
            </div>
            <style jsx>
            {`
            .foota{
                width: 30px;
            }
            flexwrap{
                display: flex;
                flex-direction: column;
                align-items: space-between;
            }
            .wrapitem{
                width: 15%
                font-family: Gilroy;
font-style: normal;
font-weight: 500;
font-size: 0.9vw;
line-height: 1.2vw;

color: #3D3D3D;
            }
            .footwrap{
                display: flex;
                flex-wrap: wrap;
                padding-left: 12vw;
                width: 1140px;
                
justify-content: space-around;
            }
            .footmenu{
                width: 1140px;
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