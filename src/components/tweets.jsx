import tweetProfilePhoto from '../images/tweet-profile-photo.png';
import tweetProfilePhotoTwo from '../images/Tweet-Profile-Photo.png';
import image1 from '../images/image 1.png';
import tweetImage from '../images/tweet-image.png';
import Verified from '../icones/Verified.png';
import Tweet from '../components/tweet.jsx';
import React from '../icones/React.png';
import Reply from '../icones/Reply.png';
import Retweet from '../icones/Retweet.png';
import Share from '../icones/Share.png';


const Tweets = () =>{
  const tweetArrayData =[
    {
      id: 1,
      tweetProfilePhoto : tweetProfilePhoto, 
      tweetTitleAuthor: 'CNN', 
      Verified: Verified, 
      tweetTitleDetails: 'CNN', 
      tweetTitleDateTime: '.2h',
      tweetText: 'President Joe biden touted a nex appointement President Joe biden touted a nex appointement President Joe biden touted a nex appointement President Joe biden touted a nex appointement President Joe biden touted a nex appointement',
      tweetImage: null,
      React: React,
      Reply: Reply,
      Retweet: Retweet,
      Share : Share,
      numberRetweet: '57',
      numberReply: '14',
      numberReact: '144',
      nuberShare: '174',
    }, 
    {
      id: 2,
      tweetProfilePhoto : tweetProfilePhotoTwo, 
      tweetTitleAuthor: 'The New York Times', 
      Verified: Verified, 
      tweetTitleDetails: 'anytimes', 
      tweetTitleDateTime: '.5m',
      tweetText: 'Garderring bouring proning the pandemic. Six blacks whriters shares whats are halpened them re-stablished Garderring bouring proning the pandemic. Six blacks whriters shares whats are halpened them re-stablished Garderring bouring proning the pandemic. Six blacks whriters shares whats are halpened them re-stablished',
      tweetImage: tweetImage,
      React: React,
      Reply: Reply,
      Retweet: Retweet,
      Share : Share,
      numberRetweet: '19',
      numberReply: '48',
      numberReact: '482',
      nuberShare: '',
    },
    {
      id: 3,
      tweetProfilePhoto : image1, 
      tweetTitleAuthor: 'CNN', 
      Verified: Verified, 
      tweetTitleDetails: 'CNN', 
      tweetTitleDateTime: '.4 Oct',
      tweetText: 'Le tweet le plus drole kkk',
      tweetImage: null,
      React: React,
      Reply: Reply,
      Retweet: Retweet,
      Share : Share,
      numberRetweet: '6.8k',
      numberReply: '36.6k',
      numberReact: '267.1k',
      nuberShare: '',
    },
    {
      id: 4,
      tweetProfilePhoto : image1, 
      tweetTitleAuthor: 'CNN', 
      Verified: Verified, 
      tweetTitleDetails: 'CNN', 
      tweetTitleDateTime: '.4 Oct',
      tweetText: 'Le tweet le plus drole kkk',
      tweetImage: null,
      React: React,
      Reply: Reply,
      Retweet: Retweet,
      Share : Share,
      numberRetweet: '118.7k',
      numberReply: '785.4k',
      numberReact: '3.3M',
      nuberShare: '',
    }
  ]
  return(
    <div className='tweets'>
      {tweetArrayData.map((tweet)=>
        <Tweet key={tweet.id} 
          tweetProfilePhoto ={tweet.tweetProfilePhoto}
          tweetTitleAuthor ={tweet.tweetTitleAuthor}
          Verified = {tweet.Verified}
          tweetTitleDetails ={tweet.tweetTitleDetails}
          tweetTitleDateTime ={tweet.tweetTitleDateTime}
          tweetText = {tweet.tweetText}
          tweetImage ={tweet.tweetImage}
          numberRetweet ={tweet.numberRetweet}
          numberReply = {tweet.numberReply}
          numberReact = {tweet.numberReact}
          nuberShare = {tweet.nuberShare}
          React = {tweet.React}
          Reply = {tweet.Reply}
          Retweet = {tweet.Retweet}
          Share = {tweet.Share}
      />)}
    </div>
  );
}

export default Tweets;