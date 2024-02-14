import tweeterData from '../tweeter-data.json';
import { BsEmojiGrin } from "react-icons/bs";
import { MdOutlineGifBox } from "react-icons/md";
import { GoFileMedia } from "react-icons/go";
import { BiPoll } from "react-icons/bi";
import { GrScheduleNew } from "react-icons/gr";

const TweetEditor = () => {
  return (
    <div>
      <div className='tweet-editor'>
        <a href='#'><img src= {tweeterData.users[1]} alt='image photo tweeter' /></a>
        <div className='tweet-editor-form'>
          <input className='tweet-editor-input' type="text" name="text" placeholder='Whats happening?' />
          <div className='tweet-editor-buttons'>
            <div className='tweet-editor-actions'>
              <span><GoFileMedia /></span>
              <span><MdOutlineGifBox /></span>
              <span><BiPoll /></span>
              <span><BsEmojiGrin /></span>
              <span><GrScheduleNew /></span>
              
            </div>
            <div >
              <button className='button'>Tweet</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TweetEditor
