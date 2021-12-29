import styled from 'styled-components'
import Image from 'next/image'

const Container = styled.div`
//width: 100%;
max-width: 1400px;
display: flex;
align-items: center;
justify-content: center;

margin: auto;
flex-direction: column;
position: relative;
`

const Column = styled.div`
display: flex;
flex-direction: column;
flex: 2;
`

const Columna = styled.div`
display: flex;
flex-direction: column;
width: 85%;
z-index: 2;
top: -20vh;
position: relative;
align-items: flex-start;
`

 

export default function Block(){
    
    return (
        <Container> 
            <div style={{position: 'relative'}}>
                <div className="graph12"><img src="/block7/graph1.png" />
                </div>
                <div className="hand12"><img src="/block7/block7hand.png" />
                </div>
                
            </div>
            <Columna>
                <h1 className="aims12">Наши цели на 2022</h1>
                <div className="aims-p12">
                    <p>
                        В 2022 году компания Pegas Capital планирует запустить масштабное ICO, которое позволит всем нашим клиентам без дополнительных вложений получить электронную валюту, которую сможет обменять на реальные деньги.
                    </p>
                    <p>
                        В 2023 году компания планирует запустить<br/> собственную платежную систему 
                    </p>
                    <p>
                        В 2024 году компания планирует<br/> запустить собственную криптобиржу
                    </p>
                    <p>
                        В 2025 году компания планирует создать первый в России банк с поддержкой криптовалюты
                    </p>
                </div>
                <div className="graph1899"><img src="/block7/block7.png" />
                </div>
            </Columna>
            
            <style jsx>
            {`
            .aims-p12 p:nth-child(1){
                
            }
            .aims-p12 p:nth-child(2){
                
            }
            .aims-p12 p:nth-child(3){
               
            }
            .aims-p12 p:nth-child(4){
                
            }
            .aims-p12 p {
                font-family: 'Lato', sans-serif;
                font-style: normal;
                font-weight: 500;
                font-size: 4vw;
                line-height: 5vw;
                color: #15274E;
                margin-top: 0.5em; 
                margin-bottom: 1em; 
                text-align: left;
            }
            .aims-p12{
                margin: auto;
            }
            .aims12{
                font-family: 'Roboto';
                font-style: normal;
                font-weight: bold;
                font-size: 7vw;
                line-height: 8vw;
                text-transform: uppercase;
                color: #15274E;
                margin-bottom: 1em;
            }
            .graph1899{
                z-index:1;
                position: absolute;
                bottom: -50%;
                left:-35%;
                width: 100%;
            }
            .graph12{
                position: absolute;
                width: 100%;
                height: 100%;
            }
          .hand12{
            position: ;
            width: 150%;
            height: 110%;
            left: -5%;
            transform: rotate(5deg)
          }
            
            `}
        </style>
        </Container>

    )
}