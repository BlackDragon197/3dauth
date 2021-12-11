import styled from 'styled-components'
import Image from 'next/image'

const Col = styled.div`
width:63.854vw;
display: flex;
    flex-direction: row;
`

const ColChild = styled.div `
    width: 14vw;
    background: ${props => props.src};
    background-repeat: no-repeat ;
    background-size: 50% ;
    height: 17.037vh;
    top: 7.593vh;
    display: flex;
    align-items: flex-end;
`

const Hedliner = styled.span`
font-family: 'Lato', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 1.302vw;
line-height: 1.563vw;
color: #15274E;
display: flex;
position: relative;
width: ${props => props.width};
top: ${props => props.top};
`

const srcs = [  {desc:"5 лет на рынке", content:"url(/static/block2g1.png);", width:"100vw", height:''},
                {desc:"4000+ довольных клиентов", content:"url(/static/block2g2.png);", width:"10.990vw", top:"1.563vw"},
                {desc:"1 млрд. Ꝑ заработали наши клиенты", content:"url(/static/block2g3.png);", width:"13.421vw", top:"1.563vw"}
            ];


const peep = srcs.map((src) => 
       <Col>
       <ColChild src={src.content}><Hedliner width={src.width} top={src.top}>{src.desc}</Hedliner></ColChild>
       </Col>    
)



export default function Columna() {

    return (
        <Col>
            {peep}
        </Col>
    )
}
