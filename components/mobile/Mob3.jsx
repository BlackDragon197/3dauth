import styled from 'styled-components'
import Image from 'next/image'
import Heading3Mob from '../../components/Heading3Mob.jsx'

//import ImgSvg1 from '../block3.1.svg'
import {Svg1, Svg2, Svg3, Svg4} from './../svgs/svg1'

const AddPostBtn = styled.a`
width: 75vw;
height: 6vh;
bottom: 0;
font-family: Gilroy;
font-style: normal;
font-weight: 500;
font-size: 3.5vw;
line-height: 4.5vw;
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
    width: 78vw;
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


const BLock = styled.div`
    width:100%;
    padding-top: 7.593vh;
    justify-content: center;
    align-items: center;
    background: url('/block3.3.png'),url('/block3.2.png') ,url('/block3.1.png');
    background-size: 70%, 50%, 100%;
    background-repeat: no-repeat, no-repeat, no-repeat;
    background-position: center right, bottom 50% left, top right;
    display: flex;
    flex-direction: column;
`

const BLockIn = styled.div`
    //width:60%;
    //height: 60.444vh;
    padding-top: 7.593vh;
    //justify-content: start;
    //align-items: center;
    margin-top: ${props => props.top};
    display: flex;
    justify-content: center;
    margin-left: ${props => props.left};
`

const Content = styled.div`
    width: 80%;
    background: #FFFFFF;
    box-shadow: 0px 14px 22px rgba(28, 64, 141, 0.13);
    border-radius: 11px;
    display: flex;
    flex-direction: column;
    justify-content: left;
    height: ${props => props.height};
    //top: ${props => props.top};
    text-align: left;
`

const ContentBox = styled.div`
display: flex;
flex-direction: column;
position: relative;
`

const BlockHead = styled.span`
font-family: 'Lato', sans-serif;;
font-style: normal;
font-weight: bold;
font-size: 4vw;
line-height: 5vw;
color: #15274E;
margin-left: 1rem;
margin-right: 2rem;
display: block;
margin-top: 1vh;
`

const BlockBody = styled.span`
font-family: 'Lato', sans-serif;;
font-style: normal;
display: block;
font-weight: 400;
margin-top: 1vh;
font-size: 3vw;
line-height: 3.4vw;
color: #15274E;
padding-right: 2em;
margin-left: 1rem;
margin-right: 2rem;
margin-bottom: 2rem;
`

const ImgCont = styled.div`

margin-top: 1rem;
margin-left: 1rem;
box-sizing: border-box;
width: fit-content;
`

const Imag = styled.img`
src: ${props => props.src};
//width: 100%;
//height: 100%;
`

const meta = [  {desc2:"Зарегистрироваться можно онлайн или в отделение компании", desc:"Регистрация в системе Pegas Capital", content:Svg1,left:"",  top:"", height:''},
                {desc2:"Открывайте депозит и начинайте зарабатывать вместе с нами.", desc3: "Подробная инструкция ниже", desc:"Открытие депозита в личном кабинете ", content:Svg2,left:"",  top:"", height:''},
                {desc2:"Вносите средства на депозит любым удобным способом.", desc:"Пополнение баланса в личном кабинете", content:Svg3, left:"",   top:"", height:''},
                {desc2:"Наши клиенты имеют возможность выводить накопленные средства в любое время и любым удобным способом.", desc:"Получение прибыли каждый рабочий день", content:Svg4, left:"", top:"", height:''}
            ];

const peep = meta.map((src) => 
       <BLockIn top={src.top} left={src.left}>
           
            <Content top={src.top} height={src.height}>
           <ImgCont>
            <src.content />
            </ImgCont>
                <ContentBox>
                    <BlockHead>
                        {src.desc}
                    </BlockHead>
                    <BlockBody>
                        {src.desc2}
                        <br/><br/>
                        {src.desc3}
                    </BlockBody>
                </ContentBox>
            </Content>
       </BLockIn>    
)
/*
<content top={src.top} height={src.height}>
    <img src={src.content}>
    <div>
        <span>{src.desc}
        </span>
        <span>{src.desc2}
        </span>
    </div>
</content>
*/
export default function Mob3(){
    
    return (
        
        <BLock>
            <Heading3Mob />
                <div>
                {peep}
                </div>
                <div style={{marginBottom:'15vh', marginTop: '10vh', display: 'flex', justifyContent:'center'}}>
                <AddPostBtn>Бесплатная регистрация 
                <Image src='/lock.png' width="11%" height="14%" className="lock" />
                    
                   
                </AddPostBtn>
                </div>
        </BLock>

    )
}