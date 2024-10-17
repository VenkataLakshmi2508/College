import { Component } from "react"

class FruitsCounter extends Component{
    render(){
        return(
            <div className="main">
                <div className="main2">
                    <h1 className="hh">Bob ate {mango} mangoes {banana} bananas</h1>
                    <div className="box">
                        <div>
                          <img src="https://assets.ccbp.in/frontend/react-js/mango-img.png" alt="Loading" className="image"></img>
                           <button className="btn">Eat Mango</button>
                        </div>
                        <div>
                          <img src="https://assets.ccbp.in/frontend/react-js/banana-img.png" alt="Loading" className="image"></img>
                           <button className="btn">Eat Mango</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FruitsCounter;