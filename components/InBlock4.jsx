import styled from 'styled-components'
import Image from 'next/image'
import Heading from '../components/Heading4.jsx'
import React, { Component } from 'react';


const BLock = styled.div`
    width:100%;
    //height: 240.833vh;
    padding-top: 7.593vh;
    justify-content: center;
    align-items: top;
    display: flex;
    flex-direction: column;
`

const Part1 = styled.div`
display: inline-block;
    width:100vw;
    //height: 77vh;
    height: ${props => props.height};
    background: url(${props => props.src});
    background-repeat: no-repeat;
    background-position: top center;
    background-size: ${props => props.backsize} ;  
`

const ContentZone1 = styled.div`
height: ${props => props.height};
width: 54.427vw;
margin: ${props => props.margin};
//background: url(${props => props.back});

`

const ContentZone2 = styled.div`
height: ${props => props.height};
width: 58vw;
margin: 13.556vh 0 0 20vw;
/*background: url('/static/block4/back22.png');
background-repeat: no-repeat;
    background-position: top center;
    background-size: 100%;*/
    background: rgba(255, 255, 255, 0.5);
box-shadow: 0px 14px 22px rgba(28, 64, 141, 0.13);
backdrop-filter: blur(8px);
/* Note: backdrop-filter has minimal browser support */

margin: 13.556vh 0 0 20vw;
border-radius: 11px;
z-index: 2;
`

const Hh = styled.h3`
font-family: 'Lato', sans-serif;
font-style: normal;
font-weight: bold;
font-size: ${props => props.fsize};
line-height: 2.813vw;
color: #15274E;
margin: 0.8rem 0;
`

const Textbox = styled.span`
width: ${props => props.width};
font-family: 'Lato', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 1.042vw;
line-height: 1.250vw;
color: #15274E;
color: ${props => props.color};
`

