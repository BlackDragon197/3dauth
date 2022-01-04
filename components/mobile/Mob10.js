import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import * as React from 'react';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import styled from 'styled-components'

const Container = styled.div`
//width: 100%;
width: 72%;
display: flex;
align-items: center;
justify-content: center;
margin: auto;
position: relative;
background: #FFF;
`

const AddBtn = styled.a`

width: ${props => props.width};
height: 4em;
font-family: Gilroy;
font-style: normal;
font-weight: 600;
font-size: 3vw;
color: #FFFFFF;
display: flex;
justify-content: center;
align-items: center;
box-sizing: border-box;
border-radius: 6px;
cursor: pointer;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
transition: 500ms;
left: ${props => props.left};
background: ${props => props.background};
`

export default function Block(){
    
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

    return (
        <Container> 
            <div className="faq1" id="faq">
                <div className="faq-title1">Часто задаваемые вопросы</div>
                
                    <Accordion id="accordion" style={{boxShadow: '0px 15px 18px rgba(51, 51, 51, 0.08)', borderRadius: '7px',  background: 'rgba(234, 241, 255, 0.5)', marginBottom:'30px', paddingLeft: '30px'}} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary
                        expandIcon={<HorizontalRuleIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                        >
                            <Typography className="typographyheadmob" style={{textAlign: 'left',fontFamily: "'Lato', sans-serif", fontStyle:'normal', fontWeight: 'bold', fontSize:'4vw', lineHeight:'140%', color: '#15274E'}} sx={{ width: '100%', flexShrink: 0 }}>
                            Как зарегистрироваться самостоятельно?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography style={{textAlign: 'left',fontWeight: '500',width: '100%', fontFamily: "'Lato', sans-serif", fontStyle:'normal', fontSize:'3vw', lineHeight:'130%', color: '#15274E'}}>
                            Необходимо заполнить форму регистрации и пройти верификацию профиля. Ссылка для регистрации тут.
                            <br /><br />
                            <AddBtn  width="60%" background="#15274E" left="14.240vw" href="/registration">Регистрация                    
                       
        </AddBtn>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion style={{boxShadow: '0px 15px 18px rgba(51, 51, 51, 0.08)', borderRadius: '7px',background: 'rgba(234, 241, 255, 0.5)', marginBottom:'30px', paddingLeft: '30px'}} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                        <AccordionSummary
                        expandIcon={<HorizontalRuleIcon />}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                        >
                            <Typography  className="typographyheadmob" style={{textAlign: 'left',fontFamily: "'Lato', sans-serif", fontStyle:'normal', fontWeight: 'bold', fontSize:'4vw', lineHeight:'140%', color: '#15274E'}} sx={{ width: '100%', flexShrink: 0 }}>Какой минимальный депозит?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography  style={{textAlign: 'left',fontWeight: '500',width: '100%', fontFamily: "'Lato', sans-serif", fontStyle:'normal', fontSize:'3vw', lineHeight:'130%', color: '#15274E'}}>
                            Размер минимального депозита зависит каждой конкретной программы, по программе 14% доходности — депозит от 10 000 рублей.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion style={{boxShadow: '0px 15px 18px rgba(51, 51, 51, 0.08)', borderRadius: '7px',background: 'rgba(234, 241, 255, 0.5)', marginBottom:'30px', paddingLeft: '30px'}} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                        <AccordionSummary
                        expandIcon={<HorizontalRuleIcon />}
                        aria-controls="panel3bh-content"
                        id="panel3bh-header"
                        >
                            <Typography  className="typographyheadmob" style={{textAlign: 'left',fontFamily: "'Lato', sans-serif", fontStyle:'normal', fontWeight: 'bold', fontSize:'4vw', lineHeight:'140%', color: '#15274E'}} sx={{ width: '100%', flexShrink: 0 }}>
                            С какими акциями и индексами работает Pegas Capital?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography  style={{textAlign: 'left',fontWeight: '500',width: '100%', fontFamily: "'Lato', sans-serif", fontStyle:'normal', fontSize:'3vw', lineHeight:'130%', color: '#15274E'}}>
                            Наши трейдеры работают со многими акциями и котировками, в том числе нефть, ценные металлы, акции компаний Tesla, Google, и.т.д. <br /><br />

Для более подробной информации оставьте заявку и наш менеджер свяжется с вами.<br /><br />

Вторым направлением компании является торговля криптовалютой и майнинг
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion style={{boxShadow: '0px 15px 18px rgba(51, 51, 51, 0.08)', borderRadius: '7px',background: 'rgba(234, 241, 255, 0.5)', marginBottom:'30px', paddingLeft: '30px'}} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                        <AccordionSummary
                        expandIcon={<HorizontalRuleIcon />}
                        aria-controls="panel4bh-content"
                        id="panel4bh-header"
                        >
                            <Typography  className="typographyheadmob" style={{textAlign: 'left',fontFamily: "'Lato', sans-serif", fontStyle:'normal', fontWeight: 'bold', fontSize:'4vw', lineHeight:'140%', color: '#15274E'}} sx={{ width: '100%', flexShrink: 0 }}>С какими банками работает Pegas Capital?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography style={{textAlign: 'left',fontWeight: '500',width: '100%', fontFamily: "'Lato', sans-serif", fontStyle:'normal', fontSize:'3vw', lineHeight:'130%', color: '#15274E'}}>
                            Вы можете получить выплату на карту любого банка России, который работает легально и лицензирован Центробанком РФ.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion style={{boxShadow: '0px 15px 18px rgba(51, 51, 51, 0.08)', borderRadius: '7px',background: 'rgba(234, 241, 255, 0.5)', marginBottom:'30px', paddingLeft: '30px'}} expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                        <AccordionSummary
                        expandIcon={<HorizontalRuleIcon />}
                        aria-controls="panel4bh-content"
                        id="panel4bh-header"
                        >
                            <Typography  className="typographyheadmob" style={{textAlign: 'left',fontFamily: "'Lato', sans-serif", fontStyle:'normal', fontWeight: 'bold', fontSize:'4vw', lineHeight:'140%', color: '#15274E'}} sx={{ width: '100%', flexShrink: 0 }}>Как связаться с Pegas Capital в своём городе?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography  style={{textAlign: 'left',fontWeight: '500',width: '100%', fontFamily: "'Lato', sans-serif", fontStyle:'normal', fontSize:'3vw', lineHeight:'130%', color: '#15274E'}}>
                            Для начала работы пройдите регистрацию личного кабинета, это займёт 1 минуту. Это бесплатно! <br /><br />

                            После у вас будет уникальный айди, с которым вы можете обратиться в поддержку (почта) и получить все ответы на ваши вопросы. <br /><br />

                            Также вы можете оставить заявку с помощью сайта.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion style={{boxShadow: '0px 15px 18px rgba(51, 51, 51, 0.08)', borderRadius: '7px',background: 'rgba(234, 241, 255, 0.5)', marginBottom:'30px', paddingLeft: '30px'}} expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                        <AccordionSummary
                        expandIcon={<HorizontalRuleIcon />}
                        aria-controls="panel4bh-content"
                        id="panel4bh-header"
                        >
                            <Typography  className="typographyheadmob" style={{textAlign: 'left',fontFamily: "'Lato', sans-serif", fontStyle:'normal', fontWeight: 'bold', fontSize:'4vw', lineHeight:'140%', color: '#15274E'}} sx={{ width: '100%', flexShrink: 0 }}>Как пополнить счёт Pegas Capital?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography  style={{textAlign: 'left',fontWeight: '500',width: '100%', fontFamily: "'Lato', sans-serif", fontStyle:'normal', fontSize:'3vw', lineHeight:'130%', color: '#15274E'}}>
                            Детальная видеоинструкция представлена по ссылке. <br /><br />

Вы можете просмотреть данную инструкцию, зарегистрироваться и начать работу с кабинетом. <br /><br />

Если у вас остались вопросы — заполните одну из форм на бесплатную консультацию с менеджером и мы поможем вам, ответим на все вопросы относительно работы с Pegas Capital.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion style={{boxShadow: '0px 15px 18px rgba(51, 51, 51, 0.08)', borderRadius: '7px',background: 'rgba(234, 241, 255, 0.5)', marginBottom:'30px', paddingLeft: '30px'}} expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                        <AccordionSummary
                        expandIcon={<HorizontalRuleIcon />}
                        aria-controls="panel4bh-content"
                        id="panel4bh-header"
                        >
                            <Typography  className="typographyheadmob" style={{textAlign: 'left',fontFamily: "'Lato', sans-serif", fontStyle:'normal', fontWeight: 'bold', fontSize:'4vw', lineHeight:'140%', color: '#15274E'}} sx={{ width: '100%', flexShrink: 0 }}>Как пройти верификацию аккаунта?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography style={{textAlign: 'left',fontWeight: '500',width: '100%', fontFamily: "'Lato', sans-serif", fontStyle:'normal', fontSize:'3vw', lineHeight:'130%', color: '#15274E'}}>
                            Для верификации необходимо подтвердить ваш номер телефона и загрузить документы.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion style={{boxShadow: '0px 15px 18px rgba(51, 51, 51, 0.08)', borderRadius: '7px',background: 'rgba(234, 241, 255, 0.5)', marginBottom:'30px', paddingLeft: '30px'}} expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
                        <AccordionSummary
                        expandIcon={<HorizontalRuleIcon />}
                        aria-controls="panel4bh-content"
                        id="panel4bh-header"
                        >
                            <Typography  className="typographyheadmob" style={{textAlign: 'left',fontFamily: "'Lato', sans-serif", fontStyle:'normal', fontWeight: 'bold', fontSize:'4vw', lineHeight:'140%', color: '#15274E'}} sx={{ width: '100%', flexShrink: 0 }}>Какая гарантия сохранения моих средств?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography style={{textAlign: 'left',fontWeight: '500',width: '100%', fontFamily: "'Lato', sans-serif", fontStyle:'normal', fontSize:'3vw', lineHeight:'130%', color: '#15274E'}}>
                            Наша компания является официально зарегистрированным юридическим лицом со счётом в банке и всеми подтверждающими документами.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion style={{boxShadow: '0px 15px 18px rgba(51, 51, 51, 0.08)', borderRadius: '7px',background: 'rgba(234, 241, 255, 0.5)', marginBottom:'30px', paddingLeft: '30px'}} expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
                        <AccordionSummary
                        expandIcon={<HorizontalRuleIcon />}
                        aria-controls="panel4bh-content"
                        id="panel4bh-header"
                        >
                            <Typography  className="typographyheadmob" style={{textAlign: 'left',fontFamily: "'Lato', sans-serif", fontStyle:'normal', fontWeight: 'bold', fontSize:'4vw', lineHeight:'140%', color: '#15274E'}}  sx={{ width: '100%', flexShrink: 0 }}>На чём вы зарабатываете?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography style={{textAlign: 'left',fontWeight: '500',width: '100%', fontFamily: "'Lato', sans-serif", fontStyle:'normal', fontSize:'3vw', lineHeight:'130%', color: '#15274E'}}>
                            Наша компания зарабатывает на комиссии, которую мы получаем с каждой сделки, чем больше позитивных сделок совершает наша компания, тем больше зарабатываем мы и наши клиенты.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
            </div>
            <style jsx>
            {`
           
            #back-faq{
                background: rgba(140, 80, 251, 0.3) !important;
                box-shadow: 0px 15px 18px rgba(51, 51, 51, 0.08);
                border-radius: 7px;
            }
            .faq-title1{
                position: relative;
                top: 0;
                left: 10%;
                font-size: 7vw;
                line-height: 140%;
                color: #15274E !important;
                font-family: 'Lato', sans-serif;
                font-style: normal;
                font-weight: bold;
                margin: 50px 0;
                text-align: center;
            }
            .faq{
                width: 80%;
                margin-bottom: 40px;
            }
              #accordion:first-shild:before{
                  content: "";
                height: 0px !important;
              }
            `}
        </style>
        </Container>

    )
}