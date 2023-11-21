import { backendLookup } from '../lookup'

export function apiTweetCreate(newTweets, callback){
    backendLookup("POST", "/tweets/create/", callback, {content: newTweets})
}
  
export function apiTweetList(callback){
  
    backendLookup("GET", "/tweets/", callback)
}