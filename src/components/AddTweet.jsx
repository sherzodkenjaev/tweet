import React, { useState } from 'react'

function AddTweet(props) {

    const [tweets, setTweets] = useState({
        fname: "",
        texts: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;

        setTweets(prevValue => {
            return {
                ...prevValue,
                [name]: value
            };
        });
    }

    function onAdding(event) {
        props.onAdding(tweets);
        event.preventDefault();

        setTweets({
            fname: "",
            texts: ""
        });
    }


    return (
        <div className="addtweet">
            <input name="fname" onChange={handleChange} value={tweets.fname} class="form-control form-control-lg" type="text" placeholder="your full name here..." aria-label=".form-control-lg example"></input>
            <textarea name="texts" onChange={handleChange} value={tweets.texts} class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="your text goes here..."></textarea>
            <button onClick={onAdding} type="button" class="btn btn-primary">Add</button>
        </div>
    )
}

export default AddTweet
