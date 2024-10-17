
import { Component } from "react";
import './index.css';
class SpeedoMeter extends Component{
    state ={count:0}
    onAccelerate = () => {
        this.setState(prevState => ({
          count: prevState.count + 10,
        }))
      }
      onAppyBrake =() => {
        this.setState(prevState => ({
           count:prevState.count -10,
        }) )
      }
    render(){
        const {count} = this.state
        return(
            <div className="main">
                <div className="main1">
                    <h1 className="text">SpeedoMeter</h1>
                    <img src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png" className="image" alt="SpeedoMeter"></img>
                    <h2 className="text">Speed is {count}mph</h2>
                    <p className="text">Min Limit is 0mph, Max LImit is 200mph</p>
                    <div className="btn">
                      <button className="btn1" onClick={this.onAccelerate}>Accelerate</button>
                      <button className="btn2" onClick={this.onAppyBrake}>Apply Brake</button>
                    </div>
               </div> 
            </div>
        )
    }
}
export default SpeedoMeter;