import { backendLookup } from '../lookup'

export function apiTweetCreate(newTweet, callback){
    backendLookup("POST", "/tweets/create", callback , {content:newTweet})
}


export function apiTweetAction(tweetId, action, callback){
    const data = {id: tweetId, action:action}
    backendLookup("POST", "/tweets/action", callback , data)
}
 
export function apiTweetDetail(tweetId, callback){
    backendLookup("GET", `/tweets/${tweetId}`, callback)
}



export function apiTweetList(username, callback, nextUrl){
    let endpoit  = "/tweets"
    if (username){

        endpoit = `/tweets ?username=${username}`
    }
    if (nextUrl !== null && nextUrl !== undefined){
        endpoit = nextUrl.replace("http://localhost:8000/api", " ")
    }
    backendLookup("GET", endpoit, callback)
}