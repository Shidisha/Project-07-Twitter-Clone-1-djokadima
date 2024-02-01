import Avatar from '../components/avatar.jsx';
import TweetEditorForm from '../components/tweetEditorForm.jsx';
const TweetEditor = () => {
  return (
    <div className='tweet-editor'>
      <Avatar />
      <TweetEditorForm />
    </div>
  );
}

export default TweetEditor