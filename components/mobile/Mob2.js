import styled from 'styled-components'
import Image from 'next/image'
import HeadingMob from '../../components/HeadingMob.jsx'
import ColMob from '../../components/col-3-mob'

const BLock = styled.div`
    width:100%;
    height: ;
    display: flex;
    flex-direction: column;
    padding-top: 7.593vh;
    justify-content: start;
    align-items: center;
    background: url(/mobile/block2/1.png);
    background-size: 100%;
    background-position: right top;
`

export default function Block2(){
    
    return (
        
        <BLock>
            <HeadingMob />
            
                <div style={{width:'50vw', display:'flex', flexDirection:'row', height:'', top: '7.593vh', background: 'url(/mobile/block2/1.png)'}}>
                    <ColMob></ColMob>
                    
                </div>
        </BLock>

    )
}