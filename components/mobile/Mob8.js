import styled from 'styled-components'


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
            <div className="state-title1">Наши гарантии </div>
            <div className="state-building1"><img src="/mobile/block8/state-building.png" />
            </div>
            <div className="state-cont1">
                <div className="state-type1"><div className="vertical-align"><img src="/block8/1.png" /></div><div>Мы являемся официально зарегистрированной компанией с 5-летним стажем работы на рынке.
<br /> <br />За годы существования компания провела огромное количество сделок в разных сферах. </div></div>
                <div className="state-type2"><div className="vertical-align"><img src="/block8/2.png" /></div><div>Компания Pegas Capital выполнила более 200 крупных инвестиционных проектов и совершила тысячи успешных сделок на мировых биржах.</div></div>
                <div className="state-type2"><div className="vertical-align"><img src="/block8/3.png" /></div><div>Наша цель — это создание крупнейшей в СНГ финансовой организации с миллионами довольных клиентов.</div></div>
                <div className="state-type2"><div className="vertical-align"><img src="/block8/4.png" /></div><div>Наш доход напрямую зависит от дохода наших инвесторов. Чем больше зарабатываете вы, тем больше зарабатываем мы.</div></div>
            </div>
            <div className="state-graph1"><img src="/mobile/block8/1.png" />
            </div>
            <style jsx>
            {`
            .state-graph1{
                position: absolute;
                bottom: 0;
            }
            .state-title1{
                position: absolute;
                height: 19.074vh;
                width: 24.167vw;
                top: 30px;
                left: 14%;
                font-size: 11vw;
                line-height: 13vw;
                color: #15274E;
                text-align: left;
                font-family: 'Lato', sans-serif;
font-style: normal;
font-weight: bold;
text-transform: uppercase;
            }
            .vertical-align{
                height: 30px !important;
                width: 30px;
                display: contents;
                margin-right: 100px;
            }
            .state-type1 img, .state-type2 img{
                width: 39px;
                height: 39px;
            }
            .state-type1>*, .state-type2>*{
                width: 80%;
            } 
            .state-type1{
                align-items: flex-start;
                display: flex;
                flex-direction: row;
                background: rgba(255,255,255,0.5);
                box-shadow: 0px 16px 21px -8px rgba(28, 64, 141, 0.1);
                backdrop-filter: blur(5px);
                border-radius: 11px;
                justify-content: space-around;
                margin: 10px;
                padding: 15px 20px 20px 15px;
            }
            .state-type2{
                align-items: center;
                padding: 15px 20px 20px 15px;
                display: flex;
                justify-content: space-around;
                flex-direction: row;
                background: rgba(255,255,255,0.5);
                box-shadow: 0px 16px 21px -8px rgba(28, 64, 141, 0.1);
                backdrop-filter: blur(5px);
                border-radius: 11px;
            }
            .state-building1{
                z-index:1;
                position: absolute;
                height: 100%;
                top: 0;
                left: 0;
            }
            .state-building1 img{
                height: 100%;
            }
            .state-cont1{
                position: absolute;
                margin-left: 10%;
                z-index:2;
                font-family: 'Lato', sans-serif;
                font-weight: 600;
                font-size: 3vw;
                text-align: left;
                line-height: 140%;
                color: #15274E;
            }
            .state-cont1>* {
                flex: 1 1 34%;
                margin: 65px 0;
              }
            `}
        </style>
        </Container>

    )
}