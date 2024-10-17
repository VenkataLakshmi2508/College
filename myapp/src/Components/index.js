import { Component } from "react";
import './index.css';
class Counters extends Component{
    state ={count:0}
    onIncrement = () => {
        this.setState(prevState => ({
          count: prevState.count + 1,
        }))
      }
      onDecreament =() => {
        this.setState(prevState => ({
           count:prevState.count -1,
        }) )
      }
    render(){
        const {count} = this.state
        return(
            <div className="main">
               
                    <h1 className="hh">Counter</h1>
                    <h1 className="hh pp">{count}</h1>
                    <div className="btn">
                      <button className="btns" onClick={this.onIncrement}>Increase</button>
                      <button className="btns" onClick={this.onDecreament}>Decrease</button>
                    </div>
                 
            </div>
        )
    }
}
export default Counters;