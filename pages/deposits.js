import { authInitialProps } from "../lib/auth";
import styled from 'styled-components'
import InBlock4 from '../components/InBlock4.jsx'
import Footer from '../components/Footer.jsx'
import React, { useEffect }  from "react";
import useDeviceSize from "../components/DynamicWidth";
import MobileMenu from "../components/mobile/MobileMenu";
import Mob4 from "../components/mobile/Mob4"
import FooterMob from '../components/mobile/FooterMob'
import Navbar from '../components/Navbar'

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
const isMobile = width <= 500;
if(!isMobile){
    return(
        <div style={{overflow: 'hidden'}}>
            <Navbar />
    <InBlock4/> 
    <div style={{height: '16.53vh'}}></div> 
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
        <Mob4 />
        <FooterMob />
        </div>
      </div>
      )
  }
}


Index.getInitialProps = authInitialProps();