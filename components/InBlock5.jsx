import styled from 'styled-components'
import Image from 'next/image'
import Heading from '../components/Heading4.jsx'
import emailjs from 'emailjs-com'

// import{ init } from 'emailjs-com';
// init("user_xmTkhFikSdM6Z4X20TcYv");

import{ init } from 'emailjs-com';
init("user_t18aTjWVzTkXBjZSIEkUa");

const BlockCont = styled.div`
width: 100%;
height: 92.130vh;
display: flex;
flex-direction: row;
position: relative;

`

const Form= styled.div`
width: 60.417vw;
height: 100%;
//background: red;
display: flex;
align-items: center;
justify-content: center;
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
height: 63.761vh;

`

const Head = styled.h3`
font-family: Inter;
font-style: normal;
font-weight: 600;
font-size: 2.344vw;
line-height: 2.344vw;
color: #333333;

`

const Article = styled.p`
font-family: 'Lato', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 1.406vw;
line-height: 1.806vw;
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
            <Form>
                <FormContent>
                    <Head>
                        Хотите задать волнующий вопрос по одной из наших программ?
                    </Head>
                    <Article>
                    Оставьте свои контактные данные и менеджер <br />PEGAS CAPITAL свяжется с вами в ближайшее время!
                    </Article>
                    <form onSubmit={sendEmail}>
                        <div>
                            <input type="text" className="form-control" placeholder="Имя" name="name"/>
                        </div>
                        <div>
                            <input type="email" className="form-control" placeholder="E-mail" name="email"/>
                        </div>
                        <div>
                            <input type="tel" className="form-control" placeholder="+7" name="phone"/>
                        </div>
                        <div>
                            <input type="submit" className="btn btn-info" value="Отправить сообщение"/>
                        </div>
                    </form>
                </FormContent>
            </Form>
            <ImgCont>
                <img src="/block5/phone.png" width="100%" height="100%"/>
            </ImgCont>
            
        </BlockCont>
    )
}