import styled from 'styled-components'
import Image from 'next/image'
import Heading from '../components/Heading4.jsx'

const Container = styled.div`
//width: 100%;
max-width: 1400px;
display: flex;
align-items: center;
justify-content: center;
height: 171vh;
margin: auto;
position: relative;
`

export default function Block(){
    
    return (
        <Container> 
            <div className="state-title">Наши гарантии </div>
            <div className="state-building"><img src="/static/block8/state-building.png" />
            </div>
            <div className="state-cont">
                <div className="state-type1"><div className="vertical-align"><img src="/static/block8/1.png" /></div><div>Мы являемся официально зарегистрированной компанией с 5-летним стажем работы на рынке.
<br /> <br />За годы существования компания провела огромное количество сделок в разных сферах. </div></div>
                <div></div>
                <div></div>
                <div className="state-type2"><div className="vertical-align"><img src="/static/block8/2.png" /></div><div>Компания Pegas Capital выполнила более 200 крупных инвестиционных проектов и совершила тысячи успешных сделок на крупнейших мировых биржах</div></div>
                <div className="state-type2"><div className="vertical-align"><img src="/static/block8/3.png" /></div><div>Наша цель — это создание крупнейшей в СНГ финансовой организации с миллионами довольных клиентов.</div></div>
                <div></div>
                <div></div>
                <div className="state-type2"><div className="vertical-align"><img src="/static/block8/4.png" /></div><div>Наш доход на прямую зависит от дохода наших инвесторов. Чем больше зарабатываете вы, тем больше зарабатываем мы</div></div>
            </div>
            <style jsx>
            {`
            .state-title{
                position: absolute;
                height: 19.074vh;
                width: 24.167vw;
                top: 0;
                left: 10%;
                font-size: 4.427vw;
                line-height: 5.365vw;
                color: #15274E;
                font-family: 'Lato', sans-serif;
font-style: normal;
font-weight: bold;
text-transform: uppercase;

            }
            .vertical-align{
                height: 30px !important;
                width: 30px;
                display: contents;
                
            }
            .state-type1 img, .state-type2 img{
                width: 62px;
                height: 62px;
            }
            .state-type1>*, .state-type2>*{
               
                width: 80%;
            } 
            .state-type1{
                align-items: center;
                height: 18.889vh;
                display: flex;
                flex-direction: row;
                background: rgba(255,255,255,0.5);
                box-shadow: 0px 16px 21px -8px rgba(28, 64, 141, 0.1);
                backdrop-filter: blur(5px);
                border-radius: 11px;
                justify-content: space-around;
                margin: 10px;
            }
            .state-type2{
                align-items: center;
                height: 14.167vh;
                margin: 10px;
                display: flex;
                justify-content: space-around;
                flex-direction: row;
                background: rgba(255,255,255,0.5);
                box-shadow: 0px 16px 21px -8px rgba(28, 64, 141, 0.1);
                backdrop-filter: blur(5px);
                border-radius: 11px;
            }
            .state-building{
                z-index:1;
                position: absolute;
                height: 100%;
                top: 0;
            }
            .state-building img{
                height: 100%;
            }
            .state-cont{
                position: absolute;
                width: 70.313vw;
                z-index:2;
                display: flex;
                flex-wrap: wrap;
                height: 99vh;
                font-family: 'Lato', sans-serif;
                font-style: normal;
                font-size:1.042vw;
                line-height: 140%;
            }
            .state-cont>* {
                flex: 1 1 34%;
                margin: 10px;
              }
            `}
        </style>
        </Container>

    )
}