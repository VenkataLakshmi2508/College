const Box = props => {
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
    <div className="hh">
      <Heading name="Boxes"/>
    </div>
     <div className="box">
        <Box name="Small" className="box1" />
        <Box name="Medium" className="box2" />
        <Box name="Large" className="box3" />
     </div>
</div>
)

ReactDOM.render(element, document.getElementById("root"));
