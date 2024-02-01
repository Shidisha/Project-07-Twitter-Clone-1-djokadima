import React from 'react';
import TweetEditor from '../components/tweetEditor.jsx';
import Header from '../components/header.jsx';
import Tweets from '../components/tweets';

function Home() {
  return (
    <main className="timeline">
      <Header />
      <TweetEditor />
      <Tweets />
    </main>
  );
}

export default Home;