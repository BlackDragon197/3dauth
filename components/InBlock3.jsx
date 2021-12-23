import styled from 'styled-components'
import Image from 'next/image'
import Heading from '../components/Heading3.jsx'
import Col from '../components/col-3'
//import ImgSvg1 from '../block3.1.svg'
import {Svg1, Svg2, Svg3, Svg4} from './svgs/svg1'

const AddPostBtn = styled.a`
width: 16em;
height: 3.3em;
bottom: 0;
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
    width: 18em;
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
    height: 109.444vh;
    padding-top: 7.593vh;
    justify-content: center;
    align-items: center;
    background: url('/block3.3.png'),url('/block3.2.png') ,url('/block3.1.png');
    background-size: 70%, 50%, 100%;
    background-repeat: no-repeat, no-repeat, no-repeat;
    background-position: center right, bottom 50% left, top right;
`

const BLockIn = styled.div`
    //width:60%;
    //height: 60.444vh;
    padding-top: 7.593vh;
    //justify-content: start;
    //align-items: center;
    margin-top: ${props => props.top};
    position: absolute;
    margin-left: ${props => props.left};
`

const Content = styled.div`
    width: 28.958vw;
    background: #FFFFFF;
    box-shadow: 0px 14px 22px rgba(28, 64, 141, 0.13);
    border-radius: 11px;
    display: flex;
    justify-content: right;
    height: ${props => props.height};
    //top: ${props => props.top};
`

const ContentBox = styled.div`
display: flex;
width: 22.240vw;
flex-direction: column;
position: relative;
`

const BlockHead = styled.span`
font-family: 'Lato', sans-serif;;
font-style: normal;
font-weight: bold;
font-size: 1.563vw;
line-height: 1.875vw;
color: #15274E;
width: 17.188vw;
display: block;
margin-top: 1vh;
`

const BlockBody = styled.span`
font-family: 'Lato', sans-serif;;
font-style: normal;
display: block;
font-weight: 400;
margin-top: 1vh;
font-size: 1.042vw;
line-height: 1.250vw;
color: #15274E;
padding-right: 2em;
`

const ImgCont = styled.div`

margin-top: 0.75rem;
margin-right: 5.5%;
box-sizing: border-box;
`

const Imag = styled.img`
src: ${props => props.src};
//width: 100%;
//height: 100%;
`

const meta = [  {desc2:"Вы вводите все необходимые данные и проходите верификацию в настройках.", desc:"Регистрация в системе Pegas Capital", content:Svg1,left:"18.646vw",  top:"9.630vh", height:'19.444vh'},
                {desc2:"Подробная инструкция по ссылке.", desc:"Открытие депозита в личном кабинете", content:Svg2,left:"18.646vw",  top:"36.481vh", height:'20.741vh'},
                {desc2:"Пополнить депозит можно картой любого банка, криптовалютой и наличными средствами в кассе офиса компании", desc:"Пополнение баланса в личном кабинете", content:Svg3, left:"51.771vw",   top:"9.630vh", height:'27.407vh'},
                {desc2:"Вы можете выводить средства с личного счета Pegas криптовалютой, на карту любого банка или наличными в офисе компании", desc:"Получение прибыли каждый рабочий день", content:Svg4, left:"51.771vw", top:"44.444vh", height:'21.444vh'}
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
export default function Block(){
    
    return (
        
        <BLock>
            <Heading />
                {peep}
                <div style={{position:"relative", top: "72vh", left: "18.646vw", maxWidth:"30%"}}>
                <AddPostBtn href="/registration">Бесплатная регистрация 
                <Image src='/lock.png' width="11%" height="14%" className="lock" />
                    
                   
                </AddPostBtn>
                </div>
        </BLock>

    )
}