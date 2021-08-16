import React, { useState } from 'react'
import Header from './Header'
import Tweets from './Tweets'
import AddTweet from "./AddTweet";


function App() {

    const [allTweets, setAllTweets] = useState([]);



    function handleClick(tweets) {
        setAllTweets(prevValue => {
            return [...prevValue, tweets];
        });
    }

    function handleDelete(id) {
        setAllTweets(prevValue => {
            return prevValue.filter((item, index) => {
                return index !== id;
            });
        });
    }



    return (
        <div>
            <Header />
            <AddTweet onAdding={handleClick} />

            {allTweets.map((tweets, index) => (
                <Tweets
                    key={index}
                    id={index}
                    fname={tweets.fname}
                    texts={tweets.texts}
                    onDelete={handleDelete}
                />
            ))}

        </div>
    )
}

export default App
