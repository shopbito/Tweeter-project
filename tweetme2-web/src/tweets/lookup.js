import { backendLookup } from '../lookup'

export function apiTweetCreate(newTweets, callback){
    backendLookup("POST", "/tweets/create/", callback, {content: newTweets})
}

export function apiTweetAction(tweetId, action, callback){
    const data = {id: tweetId, action: action}
    backendLookup("POST", "/tweets/action/", callback, data )
}
  
  
export function apiTweetList(callback){
  
    backendLookup("GET", "/tweets/", callback)
}