import React, {useState}  from 'react';
import{TweetCreate} from './create';
import {TweetsList} from './list';



export function TweetsComponent(props){
    const [newTweets, setNewTweets] = useState([])
    const cantweet = props.cantweet === 'false' ? false : true
    const handleNewTweet = (newTweet) =>{
      let tempNewTweets = [...newTweets]
      tempNewTweets.unshift(newTweet)
      setNewTweets(tempNewTweets)
    }
    return <div className= {props.className}>
            {cantweet === true && <TweetCreate didTweet={handleNewTweet} className='col-12 mb-3'/>}
        <TweetsList newTweets={newTweets} {...props}/>
    </div>
}

  


  
