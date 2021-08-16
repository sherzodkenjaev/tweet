import React from 'react'
import person from "../images/person-icon.png";

function Tweets(props) {
    return (
        <div className="tweets">
            <div className="person">
                <img src={person} />
                <h6>{props.fname}</h6>
            </div>
            <p>{props.texts}</p>
            <button onClick={() => { props.onDelete(props.id) }}>Delete</button>
        </div>
    )
}

export default Tweets
