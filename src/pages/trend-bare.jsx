import TrendsBareItem from '../components/trends-bare-item.jsx';
import FollowBareItem from '../components/follow-bare-item.jsx'
import tweeterData from '../tweeter-data.json';


const TrendsBare = () => {
  return (
    <div>
      <div>
        <input placeholder='Search tweeter' className='trend-chearch'/>
      </div>
      <div  className="trends-for-you">
        <div className='trends-for-you-title'>
          <h4>{tweeterData.tendBare[1]}</h4>
          <img src={tweeterData.trendBare[2]} className="trends-setting"/>
        </div>
      {tweeterData.trendBare.map((itemTrend) => (
        <TrendsBareItem
          key={itemTrend.id}
          setting={itemTrend.setting}
          trending={itemTrend.trending}
          nameTweeter={itemTrend.nameTweeter}
          More={itemTrend.More}
          numberTweeter={itemTrend.numberTweeter}
          linkMore={itemTrend.linkMore}
        />
      ))}
        <a className="see-more" href='#'>{tweeterData.trendBare[5]}</a>
        </div>
      <div className='trends-for-you'>
        {tweeterData.trendFollows.map((itemFollow)=>(
      <FollowBareItem
        key={itemFollow.id}
        title={itemFollow.title}
        profil={itemFollow.profil}
        nameTweeter={itemFollow.nameTweeter}
        verified={itemFollow.verified}
        titleAuthor={itemFollow.titleAuthor}
        />
        ))}
      </div>
    </div>
    
 )
}
export default TrendsBare;