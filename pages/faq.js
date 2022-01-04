import { authInitialProps } from "../lib/auth";
import Navbar from '../components/Navbar'
import InBlock10 from '../components/InBlock10.jsx'
import Footer from '../components/Footer.jsx'
import React, { useEffect }  from "react";
import useDeviceSize from "../components/DynamicWidth";
import MobileMenu from "../components/mobile/MobileMenu";
import Mob10 from "../components/mobile/Mob10"
import FooterMob from '../components/mobile/FooterMob'

export default function Index(props){
const [width] = useDeviceSize()
console.log(width)
const isMobile = width <= 500;
  
if(!isMobile){
    return(
        <div style={{overflow: 'hidden'}}>
          
        
          <Navbar />
          
      
  
    
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
        
       
        <Mob10 />
        <FooterMob />
        </div>
      </div>
      )
  }

}


Index.getInitialProps = authInitialProps();