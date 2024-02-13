const TrendsBareItem =({trending, nameTweeter, numberTweeter, More })=>{
  return(
  <div className="trend">
     <div className="trends-details">
        <span className= "trending" >{trending}</span>
        <p>{nameTweeter}</p>
        <span className= "trending"> {numberTweeter} Tweets</span>
      </div>
       <img className="trends-more" src={More} />
       
  </div>
  )
}

export default TrendsBareItem;