const Dig = styled.div`

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

/*
let imag1 = document.querySelector("Dig");
let rect = imag1.getBoundingClientRect();
for (var key in rect) {
    if(typeof rect[key] !== 'function') {
      let para = document.createElement('p');
      para.textContent  = `${ key } : ${ rect[key] }`;
      document.body.appendChild(para);
    }
  }
*/
export default function Block(){
    
    return (
        
        <BLock id="invest">
            <Heading />
            <Part1 src={'/static/block4/back1.png'} backsize={'72% 110%'} height='77vh'>
                <ContentZone1 height="27.593vh"  margin="15.556vh auto">
                    <Hh fsize="2vw">
                        Депозит — Криптовалюта
                    </Hh>
                    <Textbox width="44.740vw">
                    Инвестиции под 14% ежемесячной комиссии с минимальным депозитом от 10 000 рублей.<br /> <br /> Пополнение и снятие депозита с помощью криптовалюты, безналично либо в офисе компании</Textbox>
                    <Hh style={{top: 0}} fsize="1.302vw">
                        Как это работает?
                    </Hh>
                    <Textbox width="44.740vw">
                    Вы инвестировали 10 000 рублей. Уже через 3 дня вам начинают начислять проценты. За это время компания создаёт отдельный криптокошелёк для клиента и команда трейдеров начинает торговлю на бирже. Проценты можно выводить, имея от 1 000 рублей начисленных процентов. Вывод тела депозита можно заказать в любой момент, компания вернёт его вам в течение 14 рабочих дней.
                    </Textbox>
                    <AddBtn  width="13.667vw" background="#15274E" left="14.240vw" style={{position:'relative', bottom:'-10%', left:'0'}}>
                            Выбрать программу                   
                   
                </AddBtn>
                </ContentZone1>
            </Part1>
            <Part1 src={'/static/block4/back2.png'} backsize={'85%'} height={'65vh'}>
                <ContentZone2 height="42vh">
                    <ContentZone1 height="24.593vh" margin="15.556vh 0 0 2.8vw">
                        <Hh fsize="2vw">
                            Депозит — Акции
                        </Hh>
                        <Textbox width="44.740vw">
                        Инвестиции под 16% ежемесячной комиссии с минимальным депозитом от 100 000 рублей. Ввод и вывод средств через биткоин, по реквизитам карты либо в офисе компании. Начисление процентов начинается уже на третий день. За это время компания оформляет отдельный счёт на бирже и подбирает личного брокера для клиента.
                        </Textbox><br /><br />
                        <Textbox width="44.740vw">
                        Проценты можно выводить, имея на счету от 10 000 рублей начисленных процентов. Вывод тела депозита можно заказать в любой момент, компания вернёт его вам в течение 21 рабочего дня. Данный индекс позволяет клиенту участвовать в ico, которое будет проведено в 2022 году, клиент получит бесплатные коины, которые сможет обменять на реальные деньги.
                        </Textbox>
                        <AddBtn width="13.667vw" background="#15274E" left="14.240vw" style={{position:'absolute', bottom:'6%', left:'2.5vw'}}>
                            Выбрать программу

                </AddBtn>
                    </ContentZone1>
                </ContentZone2>
            </Part1>
            <Part1 height="77vh">
                <Dig style={{width: "20vw", height: "19.39vw", position:"absolute", left: "68vw"}}>
                    <Image src="/static/block4/gold1.png" layout="fill" id="img-gold1"/>

                </Dig>
                <ContentZone2 height="80vh">
                    <ContentZone1 height="100%" margin="0 0 0 2.8vw" style={{position:'relative', display:'block'}}>
                        <Hh fsize="2vw">
                            Депозит — Золото
                        </Hh>
                        <Textbox width="44.740vw">
                        Инвестиции под 18% ежемесячной комиссии с минимальным депозитом от 1 000 000 рублей.<br /><br/> Пополнение и снятие депозита с помощью криптовалюты, безналично либо в офисе компании
                        </Textbox><br/><br/>
                        <Hh>
                            Как это работает?
                        </Hh>
                        <Textbox width="44.740vw">
                        Вы инвестировали 1 000 000 рублей. Данный пакет даёт клиенту личного менеджера. Уже с первого дня вам начинают начислять проценты. Компания подбирает наиболее выгодные предложения по торговле драгоценными металлами и начинает инвестировать. Вывод процентом и тела депозита можно заказать в любой момент, компания вернёт его вам в течение 21 рабочего дня.
                        </Textbox><br/><br/>
                        <Textbox width="44.740vw">
                            В случае хранения депозита без снятия на протяжении 180 дней клиент может оформить выплату в золотых слитках высшей пробы от наших партнёров по стоимости, которая на порядок ниже стоимости на рынке. Сдача слитков в банк позволит клиенту заработать дополнительно 15% от вложенной суммы.
                        </Textbox><br/><br/>
                        <Textbox width="44.740vw">
                        Данный индекс позволяет клиенту участвовать в ico, которое будет проведено в 2022 году, клиент получит бесплатные токены, которые сможет обменять на реальные деньги.    
                        </Textbox><br/><br/>
                        <Textbox width="44.740vw" color="#828690">
                        Возможно внесение депозита золотыми слитками. <br/>
Для информации о внесении депозита золотом обратитесь к оператору
                        </Textbox>
                        <AddBtn  width="13.667vw" background="#15274E" left="14.240vw" style={{position:'relative', bottom:'-2%', left:'0'}}>
                            Выбрать программу                   
                   
                </AddBtn>
                    </ContentZone1>
                    
                </ContentZone2>
                <Dig style={{width: "15vw", height: "25.39vh", position:"relative", bottom: "18vh", left:"10vw", paddingBottom: "01vh"}}>
                    <Image src="/static/block4/gold2.png" layout="fill" id="img-gold1"/>
                </Dig>
                
            </Part1>
              
        </BLock>

    )
}