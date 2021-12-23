import Layout from "../components/Layout";
import Link from "next/link";
import { authInitialProps } from "../lib/auth";
import Head from 'next/head'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import InBlock2 from '../components/InBlock2.jsx'
import InBlock3 from '../components/InBlock3.jsx'
import InBlock4 from '../components/InBlock4.jsx'
import InBlock5 from '../components/InBlock5.jsx'
import InBlock6 from '../components/InBlock6.jsx'
import InBlock7 from '../components/InBlock7.jsx'
import InBlock8 from '../components/InBlock8.jsx'
import InBlock9 from '../components/InBlock9.jsx'
import InBlock10 from '../components/InBlock10.jsx'
import Footer from '../components/Footer.jsx'
import React, { useEffect }  from "react";
import DynamicWidth from '../components/DynamicWidth'
import useDeviceSize from "../components/DynamicWidth";
import {scaleRotate as Menu} from 'react-burger-menu'
import MobileMenu from "../components/mobile/MobileMenu";
import Mob1 from "../components/mobile/Mob1"
import Mob2 from "../components/mobile/Mob2"
import Mob3 from "../components/mobile/Mob3.jsx"
import Mob4 from "../components/mobile/Mob4"
import Mob5 from "../components/mobile/Mob5"
import Mob6 from "../components/mobile/Mob6"


const Title = styled.h1`
  color: red;
  font-family: Gilroy;
`

const Group = styled.div`
    display: flex;
    margin-top: ${props => props.top};
    left: ${props => props.left};
    width: ${props => props.width};
    height: ${props => props.height};
    position: relative;
    align-items: center;
`

const AddBtn = styled.a`

width: ${props => props.width};
height: 2.8em;
font-family: Gilroy;
font-style: normal;
font-weight: 600;
font-size: 0.938vw;
line-height: 1.054vw;
color: #FFFFFF;
display: flex;
justify-content: center;
align-items: center;
box-sizing: border-box;
border-radius: 6px;
position: relative;
cursor: pointer;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
transition: 500ms;
left: ${props => props.left};
background: ${props => props.background};
`



export default function Index(props){


  
  const [width] = useDeviceSize()


console.log(width)
const isMobile = width <= 500 ;
  
if(!isMobile){
    return(
        <div style={{overflow: 'hidden'}}>
          
        <div style={{position:'relative',height:'76.2%',display:'', background: '#F7F8FB', backgroundPosition: 'top right', backgroundImage:'url(/wrapperbg.png)', backgroundRepeat:'no-repeat', backgroundSize:'100%'}}>
          <Head>
            <title>Pegas Capital</title>
          </Head>
          <Navbar />
          <div className="graph1899"><img src="/block1/phone.png" /></div>
          <div className="container" style={{ height:'48vh',backgroundPosition: 'bottom right, top right 18%', backgroundImage:'url(), url()', backgroundRepeat:'no-repeat', backgroundSize:'44%, 17%'}}>
          
          <Group top="12vh" left="12.240vw" height="54.427vh">
            <div style={{height: '8vw', width: '100%', top:'0', position:'absolute', textAlign:'left'}}>
                <span style={{fontWeight:'700', fontStyle:'normal', fontFamily:'Gilroy', lineHeight:'140%', fontSize:'2vw', textTransform: 'uppercase', color:'#15274E'}}>
                Инвестируйте вместе с Pegas Capital<br /> и гарантировано зарабатывайте <br />
до 20% ежемесячной комиссии
                </span>
                
            </div>
            <div style={{height: '8vw', width: '61.994%', top:'9vw', position:'absolute', textAlign:'left', display:'flex', alignItems:'center'}}>
            <span style={{fontWeight:'500', fontStyle:'normal', fontFamily:'Gilroy', lineHeight:'140%', fontSize:'1.302vw', color: '#939393'}}>
            Выбирайте 1 из 3 инвестиционных программ<br/><span style={{fontWeight:'600', fontStyle:'normal',color: '#939393'}}>и приумножайте свой капитал</span>
                </span>
            </div>
        <AddBtn href="#contact" width="12.719vw" background="#0085FF" left="12.240vw" style={{position:'absolute', top:'17vw', left:'0'}}>Получить консультацию                    
                       
        </AddBtn>
        <AddBtn href="#invest"  width="16.667vw" background="#15274E" left="14.240vw" style={{position:'absolute', top:'17vw'}}>Программы сотрудничества                    
                       
        </AddBtn>
        {/*<Image src='/coin.png' width='470px' height='500px' style={{position:'absolute', top:'0'}}/>*/}
        </Group>
        </div>  
      
    </div>  
    <InBlock2 />  
    <InBlock3 />  
    <InBlock4/> 
    <div style={{height: '16.53vh'}}></div> 
    <InBlock5 />  
    <InBlock6 />  
    <InBlock7 />  
    <InBlock8 /> 
    <InBlock9 /> 
    <InBlock10 />
    <Footer />
    <style>
      {`
      .graph1899 img{
        height:100%;
      }
      .graph1899{
        z-index:1;
        position: absolute;
     
        height: 59.778vh;
        right: 10% ;
        bottom: 0;
    }
      `}
    </style>
    </div>


    )

  }else{

    function showSettings (event) {
      event.preventDefault();
    
    }

    return (
      <div id="outer-container"> 
      
        <MobileMenu customBurgerIcon={ <img src="public/mobile/icon.png" /> }  pageWrapId={"page-wrap"} />
        <div id="page-wrap">
        
        <Mob1 />
        <Mob2 />
        <Mob3 />
        <Mob4 />
        <Mob5 />
        <Mob6 />
        </div>
      </div>
      )
  }

}


Index.getInitialProps = authInitialProps();