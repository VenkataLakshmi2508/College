const Button1 = (props ) => {
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
const btn1= (
<div className="social">
   <div>
       <Heading name="Social Buttons"/>
   
    <div className="btn">
       <Button1 name="Like" className="btn1" />
       <Button1 name="Comment" className="btn2" />
       <Button1 name="Share" className="btn3" />
    </div>
    </div>
</div>
)

ReactDOM.render(btn1, document.getElementById('root1'))

