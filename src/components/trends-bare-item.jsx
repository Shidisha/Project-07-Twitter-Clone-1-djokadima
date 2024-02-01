const TrendsBareItem =({title, setting,trending, nameTweeter, numberTweeter, More })=>{
  return(
    <div>
      <h4>{title}</h4>
      <img src={setting}/>
      <span>{trending}</span>
      <img src={More}/>
      <p>{nameTweeter}</p>
      <span>{numberTweeter}tweets</span>
    </div>
  )
}

export default TrendsBareItem;