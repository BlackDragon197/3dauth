import styled from 'styled-components'
import Image from 'next/image'
import Heading from '../components/Heading4.jsx'

const BlockCont = styled.div`
width: 100%;
height: 99.444vh;
display: flex;
flex-direction: row;
position: relative;
justify-content: center;

`

const Form= styled.div`
width: 80.417vw;
//height: 100%;
//background: red;
display: block;
align-items: baseline;
justify-content: baseline;
flex-direction: column;
`

const ImgCont= styled.div`
width: 39.583vw;
height: 100%;
//background: green;
display: flex;
`

const FormContent = styled.div`
width: 40.313vw;
//height: 63.761vh;
display: block;
margin: ${props => props.margin};
${props => props.form1}
`

const Head = styled.h3`
font-family: Inter;
font-style: normal;
font-weight: 600;
font-size: 9vw;
line-height: 10vw;
background: -webkit-linear-gradient(left, #15274E, #fff);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
margin: 10vh 0 4vh 0;
max-width: 70%;
`

const Divcont = styled.div`
background: rgba(21, 39, 78, 0.6);
backdrop-filter: blur(10px);
border-radius: 7px 7px 0px 7px;
//height: 39.844%;
width: 45%;
padding: 1.5vh 1.5vw 1.5vw 2.5vh;
font-family: 'Lato', sans-serif;
font-style: italic;
font-weight: 400;
letter-spacing: .05rem;
font-size: 1.042vw;
line-height: 1.406vw;
/* or 135% */
color: #FFFFFF;

`

export default function Block(){
    
    return (
        <div>
        <BlockCont id="onas">
           
                <div style={{position: 'absolute', right: '0', top:'8vh', width: '56.146vw', height:'102.870vh', zIndex:'1' }}>
                 <img src="/static/block6/notebook2.png" /> 
                </div>    
            
            <Form>
                    <Head>
                        О компании
                    </Head>
                    <FormContent margin="0 0 5vh 0" form1={{kek:"font-family: 'Lato', sans-serif;font-style: normal;font-weight: bold;font-size: 1.563vw;line-height: 1.863vw;color: #15274E"}}>
                    Pegas Capital — инвестиционная компания с 5-летним опытом работы, представляющая полный спектр брокерских и инвестиционных услуг.
                    </FormContent>
                    <FormContent margin="0 0 10vh 0" form1={{kek:"font-family: Lato;font-style: normal;font-weight: 500;font-size: 0.95vw;line-height: 1.3vw;color: #15274E;"}}>
                    На сегодняшний день представлена в большинстве регионов России. Мы — это более 500 опытных трейдеров, аналитиков и инвесторов из России, СНГ, Европы и Китая.
                    </FormContent>
                    <Divcont>
                    "Многие инвестиционные компании работают только с крупными инвесторами, повышая порог входа. Это совершенно закрывает путь для людей, которые только пробуют свои силы в инвестировании. Мы пошли по другому пути! Наша цель — это доступный рынок для каждого гражданина вне зависимости от его дохода."
                    </Divcont>
            </Form>
            <div style={{display: 'block', top:'-15vh',position:'absolute',right:'10vw',background:'url(/static/block6/bitcoin1.png)',backgroundRepeat:'no-repeat',backgroundSize:'100%',display:'block',width:'18vw', height:'42vh'}}>
                
        </div>
        <div style={{ bottom:'0',position:'absolute',left:'0vw',background:'url(/static/block6/bitcoin2.png)',backgroundRepeat:'no-repeat',backgroundSize:"100%",width:'12vw', height:'42vh'}}>
                
        </div>
        </BlockCont>
        
        </div>
    )
}