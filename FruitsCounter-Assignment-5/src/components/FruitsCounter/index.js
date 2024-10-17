import { Component } from 'react'
import './index.css'
class FruitsCounter extends Component{
    state ={mangoCount:0 , bananaCount:0}
    mangoIncrement = () => {
    this.setState(prevState => ({
      mangoCount: prevState.mangoCount + 1,
       }))
    }
   bananaIncrement =() => {
    this.setState(prevState => ({
       bananaCount : prevState.bananaCount + 1,
       }) )
    }
    render(){
        const {mangoCount, bananaCount} = this.state
        return(
            <div className="main">
                <div className="main1">
                    <h1 className="hh">Bob ate {mangoCount} mangoes {bananaCount} bananas</h1>
                    <div className="box">
                        <div className="box1">
                              <img src="https://assets.ccbp.in/frontend/react-js/mango-img.png" alt="Mango" className="image"></img>
                              <button type="button" onClick={this.mangoIncrement}  className="btn1" >Eat Mango</button>
                        </div>
                        <div className="box1">
                             <img src="https://assets.ccbp.in/frontend/react-js/banana-img.png" alt="Banana" className="image"></img>
                             <button type="button" onClick={this.bananaIncrement}  className="btn" >Eat Banana</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FruitsCounter;