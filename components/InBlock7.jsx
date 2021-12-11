import styled from 'styled-components'
import Image from 'next/image'
import Heading from '../components/Heading4.jsx'

const Container = styled.div`
//width: 100%;
max-width: 1400px;
display: flex;
align-items: center;
justify-content: center;
height: 900px;
margin: auto;

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
flex: 7;
z-index: 2;
`

 

export default function Block(){
    
    return (
        <Container> 
            <div className="graph1879"><img src="/block7/graph1.png" />
            </div>
            <div className="hand"><img src="/block7/block7hand.png" />
            </div>
            <div className="graph1899"><img src="/block7/block7.png" />
            </div>
            <Columna>
                <h1 className="aims">Наши цели на 2022</h1>
                <div className="aims-p">
                    <p>
                        В 2022 году компания Pegas Capital планирует запустить масштабное ICO, которое позволит всем нашим клиентам без дополнительных вложений получить электронную валюту, которую сможет обменять на реальные деньги.
                    </p>
                    <p>
                        В 2023 году компания планирует запустить собственную платежную систему 
                    </p>
                    <p>
                        В 2024 году компания планирует запустить собственную криптобиржу
                    </p>
                    <p>
                        В 2025 году компания планирует создать первый в России банк с поддержкой криптовалюты
                    </p>
                </div>
            </Columna>
            <Column>
            </Column>
            <Column>
            </Column>
            <style jsx>
            {`
            .aims-p p:nth-child(1){
                width: 86%;
            }
            .aims-p p:nth-child(2){
                width: 65%;
            }
            .aims-p p:nth-child(3){
                width: 45%;
            }
            .aims-p p:nth-child(4){
                width: 57%;
            }
            .aims-p p {
                font-family: Lato;
                font-style: normal;
                font-weight: 500;
                font-size: 1.2vw;
                line-height: 1.5vw;
                color: #15274E;
                margin-top: 0.5em; 
                margin-bottom: 1em; 
                display: flex;
                justify-content: flex-start;
            }
            .aims-p{
                width: 80%;
                margin: auto;
            }
            .aims{
                font-family: 'Roboto';
                font-style: normal;
                font-weight: bold;
                font-size: 4vw;
                line-height: 5vw;
                text-transform: uppercase;
                color: #15274E;
                margin-bottom: 1em;
            }
            .graph1899{
                z-index:1;
                position: absolute;
                width: 54.896vw;
                height: 102.778vh;
                left:0 ;
                bottom: 0;
            }
            .graph1879{
                position: absolute;
                width: 88.646vw;
                height: 111.667vh;
                left: 50.073vw;
            }
          .hand{
                position: absolute;
                width: 64.479vw;
                height: 76.574vh;
                left: 50.073vw;
          }
            
            `}
        </style>
        </Container>

    )
}