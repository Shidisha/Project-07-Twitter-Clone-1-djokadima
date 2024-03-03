import { useState } from "react";

const Tweet = ({ tweetTitleAuthor, Verified, tweetTitleDetails, tweetTitleDateTime, tweetImage, tweetText, numberRetweet, numberReply, numberReact, numberShare, Reply, Retweet, React, Rreact, Share }) => {

  const [react, setReact] = useState(numberReact);
  const [typeReact, setTypeReact] = useState("increment");
  const [icon, setIcon] = useState(React);


  const ReactClick = () => {
    if (typeReact === "increment") {
      setReact(react + 1);
      setTypeReact("desincrement");
      setIcon(React);
    } else {
      setReact(react - 1);
      setTypeReact("increment");
      setIcon(Rreact);
    }
  };


  return (
    <div className="tweet">
      <div className="tweet-avatar">
        <a href='#'><img src="" alt='image tweet profile photo' /></a>
      </div>
      <div className="tweet-content">
        <div className="tweet-body">
          <div className="tweet-title">
            <h2 className="tweet-title-author">{tweetTitleAuthor}</h2>
            <img className="tweet-title-author" src={Verified} alt='icone verified' />
            <span className="tweet-title-details">@{tweetTitleDetails}</span>
            <span className="tweet-title-details">{tweetTitleDateTime}</span>
          </div>
          <p className="tweet-text">{tweetText}</p>
          <div className='tweet-image'>
            <img src={tweetImage} />
          </div>
        </div>
        <div className="tweet-actions">
          <div className='tweet-action'>
            <button className='tweet-action-button'><img src={Reply} alt='icone Reply' /></button>
            <p>{numberRetweet}</p>
          </div>
          <div className='tweet-action'>
            <button className='tweet-action-button'><img src={Retweet} alt='icone Retweet' /></button>
            <p>{numberReply}</p>
          </div>
          <div className='tweet-action'>
            <button onClick={ReactClick} className='tweet-action-button'><img src={icon} alt='icone React' /></button>
            <p>{react}</p>
          </div>
          <div className='tweet-action'>
            <button className='tweet-action-button'><img src={Share} alt='icone Share' /></button>
            <p>{numberShare}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tweet;