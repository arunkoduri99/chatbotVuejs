# chatbot

> chatbot 

## Build Setup

``` bash

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

```
## My Approch To Make this App
step1 : create new vue app and installed firebase
step2 : adding firebase config in new folder at src firebase/init.js this contains firebase config and credentails

## Code Working Flow
-- The home page '/' route is welcome component in which contains welcome page to get user name to enter the chat room this would hleps to identify the message belongs to which user so when to enter the name it will pass the user name as props to the new route chat with chat Component <br/>
-- The Chat Route '/chat' can not be direct access with entering the name i have used the route gaurd functionality so if this route does not contains props called name then it will redirect back to home page else it will contiue to chat room.
-- The chat is listed useing firebase database collection called 'messages' in the bottom of the page there is input box which is render from another component called new-message. <br/>
--  The Newmessage component have input so when some message entered and submitted then it will store the data with name provided by the user. <br/>
-- Whenever new message is added in collection then the Chat component will listen the collection and render the new message to the page.<br/>