import More from '../icones/More-2.png';
import TrendsBareItem from '../components/trends-bare-item.jsx';
import FollowBareItem from '../components/follow-bare-item.jsx'
import setting from '../icones/Settings.png';
import tweetProfil from '../images/Tweet-Profile-Photo.png';
import verified from '../icones/Verified.png';
import tweeterProfil from '../images/tweet-profile-photo.png';
import imageTweeter from '../images/image1.png';

const TrendsBare = () => {
  const itemTrends = [
    {
      id: 1,
      title: "Trends For You",
      setting:setting,
      trending: "Trending in Turkey",
      More: More,
      nameTweeter: "SQUID",
      numberTweeter: "2,066",
    },
    {
      id: 2,
      trending: "Trending in Turkey",
      More: More,
      nameTweeter: "SQUID",
      numberTweeter: "2,066",
    },
    {
      id: 3,
      trending: "Trending in Turkey",
      More: More,
      nameTweeter: "SQUID",
      numberTweeter: "2,066",
    },
    {
      id: 4,
      trending: "Trending in Turkey",
      More: More,
      nameTweeter: "SQUID",
      numberTweeter: "2,066",
    }
  ];
   const itemFollows = [
     {
       id:1,
       title: "Who to follow",
       profil:tweetProfil,
       nameTweeter:"The New York Times",
       verified: verified,
       titleAuthor: "nytimes",
     },
     {
        id:2,
        profil:tweeterProfil,
        nameTweeter:"CNN",
        verified: verified,
        titleAuthor: "CNN",
      },
     {
       id:3,
       profil:imageTweeter,
       nameTweeter:"Tweeter",
       verified: verified,
       titleAuthor: "tweeter",
     }
   ]
  
  return (
    <div>
      <div>
        <input placeholder='Search tweeter'/>
      </div>
      {itemTrends.map((itemTrend) => (
        <TrendsBareItem
          key={itemTrend.id}
          title={itemTrend.title}
          setting={itemTrend.setting}
          trending={itemTrend.trending}
          nameTweeter={itemTrend.nameTweeter}
          More={itemTrend.More}
          numberTweeter={itemTrend.numberTweeter}
          linkMore={itemTrend.linkMore}
        />
      ))}
        {itemFollows.map((itemFollow)=>(
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
    
 )
}
export default TrendsBare;