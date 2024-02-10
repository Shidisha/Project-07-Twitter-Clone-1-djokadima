import Tweet from '../components/tweet.jsx';
import tweeterData from '../tweeter-data.json';


const Tweets = () =>{
  return(
    <div className='tweets'>
      {tweeterData.tweet.map((tweetkey)=>
        <Tweet key={tweetkey.id} 
          tweetProfilePhoto ={tweetkey.tweetProfilePhoto}
          tweetTitleAuthor ={tweetkey.tweetTitleAuthor}
          Verified = {tweetkey.Verified}
          tweetTitleDetails ={tweetkey.tweetTitleDetails}
          tweetTitleDateTime ={tweetkey.tweetTitleDateTime}
          tweetText = {tweetkey.tweetText}
          tweetImage ={tweetkey.tweetImage}
          numberRetweet ={tweetkey.numberRetweet}
          numberReply = {tweetkey.numberReply}
          numberReact = {tweetkey.numberReact}
          nuberShare = {tweetkey.nuberShare}
          React = {tweetkey.React}
          Reply = {tweetkey.Reply}
          Retweet = {tweetkey.Retweet}
          Share = {tweetkey.Share}
      />)}
    </div>
  );
}

export default Tweets;