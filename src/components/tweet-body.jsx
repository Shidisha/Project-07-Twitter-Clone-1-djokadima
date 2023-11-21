import TweetText from "./tweet-text"
import TweetTitle from "./tweet-title"

const TweetBody = () =>{
    return(
        <div className="tweet-body">
            <TweetTitle/>
            <TweetText/>
        </div>
    )
}

export default TweetBody