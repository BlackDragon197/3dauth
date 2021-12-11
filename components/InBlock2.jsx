import styled from 'styled-components'
import Image from 'next/image'
import Heading from '../components/Heading.jsx'
import Col from '../components/col-3'

const BLock = styled.div`
    width:100%;
    height: 47.963vh;
    display: flex;
    flex-direction: column;
    padding-top: 7.593vh;
    justify-content: start;
    align-items: center;
    background: url('/static/block2.png') no-repeat top right;
    background-size: 100%;
`

export default function Block(){
    
    return (
        
        <BLock>
            <Heading />
            
                <div style={{width:'53.854vw', display:'flex', flexDirection:'row', height:'17.037vh', top: '7.593vh'}}>
                    <Col></Col>
                    
                </div>
        </BLock>

    )
}