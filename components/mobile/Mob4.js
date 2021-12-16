import styled from 'styled-components'
import Image from 'next/image'
import Heading from '../../components/Heading4Mob.jsx'
import React, { Component } from 'react';


const BLock = styled.div`
    width:100%;
    //height: 240.833vh;
    justify-content: center;
    align-items: top;
    display: flex;
    flex-direction: column;
`

const Part1 = styled.div`
display: flex;
justify-content: center;
    width:100vw;
    //height: 77vh;
position: relative;
`

const ContentZone1 = styled.div`
width: 80vw;
margin: ${props => props.margin};
//background: url(${props => props.back});

`

const ContentZone2 = styled.div`

width: 80vw;
/*background: url('/block4/back22.png');
background-repeat: no-repeat;
    background-position: top center;
    background-size: 100%;*/
    background: rgba(255, 255, 255, 0.5);
box-shadow: 0px 14px 22px rgba(28, 64, 141, 0.13);
backdrop-filter: blur(8px);
/* Note: backdrop-filter has minimal browser support */

border-radius: 11px;
z-index: 2;
display: flex;
justify-content: flex-start;
flex-direction: column;
`

const Hh = styled.h3`
font-family: 'Lato', sans-serif;
font-style: normal;
font-weight: bold;
font-size: ${props => props.fsize};
line-height: 6vw;
color: #15274E;
margin: 0.8rem 1.5rem;
text-align: left;

`

const Textbox = styled.span`
width: ${props => props.width};
font-family: 'Lato', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 3vw;
line-height: 4vw;
color: #15274E;
text-align: left;
margin: 0 2.5rem 0 1.5rem;
color: ${props => props.color};
`

const Dig = styled.div`

`
const AddBtn = styled.a`

width: ${props => props.width};
height: 7vh;
margin-left: 1.5rem;
font-family: Gilroy;
font-style: normal;
font-weight: 600;
font-size: 3vw;
line-height: 5vh;
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
      document.body.appendChild(para);cd
    }
  }
*/
export default function Mob4(){
    
    return (
        
        <BLock id="invest">
            <Heading />
            <Part1 style={{marginTop: '15vh'}}>
                <div style={{position: 'absolute', zIndex:'1', left: '-10vw', top: '-15vh'}}>
                    <img src="/mobile/block4/2.png" />
                </div>
                <ContentZone2 style={{marginBottom: '15vh'}}>
                    <Hh fsize="5vw">
                    Депозит — Криптовалюта
                    </Hh>
                    <Textbox width="80%">
                    Инвестиции под 14% ежемесячной комиссии с минимальным депозитом от 10 000 рублей. <br/><br/>Пополнение и снятие депозита с помощью криптовалюты, безналично либо в офисе компании</Textbox>
                    <Hh style={{top: 0}} fsize="5vw">
                    Как это работает?
                    </Hh>
                    <Textbox width="80%">
                    Вы инвестировали 10 000 рублей.<br/><br/> Уже через 3 дня вам начинают начислять проценты.<br/><br/> За это время компания создаёт отдельный криптокошелёк для клиента и команда трейдеров начинает торговлю на бирже. <br/><br/>Проценты можно выводить, имея от 1 000 рублей начисленных процентов.<br/><br/> Вывод тела депозита можно заказать в любой момент, компания вернёт его вам в течение 14 рабочих дней.
                    </Textbox>
                    <AddBtn  width="60vw" background="#15274E" style={{marginTop:'5vh', marginBottom: '5vh'}}>
                    Выбрать программу                   
                    </AddBtn>
                    <div style={{position: 'absolute', zIndex:'1', right: '-20vw', bottom: '-15vh', transform:'rotate(-45deg)'}}>
                    <img src="/mobile/block4/2.png" />
                </div>
                </ContentZone2>
            </Part1>
            <Part1 src={'/block4/back2.png'} style={{marginTop: '5vh'}} >
            <div style={{position: 'absolute', zIndex:'1'}}>
                    <img src="/mobile/block4/3.png" />
                </div>
                <ContentZone2 style={{marginBottom: '15vh'}}>
                
                        <Hh fsize="5vw">
                            Депозит — Акции
                        </Hh>
                        <Textbox width="80%">
                        Инвестиции под 16% ежемесячной комиссии с минимальным депозитом от 100 000 рублей. Ввод и вывод средств через биткоин, по реквизитам карты либо в офисе компании. Начисление процентов начинается уже на третий день. За это время компания оформляет отдельный счёт на бирже и подбирает личного брокера для клиента.
                        </Textbox><br /><br />
                        <Textbox width="80%">
                        Проценты можно выводить, имея на счету от 10 000 рублей начисленных процентов. Вывод тела депозита можно заказать в любой момент, компания вернёт его вам в течение 21 рабочего дня. Данный индекс позволяет клиенту участвовать в ico, которое будет проведено в 2022 году, клиент получит бесплатные коины, которые сможет обменять на реальные деньги.
                        </Textbox>
                        <AddBtn width="60vw" background="#15274E" style={{marginTop:'5vh', marginBottom: '5vh'}}>
                            Выбрать программу

                </AddBtn>
                   
                </ContentZone2>
            </Part1>
            <Part1 style={{marginTop: '5vh'}}>
              
                <div style={{position: 'absolute', zIndex:'1', right: '-10vw', top: '-15vh'}}>
                    <img src="/mobile/block4/4.png" />
                </div>
                <ContentZone2 style={{marginBottom: '15vh'}}>
                
                        <Hh fsize="5vw">
                            Депозит — Золото
                        </Hh>
                        <Textbox width="80%">
                        Инвестиции под 18% ежемесячной комиссии с минимальным депозитом от 1 000 000 рублей. Пополнение и снятие депозита с помощью криптовалюты, безналично либо в офисе компании
                        </Textbox><br/>
                        <Hh fsize="5vw">
                            Как это работает?
                        </Hh>
                        <Textbox width="80%">
                        Вы инвестировали 1 000 000 рублей. Данный пакет даёт клиенту личного менеджера. Уже с первого дня вам начинают начислять проценты. Компания подбирает наиболее выгодные предложения по торговле драгоценными металлами и начинает инвестировать. Вывод процентом и тела депозита можно заказать в любой момент, компания вернёт его вам в течение 21 рабочего дня.
                        </Textbox><br/>
                        <Textbox width="80%">
                            В случае хранения депозита без снятия на протяжении 180 дней клиент может оформить выплату в золотых слитках высшей пробы от наших партнёров по стоимости, которая на порядок ниже стоимости на рынке. Сдача слитков в банк позволит клиенту заработать дополнительно 15% от вложенной суммы.
                        </Textbox><br/>
                        <Textbox width="80%">
                        Данный индекс позволяет клиенту участвовать в ico, которое будет проведено в 2022 году, клиент получит бесплатные токены, которые сможет обменять на реальные деньги.    
                        </Textbox><br/>
                        <Textbox width="80%" color="#828690">
                        Возможно внесение депозита золотыми слитками.
Для информации о внесении депозита золотом обратитесь к оператору
                        </Textbox>
                        <AddBtn  width="60vw" background="#15274E" style={{marginTop:'5vh', marginBottom: '5vh'}}>
                            Выбрать программу                   
                   
                </AddBtn>
                
                    
                </ContentZone2>
               
                <div style={{position: 'absolute', zIndex:'1', left: '-10vw', bottom: '0', transform:'rotate(-25deg)'}}>
                    <img src="/mobile/block4/4.png" />
                </div>
            </Part1>
              
        </BLock>

    )
}