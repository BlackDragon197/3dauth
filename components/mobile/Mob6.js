import styled from 'styled-components'
import Image from 'next/image'

const BlockCont = styled.div`
width: 100%;
display: flex;
flex-direction: column;
position: relative;
justify-content: center;
`

const Form= styled.div`
width: 100%;
//height: 100%;
//background: red;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`

const ImgCont= styled.div`
width: 85%;
height: 100%;
//background: green;
display: flex;
`

const FormContent = styled.div`
width: 85%;
//height: 63.761vh;
text-align: left;
margin: ${props => props.margin};
${props => props.form1}
`

const Head = styled.h3`
font-family: Inter;
font-style: normal;
font-weight: 600;
font-size: 12vw;
line-height: 14vw;
background: -webkit-linear-gradient(left, #15274E, #fff);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
`

const Divcont = styled.div`
background: rgba(21, 39, 78, 0.6);
backdrop-filter: blur(10px);
border-radius: 7px 7px 0px 7px;
//height: 39.844%;
width: 85%;
padding: 3vh 1.5vw 3vh 3vh;
font-family: 'Inter';
font-style: italic;
font-weight: 300;
letter-spacing: .05rem;
font-size: 4vw;
line-height: 5.4vw;
text-align: left;
color: #FFFFFF;
`
export default function Block(){
    return (
        <div style={{marginTop:'40px'}}>
        <BlockCont id="onas">
            <div>
                <Head>
                О компании
                </Head>
            </div>
                <div style={{position: 'relative', right: '0', height:'', zIndex:'1', transform:'rotate(-10deg)' }}>
                 <img src="/mobile/block6/1.png" style={{transform: 'rotate(15deg)'}}/> 
                </div>    
            <Form>
                    <FormContent margin="0 0 3vh 0" form1={{kek:"font-family: 'Lato', sans-serif;font-style: normal;font-weight: bold;font-size: 4.2vw;line-height: 4.8vw;color: #15274E"}}>
                    Pegas Capital — инвестиционная компания с 5-летним опытом работы, представляющая полный спектр брокерских и инвестиционных услуг.
                    </FormContent>
                    <FormContent margin="0 0 5vh 0" form1={{kek:"font-family: Lato;font-style: normal;font-weight: 500;font-size: 3.4vw;line-height: 4.1vw;color: #15274E;"}}>
                    На сегодняшний день представлена в большинстве регионов России. Мы — это более 500 опытных трейдеров, аналитиков и инвесторов из России, СНГ, Европы и Китая.
                    </FormContent>
                    <Divcont>
                    "Многие инвестиционные компании работают только с крупными инвесторами, повышая порог входа. Это совершенно закрывает путь для людей, которые только пробуют свои силы в инвестировании. Мы пошли по другому пути! Наша цель — это доступный рынок для каждого гражданина вне зависимости от его дохода."
                    </Divcont>
                    <div style={{ bottom:'-16vh',position:'absolute',left:'0vw',background:'url(/block6/bitcoin2.png)',backgroundRepeat:'no-repeat',backgroundSize:"100%",width:'24vw', height:'24vh'}}>
        </div>
            </Form>
            <div style={{display: 'block', top:'0',position:'absolute',right:'-10vw',background:'url(/block6/bitcoin1.png)',backgroundRepeat:'no-repeat',backgroundSize:'100%',display:'block',width:'36vw', height:'42vh'}}>
        </div>
        
        </BlockCont>
        </div>
    )
}