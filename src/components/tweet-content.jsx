import TweetActions from "./tweet-actions"
import TweetBody from "./tweet-body"

const TweetContent = () =>{
    return (
        <div className="tweet-content">
            <TweetBody/>
            <TweetActions/>
        </div>
    )
}

export default TweetContent