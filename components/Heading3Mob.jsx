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
    font-size: 4vh;
    line-height: 5vw;
    color: #0f1114;
`
    
export default function Heading3Mob(){
    
    return (
        
        <Head top="0">
            Как это работает?
        </Head>

    )
}