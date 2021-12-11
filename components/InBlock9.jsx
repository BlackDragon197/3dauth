import styled from 'styled-components'
import Image from 'next/image'
import Heading from '../components/Heading4.jsx'

const Container = styled.div`
//width: 100%;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
height: 81.111vh;
margin: auto;
position: relative;
background: #F7F8FB;
`

const Column = styled.div`
display: flex;
flex-direction: column;
flex: 2;
`

const Columna = styled.div`
display: flex;
flex-direction: column;
flex: 7;
z-index: 2;
`



export default function Block(){
    
    return (
        <Container> 
            <div className="graph1879"><img src="/block9/graph2.png" /></div>
            <div className="graph1899"><img src="/block9/graph1.png" />
            </div>
            <div className="stock-cont">
            <div className="stock-title">Акционные предложения </div>
                <div className="stock-inner">
                    <div>
                        <div className="stock-imgbox">
                            <img src="/block9/1.png"/>
                        </div>
                        <div className="stock-textbox"><span>10% от депозита</span> каждого приведённого пользователя
                        </div>
                        <div></div>
                    </div>
                    <div>
                        <div className="stock-imgbox">
                            <img src="/block9/2.png"/>
                        </div>
                        <div className="stock-textbox"><span>Станьте лидером месяца</span> по привлечённым клиентам и получите 50 000 Р 
                        </div>
                    </div>
                    <div>
                        <div className="stock-imgbox imgbox3">
                            <img src="/block9/3.png"/>
                        </div>
                        <div className="stock-textbox"><span>Достигните ранга старшего менеджера</span> и получайте бонус от депозита приведённого вами пользователя 13% и автомобиль 
                        </div>
                    </div>
                    <div>
                        <div className="stock-imgbox imgbox4">
                            <img src="/block9/4.png"/>
                        </div>
                        <div className="stock-textbox"><span>Достигните ранга ведущего менеджера</span> и получайте бонус от депозита приведённого вами пользователя 15% и квартиру 
                        </div>
                    </div>
                    <div>
                        <div className="stock-imgbox imgbox4">
                            <img src="/block9/5.png"/>
                        </div>
                        <div className="stock-textbox"><span>Достигните ранга ведущего менеджера</span> и получайте бонус от депозита приведённого вами пользователя 15% и квартиру 
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
            <style jsx>
            {`
             .graph1899{
                z-index:1;
                position: absolute;
                width: 54.896vw;
                height: 102.778vh;
                left:0 ;
                top: 0;
            }
            .graph1879{
                position: absolute;
                width: 88.646vw;
                height: 111.667vh;
                left: 50.073vw;
            }
            .imgbox4{
                margin-bottom: 20px;
            }
            .imgbox3{
                margin-top: 10px;
            }
            .stock-textbox span{
                font-weight: 600;
            }
            .stock-textbox{
                padding-left: 30px;
                width: 80%;
                font-family: 'Lato', sans-serif;
                font-size: 1.042vw;
                line-height: 150%;
                color: #15274E;
            }
            .stock-imgbox{
               
                height: 5.463vh;
                padding-left: 30px;
            }
            .stock-title{
                
                height: 19.074vh;
                width: 40.167vw;
                top: 0;
                left:0;
                font-size: 2vw;
                line-height: 5.365vw;
                color: #15274E;
                font-family: 'Lato', sans-serif;
                font-style: normal;
                font-weight: bold;
                text-transform: uppercase;
                display: flex;
                justify-content: flex-start;
                align-items: center;
            }
            .stock-cont{
                width: 75%;
                height: 66.759vh;
                margin-bottom: 15px;
                z-index:2;
            }
            .stock-inner{
                flex-wrap: wrap;
                display: flex;
            }
            .stock-inner div:nth-child(6){
                background: none !important;
            }
            .stock-inner>* {
                flex: 1 1 28%;
                margin: 10px;
                height: 26.019vh;
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