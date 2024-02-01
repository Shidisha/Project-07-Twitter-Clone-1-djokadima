import ProfilePhoto from '../images/profile-photo.png';
import Emoji from '../icones/Emoji.png';
import Gif from '../icones/Gif.png';
import Media from '../icones/Media.png';
import Poll from '../icones/Poll.png';
import Schedule from '../icones/Schedule.png';

const TweetEditor = () => {
  return (
    <div>
      <div className='tweet-editor'>
        <a href='#'><img src={ProfilePhoto} alt='image photo tweeter' /></a>
        <div className='tweet-editor-form'>
          <input className='tweet-editor-input' type="text" name="text" placeholder='Whats happening?' />
          <div className='tweet-editor-buttons'>
            <div className='tweet-editor-actions'>
              <img src={Media} alt='Media icone' />
              <img src={Gif} alt='Gif icone' />
              <img src={Poll} alt='Poll icone' />
               <img src={Emoji} alt='Emoji icone' />
              <img src={Schedule} alt='Schedule icone'/>
              
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
