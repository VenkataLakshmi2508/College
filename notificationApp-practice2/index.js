const Notification = props => {
  const{className,name}=props;
  return(
    <button className= {`button ${className}`}>{name}</button>
  )
}
const Heading=props =>{
  const{name}=props;
  return(
    <h1 className="hh">{name}</h1>
  )
  }
const element = (
  <div className="main">
       <Heading name="Notifications"/>
       <div className="bar">
           <Notification name="Information Message" className="bar1" />
           <Notification name="Success Message" className="bar2" />
           <Notification name="Warning Message" className="bar3" />
           <Notification name="Error Message" className="bar4" />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
