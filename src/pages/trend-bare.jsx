import TrendsBareItem from '../components/trends-bare-item.jsx';
import FollowBareItem from '../components/follow-bare-item.jsx'
import tweeterData from '../tweeter-data.json';


const TrendsBare = () => {
  return (
    <div className="trends">
      <div>
        <input placeholder='Search tweeter' className='trend-chearch' />
      </div>
      <div className="trends-for-you">
        <div className='trends-for-you-title'>
          <h4>{tweeterData.trendBare.title}</h4>
          <img className="trends-setting" src="https://res.cloudinary.com/dheib2lbf/image/upload/v1707514749/zooupiipamgjh2zmf0dq.png" />
        </div>
        {tweeterData.trendBare.map((itemTrend) => (
          <TrendsBareItem
            key={itemTrend.id}
            trending={itemTrend.trending}
            nameTweeter={itemTrend.nameTweeter}
            More={itemTrend.More}
            numberTweeter={itemTrend.numberTweeter}
            linkMore={itemTrend.linkMore}
          />
        ))}
        <a className="see-more" href="#">Show more</a>
      </div>
      <div className='trends-for-you'>
        {tweeterData.trendFollows.map((itemFollow) => (
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