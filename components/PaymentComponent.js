import AdvCash from "../components/AdvCash";
import Qiwi from "./Qiwi";
import * as React from "react";
import ChooseIndex from '../components/ChooseIndex'

class PaymentComponent extends React.Component {

state = {
    displayedTable: 'ChooseIndex',
    index: 1
}

constructor(props) {
    super(props)
    this.index = this.index.bind(this);
    this.showComponent = this.showComponent.bind(this)
  }

    index(n) {
      this.setState({index: n});
    }
    showComponent(componentName) {
        this.setState({displayedTable: componentName});
      }

      renderComponent(){
        switch(this.state.displayedTable) {
        case "AdvCash":
          return <AdvCash showComponent={this.showComponent} index={this.state.index}/>
        case "Qiwi":
          return <Qiwi />
        case "ChooseIndex":
          return <ChooseIndex showComponent={this.showComponent} index={this.index}/>
      }
    }
    render() {
     

      return <div>
{/*
<ul className="jqo51w-2 gHlUhX">
    <li className="jqo51w-3 glhYQM">
        <button className="sc-16gkhjv-1 kYhwGT"  onClick={() => this.showComponent('AdvCash')}>
            <a className="sc-1dgvlmb-0 chhuCe" >
                AdvCash
            </a>
        </button>
    </li>
    <li className="jqo51w-3 dMxIrN">
        <button className="sc-16gkhjv-1 kYhwGT" onClick={() => this.showComponent('PerfectMoney')}>
            <a className="sc-1dgvlmb-0 chhuCe" >
                PerfectMoney
            </a>
        </button>
    </li>
</ul>

*/}



    <div>{ this.renderComponent() }</div>

<style jsx>
{`

    `}
</style>
      </div>;
    }
  } 

export default PaymentComponent