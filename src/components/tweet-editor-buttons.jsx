import Button from "./button"
import TweetEditorActions from "./tweet-editor-actions"
const TweetEditorButtons = () =>{
    return(
        <div className="tweet-editor-buttons">
            <TweetEditorActions/>
            <Button/>
        </div>
    )
}

export default TweetEditorButtons