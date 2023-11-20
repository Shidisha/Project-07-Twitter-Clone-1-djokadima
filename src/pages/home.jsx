import React from 'react';
import Header from '../components/header';
import TweetEditor from '../components/tweet-editor';

function Home() {
    return (
        <main className="timeline">
           <Header/>
           <TweetEditor/>
        </main>
    );
}

export default Home;