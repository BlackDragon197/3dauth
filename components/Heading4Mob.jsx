import styled from 'styled-components'

const Head = styled.span`
    height: ${props => props.height};
    //width: ${props => props.width};
   
    justify-content: center;
    align-items: center;
    display: flex;
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 5vw;
    line-height: 5vw;
    color: #15274E;
`
    
export default function Heading(){
    
    return (
        
        <Head height="5vw" top="0">
            Инвестиционные <br/>программы
        </Head>

    )
}