import TweetAvatar from "./tweet-avatar"
import TweetContent from "./tweet-content"

const Tweet = () =>{
    return (
        <div className="tweet">
            <TweetAvatar/>
            <TweetContent/>
        </div>
    )
}

export default Tweet