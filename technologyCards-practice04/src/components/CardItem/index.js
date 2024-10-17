import './index.css'
const Technologies =(props) =>{
    const {cards,key}= props
    const{title,description,imgUrl,className}=cards
    return(
        <div className="card">
           <div className={` ${className}`}>
              <div className="common">
              <h3>{title}</h3>
              <p>{description}</p>
              <div className="emojis">
                  <img className='avatar' src={imgUrl} alt="Loading"></img>
              </div>
              </div>
           </div>
        </div>
    )
}
export default Technologies

