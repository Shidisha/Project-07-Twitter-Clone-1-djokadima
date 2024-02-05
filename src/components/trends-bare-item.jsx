const TrendsBareItem =({setting,trending, nameTweeter, numberTweeter, More })=>{
  return(
    <div className="trends">
    <div>
      <img src={setting} className="trends-for-you-details"/>
      <span className="trends-for-you-details">{trending}</span>
      <img src={More} className="trends-for-you-details"/>
      <p className="trends-for-you-details">{nameTweeter}</p>
      <span className="trends-for-you-details">{numberTweeter}tweets</span>
    </div>
    </div>
  )
}

export default TrendsBareItem;