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
                    CTD - CRYPTO TRADING DEPOSIT
                    </Hh>
                    <Textbox width="80%">
                    Инвестиции под 14% ежемесячной комиссии с минимальным депозитом от 10 000 рублей.</Textbox>
                    <Hh style={{top: 0}} fsize="5vw">
                    Как это работает?
                    </Hh>
                    <Textbox width="80%">
                    Инвестируя 10 000 рублей уже через 3 дня ваш депозит начинает приносить вам прибыль. В течение трех дней компания создаёт отдельный криптокошелёк для клиента, после чего команда трейдеров начинает обслуживание депозита. Проценты можно выводить,имея на балансе от 1 000 рублей начисленных процентов. В случае досрочного расторжения договора с компанией возврат денежных средств можно заказать в любой момент компания вернет его вам в течении 10 рабочих дней.
                    </Textbox>
                    <AddBtn href="/login" width="60vw" background="#15274E" style={{marginTop:'5vh', marginBottom: '5vh'}}>
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
                        STD - STOCK TRADING DEPOSIT
                        </Hh>
                        <Textbox width="80%">
                        Инвестиции под 16% ежемесячной комиссии с минимальным депозитом от 100 000 рублей.</Textbox><br />
                        <Hh style={{top: 0}} fsize="5vw">
                    Как это работает?
                    </Hh>
                        <Textbox width="80%">
                        Инестируя 100 000 рублей уже через 3 дня ваш депозит начинает приносить вам прибыл. В течении трех дней компания создаёт отдельный криптокошелёк и кабинет на бирже для клиента, после чего команда трейдеров начинает обслуживание депозита. Проценты можно выводить, имея на балансе от 10 000 рублей начисленных процентов. В случае досрочного расторжения договора с компанией возврат денежных средств можно заказать в любой момент компания вернет его вам в течении 14 рабочих дней.
                        </Textbox>
                        <AddBtn href="/login" width="60vw" background="#15274E" style={{marginTop:'5vh', marginBottom: '5vh'}}>
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
                        GTD - GOLDEN TRADING DEPOSIT
                        </Hh>
                        <Textbox width="80%">
                        Инвестиции под 18% ежемесячной комиссии с минимальным депозитомот 1 000 000 рублей.
                        </Textbox><br/>
                        <Hh fsize="5vw">
                            Как это работает?
                        </Hh>
                        <Textbox width="80%">
                        Инвестируя 1 000 000 рублей уже на следующий день депозит начинает приносить вам прибыль. Компания закрепляет за клиентом личного менеджера, создаетдля клиента отдельный криптокошелёк, кабинет на бирже и формирует для клиента активы, которые хранятся в золотых слитках, после чего команда трейдеров начинает обслуживание депозита. Проценты можно выводить, в любой удобный момент.
                        </Textbox><br/>
                        <Textbox width="80%">
                        В случае досрочного расторжения договора с компанией компания верне клиенту деннежные средства в течении 20 рабочих дней.В случае хранения депозита без снятия на протяжении 180 дней клиент может оформить выплату в золотых слитках высшей пробы от партнёров компании по стоимости, которая на порядок ниже стоимости на рынке.
                        </Textbox><br/>
                        <Textbox width="80%">
                        Сдача слитков в банк позволит клиенту заработать дополнительно от 5 до 7% от вложенной суммы. Данный депозит позволяет клиенту участвовать в ico, которое будет проведено компанией в 2022 году, клиент получит монеты, которые сможетобменять на реальные деньги.
                        </Textbox><br/>
                        <Textbox width="80%" color="#828690">
                        Возможно внесение депозита золотыми слитками.
Для информации о внесении депозита золотом обратитесь к оператору
                        </Textbox>
                        <AddBtn href="/login" width="60vw" background="#15274E" style={{marginTop:'5vh', marginBottom: '5vh'}}>
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