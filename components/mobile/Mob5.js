import styled from 'styled-components'
import Image from 'next/image'
import emailjs from 'emailjs-com'

// import{ init } from 'emailjs-com';
// init("user_xmTkhFikSdM6Z4X20TcYv");

import{ init } from 'emailjs-com';
init("user_t18aTjWVzTkXBjZSIEkUa");

const BlockCont = styled.div`
width: 100%;
display: flex;
flex-direction: column;
position: relative;

`

const Form= styled.div`
width: 100%;
height: 100%;
//background: red;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`

const ImgCont= styled.div`
width: 100vw;
height: 100%;
//background: green;
display: flex;
`

const FormContent = styled.div`
width: 100vw;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`

const Head = styled.h2`
font-family: 'Lato', sans-serif;
font-style: normal;
font-weight: 600;
font-size: 4vh;
line-height: 5vh;
color: #15274E;

`

const Article = styled.p`
font-family: 'Lato', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 3.5vw;
line-height: 4vw;
color: #15274E;
`

function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_kww6hls', 'template_5nl947s', e.target, 'user_t18aTjWVzTkXBjZSIEkUa')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
}


export default function Block(){
    
    return (
        <BlockCont id="contact">
            <ImgCont>
                <img src="/block5/phone.png" width="100%" height="100%"/>
            </ImgCont>
            <Form>
                <FormContent>
                    <div style={{width: '80%', display: 'flex', justifyContent:'flex-start', flexDirection:'column', textAlign:'left', marginTop:'12vh'}}>
                    <Head>
                        Хотите задать волнующий вопрос по одной из наших программ?
                    </Head>
                    <Article style={{marginTop:'5vh',marginBottom:'5vh'}}>
                    Оставьте свои контактные данные и менеджер <br />PEGAS CAPITAL свяжется с вами в ближайшее время!
                    </Article>
                    </div>
                    <form onSubmit={sendEmail} style={{width: '90%'}}> 
                        <div>
                            <input type="text" className="form-control-mob" placeholder="Имя" name="name"/>
                        </div>
                        <div>
                            <input type="email" className="form-control-mob" placeholder="E-mail" name="email"/>
                        </div>
                        <div>
                            <input type="tel" className="form-control-mob" placeholder="+7" name="phone"/>
                        </div>
                        <div style={{display:'flex', justifyContent:'center'}}>
                            <input type="submit" className="btn btn-info-mob" value="Получить бесплатную косультацию"style={{border: 'none',width: '91%'}}/>
                        </div>
                    </form>
                </FormContent>
            </Form>
            
            
        </BlockCont>
    )
}