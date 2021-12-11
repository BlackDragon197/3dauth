import styled from 'styled-components'

const Head = styled.span`
    height: ${props => props.height};
    //width: ${props => props.width};
   
    justify-content: center;
    align-items: center;
    display: flex;
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 2.344vw;
    line-height: 2.813vw;
    color: #15274E;
`
    
export default function Heading(){
    
    return (
        
        <Head height="5vw" top="0">
            Как это работает?
        </Head>

    )
}