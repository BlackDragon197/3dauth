import styled from 'styled-components'


const Group = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    margin-top: ${props => props.top};
    left: ${props => props.left};
    width: ${props => props.width};
    height: ${props => props.height};
    position: relative;
    flex-direction: column;
    margin-top: 20px;
`

const AddBtn = styled.a`

width: ${props => props.width};
height: 7vh;
font-family: Gilroy;
font-style: normal;
font-weight: 400;
font-size: 3.5vw;
line-height: 4vw;
color: #FFFFFF;
display: flex;
justify-content: flex-start;
align-items: center;
box-sizing: border-box;
border-radius: 6px;
position: relative;
cursor: pointer;
padding-left: 20px;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
transition: 500ms;
left: ${props => props.left};
background: ${props => props.background};
`
const Logo = styled.a`
    font-style: normal;
    font-weight: 580;
    font-size:18px;
    line-height:21px;
    color: #332501;
    font-family: Gilroy;
    display: flex;
    justify-content: flex-start;
    margin-left: 30px;
    margin-top: 30px;
`


export default function Mob1(){
    
    return (
        
        <div style={{overflow: 'hidden'}}>
          <div style={{height: '10vh'}}>
            <Logo>
                <img src="/footer/logo.png" />
            </Logo>
          </div>
          <Group >
            <div style={{ width: '100%', top:'0', position:'relative', textAlign:'left',  display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginTop:'10px', marginLeft:'30px'}}>
                <span style={{fontWeight:'700', fontStyle:'normal', fontFamily:'Gilroy', lineHeight:'140%', fontSize:'4vw', textTransform: 'uppercase', color:'#15274E'}}>
                Инвестируйте вместе с Pegas Capital<br /> и гарантировано зарабатывайте <br />
до 20% ежемесячной комиссии
                </span>
                
            </div>

            <div style={{ width: '100%', position:'relative', textAlign:'left', display:'flex', alignItems:'center', justifyContent: 'flex-start', marginTop:'10px', marginLeft:'30px'}}>
            <span style={{fontWeight:'500', fontStyle:'normal', fontFamily:'Gilroy', lineHeight:'140%', fontSize:'3vw', color: '#939393'}}>
            Выбирайте 1 из 3 инвестиционных <br/><span style={{fontWeight:'600', fontStyle:'normal',color: '#939393'}}>программ и приумножайте свой капитал</span>
                </span>
            </div>
            <div style={{position: 'relative', width: '100%', display:'flex', justifyContent:'flex-start', marginLeft:'30px', marginTop:'30px'}}>
        <AddBtn width="52.719vw" background="#0085FF" >Получить консультацию                    
                     
        </AddBtn>
        </div>
        <div style={{position: 'relative', width: '100%', display:'flex', justifyContent:'flex-start', marginLeft:'30px', marginTop:'10px'}}>
        <AddBtn  width="62.667vw" background="#15274E">Программы сотрудничества                    
                       
        </AddBtn>
        </div>  
        {/*<Image src='/coin.png' width='470px' height='500px' style={{position:'absolute', top:'0'}}/>*/}
        </Group>

        <div style={{marginTop: '40px',position:'relative',height:'76.2%',display:'', background: '#F7F8FB', backgroundPosition: 'top right', backgroundImage:'url(/wrapperbg.png)', backgroundRepeat:'no-repeat', backgroundSize:'300%'}}>
        
          <div className="graph1899" style={{background: 'rgba(242,245,248)'}}><img src="/block1/phone.png" /></div>
          <div className="container" style={{ height:'48vh',backgroundPosition: 'bottom right, top right 18%', backgroundImage:'url(), url()', backgroundRepeat:'no-repeat', backgroundSize:'44%, 17%'}}>
          
          
        </div>
    
    </div>
    </div>

    )
}