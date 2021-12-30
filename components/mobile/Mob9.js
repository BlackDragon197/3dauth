import styled from 'styled-components'

const Container = styled.div`
//width: 100%;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
margin: auto;
position: relative;
background: #F7F8FB;
`




export default function Block(){
    
    return (
        <Container> 
            <div className="graph18791"><img src="/block9/graph2.png" /></div>
           
           
            <div className="stock-cont1">
            <div className="stock-title1">Акционные предложения </div>
                <div className="stock-inner1">
                    <div>
                        <div className="stock-imgbox1">
                            <img src="/block9/1.png"/>
                        </div>
                        <div className="stock-textbox1"><span>10% от депозита</span> каждого приведённого пользователя
                        </div>
                        <div></div>
                    </div>
                    <div>
                        <div className="stock-imgbox1">
                            <img src="/block9/2.png"/>
                        </div>
                        <div className="stock-textbox1"><span>Станьте лидером месяца</span> по привлечённым клиентам и получите 50 000 Р 
                        </div>
                    </div>
                    <div>
                        <div className="stock-imgbox1 imgbox31">
                            <img src="/block9/3.png"/>
                        </div>
                        <div className="stock-textbox1"><span>Получайте бонус</span> от депозита приведённого вами пользователя 13% и автомобиль 
                        </div>
                    </div>
                    <div>
                        <div className="stock-imgbox1 imgbox41">
                            <img src="/block9/4.png"/>
                        </div>
                        <div className="stock-textbox1"><span>Получайте бонус от депозита</span> приведённого вами пользователя 15% и квартиру 
                        </div>
                    </div>
                    <div>
                        <div className="stock-imgbox1 imgbox41">
                            <img src="/block9/5.png"/>
                        </div>
                        <div className="stock-textbox1"><span>Получайте бонус от депозита</span> приведённого вами пользователя 17% и дом 
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
            <style jsx>
            {`
             .graph18991{
                z-index:1;
                position: absolute;
                width: 100%;
                height: 100%;
                left: 50% ;
                top: 0;
            }
            .graph18791{
                position: absolute;
                width: 100%;
                height: 100%;
                left: 50%;
            }
            .imgbox41{
                padding-left: -20px !important;
            }
            .imgbox31{
                position: relative;
                left: -23px !important;
            }
            .stock-textbox1 span{
                font-weight: 600;
            }
            .stock-textbox1{
                padding-left: 30px;
                width: 80%;
                font-family: 'Lato', sans-serif;
                font-size: 4vw;
                line-height: 150%;
                color: #15274E;
                text-align: left;
            }
            .stock-imgbox1{
                align-self: flex-start;
                padding-left: 30px;
            }
            .stock-title1{
                font-size: 7vw;
                line-height: 8.5vw;
                color: #15274E;
                font-family: 'Lato', sans-serif;
                font-style: normal;
                font-weight: bold;
                text-transform: normal;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                margin: 40px 0;
            }
            .stock-cont1{
                width: 75%;
                margin-bottom: 15px;
                z-index:2;
            }
            .stock-inner1{
                display: flex;
                flex-direction: column;
            }
            .stock-inner1 div:nth-child(6){
                background: none !important;
            }
            .stock-inner1>* {
             
                margin: 10px 0;
                padding: 20px 0;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                background: #FFFFFF;
                box-shadow: 0px 9px 78px 3px rgba(21, 39, 78, 0.02);
                backdrop-filter: blur(5px);
                border-radius: 11px;
              }
              
            `}
        </style>
        </Container>

    )
}