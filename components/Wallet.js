import * as React from "react";
import Image from "next/image";

class Adv extends React.Component {
   
    render() {
      return (
        <div className="paym">
            
            <div style={{minWidth: '400px'}}>
                <div className="donutwith">
                    Пополнение напрямую на кошелёк
                </div>
                <form>
                    <div style={{marginBottom: '1em', position:'relative'}}>
                        <label className="lab">Сумма пополнения</label>
                        <input inputmode="decimal" id="amount" placeholder="Сумма пополнения" beforecontent="false" 
                        aftercontent="true" witherror="true" withsuccess="false" autocomplete="off" name="amount" className="inp" type="text" value=""></input>
                        <span className="valute"><span>RUB</span></span>
                    </div>
                    <div className="cont1">
                        <span className="span90">
Комиссия
                        </span>
                        <span className="span90">
0%
                        </span>
                        
                    </div>
                    <button className="btnpay">Пополнить</button>

                </form>
                <span className="span90">

                        </span>
            </div>
            <div className="gzlqb7-9 foJCFM">
                <div type="warning" className="cont32">
                        <div className="type1">Комиссия</div>
                        <div className="type2">0% </div>
                        <br/>
                        <div className="type1">Минимальная сумма депозита</div>
                        <div className="type2">1 USD</div>
                        <br/>
                        <div className="type1">Максимальная сумма депозита </div>
                        <div className="type2">10 000 USD</div>
                        <div className="type1">Адрес BTC-кошелька</div>
                        <div className="type2">xpub6DFH3U9dHF4WmSiX1HpY8Z4wf43ovyzxGBGx5iox3xNLJBMQiAG2RFCKuUMiGzrxYwnGFXtoFRM9iV8G5kjQxfvsFLsSURWYTyXAkpHpcnT</div>
                        <div className="type1">После оплаты, укажите сумму и Нажмите кнопку "ПОПОЛНИТЬ"</div>
                        <div className="type2">В течении 20 минут мы проверим и подтвердим платёж</div>
                    <br/>
                </div>
            </div>
            
          <style jsx>
            {`
            .type2{
                font-size: 14px;
    line-height: 24px;
    font-weight: inherit;
            }
            .type1{
                font-size: 16px;
                font-weight: bold;
                line-height: 28px;
                color: rgb(0, 0, 0);
            }
            .cont32{
                border-radius: 6px;
    border: 2px solid rgb(255, 230, 4);
    padding: 24px;
    margin-bottom: 16px;
    word-break: break-word;
    max-width: 500px;
            }

            .btnpay{
                width: 100%;
                font-weight: 500;
                text-align: center;
                cursor: pointer;
                position: relative;
                user-select: none;
                transition: all 0.2s ease 0s;
                white-space: nowrap;
                border-radius: 8px;
                font-size: 14px;
                line-height: 18px;
                min-height: 56px;
                min-width: 232px;
                padding: 18px;
                background: rgb(87, 102, 236);
                color: rgb(255, 255, 255);
                border: 1px solid rgb(87, 102, 236);
                outline: rgb(87, 102, 236);
            }            
            .span90{
                position: relative;
    background: inherit;
    display: inline;
    z-index: 1;
    padding-right: 0.2rem;
    font-size: 12px;
    color: rgb(103, 103, 147);
    line-height: 17px;
    font-weight: 400;
            }
            .cont1::before{
                content: "";
    position: absolute;
    bottom: 0.3rem;
    width: 100%;
    height: 0px;
    line-height: 0;
    border-bottom: 1px dotted rgb(103, 103, 147);
            }
            .cont1{
                position: relative;
    background: white;
    margin-bottom: 0.5rem;
            }
            .valute{
                position: absolute;
                top: 38px;
                right: 15px;
            }
            .inp:active, inp:hover, inp:focus{
                border-width: 1px 1px 2px;
                border-style: solid;
                border-color: rgb(87, 102, 236) rgb(87, 102, 236) rgb(253, 42, 71);
                border-image: initial;
                outline: rgb(87, 102, 236);
                transition: all 0.2s ease-in-out 0s;
            }
            .inp{
                line-height: 19px;
    width: 100%;
    font-size: 16px;
    border-width: 1px 1px 2px;
    border-style: solid;
    border-color: rgb(230, 234, 238) rgb(230, 234, 238) rgb(253, 42, 71);
    border-image: initial;
    border-radius: 2px;
    background: rgb(255, 255, 255);
    color: rgb(0, 0, 0);
    font-weight: 500;
    padding: 14px 13px 13px 14px;
    transition: all 0.2s ease 0s;
            }
            .lab{
                font-size: 12px;
    line-height: 18px;
    color: rgb(147, 169, 195);
    display: inline-block;
    margin-bottom: 5px;
            }
            .donutwith{
                font-size: 24px;
    line-height: 28px;
    color: rgb(0, 0, 0);
    font-weight: 500;
    margin-bottom: 24px;
            }
            .paym{
                display: flex;
    flex-direction: row;
    column-gap: 44px;
    background: rgb(255, 255, 255);
    border-radius: 6px;
    margin-top: 34px;
    margin-bottom: 40px;
    padding: 36px;
}
            }
       
            `}
        </style>
      </div>
      )
    }
  }
export default Adv