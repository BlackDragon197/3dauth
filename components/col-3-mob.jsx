import styled from 'styled-components'
import Image from 'next/image'

const Col = styled.div`
width:100%;
display: flex;
    flex-direction: column;
    justify-content: center;
`

const ColChild = styled.div `
    width: 100%;
    background: ${props => props.src};
    background-repeat: no-repeat ;
    background-size: 50% ;
    background-position: 55%;
    height: 17.037vh;
    top: 7.593vh;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    margin-bottom: 8vh;
`

const Hedliner = styled.span`
font-family: 'Lato', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 4vw;
line-height: 5vw;
color: #15274E;
position: relative;
top: ${props => props.top};
`

const srcs = [  {desc:"5 лет на рынке", content:"url(/block2g1.png);", width:"100vw", height:'', top: '5vh'},
                {desc:"4000+ довольных клиентов", content:"url(/block2g2.png);", top:"5vh"},
                {desc:"5 млрд. Р заработали наши клиенты", content:"url(/block2g3.png);", top:"5vh"}
            ];


const peep = srcs.map((src) => 
       <Col>
       <ColChild src={src.content}><Hedliner width={src.width} top={src.top}>{src.desc}</Hedliner></ColChild>
       </Col>    
)



export default function Columna() {

    return (
        <div style={{width: '100%'}}>
            {peep}
            </div>
    )
}
