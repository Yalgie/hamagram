# Hamagram

A blogging platform for hamsters built with the MERN stack and deployed to heroku. [View the live app here](https://hamagram.herokuapp.com/) (Might take some time to load if the app is asleep).

## Hamster Stories / User Stories
- As a hamster, I want to sign up to a platform so I can connect with other the hamsters on the network
- As a social hamster, I want to be able to share posts with hamsters in the network
- As a social hamster I want the hamsters in the network to like my posts

## The Tech
The hamagram application is built using the MERN stack. I chose this stack because I'm most comfortable with JS and being able to write the front and backend with the same language speeds up my development times considerably. MongoDB also being a NoSQL DB makes it even easier to use considering the collection models are basically JSON.

The react frontend utilises the Redux state management library along side the redux-thunk library to allow asynchronous requests, through these async requests I am interacting with the API on the express server, which in turn creates and retrieves data as needed and passes it back into the react app and updates the global state of the application.

## Functionality
Users (hamsters) arrive at the platform on the homepage and are presented with a welcome screen, they can then login if they have an existing account or register a new one. If a hamster decides to register a new account I perform super low level form linting (See Form Linting below) and if all is good, redux calls the API to create a new hamster. 

Once a hamster is logged in, express uses cookies to store the session data (See Session Storage below) which persists the authentication state. Hamsters can now access their private dashboard which only contains their name (See User Dash below), they are able to create new posts, view all posts in the feed from every hamster in the network and view the names of every hamster in the network.

When a hamster creates a new post they enter the post title and then write the post body content in markdown. The markdown is then parsed into HTML and rendered as a preview next to the form. Once a hamster is happy with the post they can create it and they are then redirected to the Feed page where all posts are visible. Hamsters can also 'star' a post and the amount of times a post is starred is represented by little badges underneath the post.

## Trade-Offs / Wishlist / Explanations
Due to time restraints there were quite a few things I didn't get around too but would like to update or improve:
- Authentication/Security: I implemented a super basic authentication wrapper but it's not meant to be Fort Knox level, it's just a super basic username and password which is created/compared with the bcrypt library. My experience is also very front-end heavy and I don't have much knowledge with making express apps secure, but ideally I'd want to implement something like JWT and wrap all API routes in an authentication checker with JWT. I'd also like to add brute force lockouts where after 3 attempts of logging in or similar the ip address is banned.
- Emails: I didn't include emails in the registration process because I didn't want to worry about having to set up an email provider and dealing with tokens etc. I could have used something like oAuth or Auth0 etc, but I wanted to make it myself.
- Form Linting: Ideally I'd like to send flash messages back to the front end if a user with the same name is found but instead I just implemented a basic front end if/else check.
- Session Storage: I'm using the cookie-session package which stores session data on the client side which obviously isn't super secure, but again it was a quicker option then using something like redis-connect and setting up a redis db.
- User Dash: Would like to add a 'Edit my details' kind of thing where you can update your username and change passwords. Email confirmations and stuff like that.
- Posts: I'd like to be able to edit and delete existing posts belonging to the authenticated hamster
- UI: Due to time restrictions I spent 90% of my time building out the functionality and architecture of the app and I didn't really focus much on how the thing looks. I attempted to use the MUI react library but it was my first time doing so, therefore things might not be set up or used the correct way.
- Testing: I don't have much experience using testing libraries such as Jest so I didn't get to implement any testing features due to it'd take too long to learn and get this app completed, but if I had more time I'd like to learn more about it and implement tests to this application.
- Architecture: This MERN app include both frontend and backend in one repo, therefore Express is doubling up on acting as an API and a static content server. I think this is okay for testing and prototyping such as this application, however ideally I think splitting the front and backend up would be best, perhaps having the api running on heroku by itself and hosting the react production build on something like AWS. 
- MongoDB: I chose to use MongoDB Atlas as it has a pretty low entry in terms of getting started - you just create a cluster and off you go. It also has a free tier which is helpful for things like this.
- Heroku: Similarly to my reasoning for MongoDB Atlas, Heroku's free tier and developer tools make getting your application into production quick and easy, it also has a free tier.
- CRA/React: I decided to use create-react-app as it's quick and easy to get started instead of having to manually create webpack builds and the like
- Redux/Thunk: I initially was going to try and use MobX but half way through when I was ready to implement a state management library i realised i was on CRA v1 and decorators (@obseravle, etc) aren't supported. So i decided to just use Redux, I'm also using the redux-thunk library to handle async requests because out of the box redux can't handle async requests very well.

## User Stories Revisited
Even though this application is far from complete, I believe this prototype addresses the hamster stories mentioned above. Hamsters are able to sign up/register for the platform. They can then create/share posts which are all accessible via the Feed page. Hamsters can also 'star' posts via the Feed page.

## Getting Started
If you're interested in setting this app up for yourself follow these instructions!

```
git clone https://github.com/Yalgie/hamagram.git

cd hamagram
npm install

cd client
npm install
```

The development environment uses the dotenv package, so you will need to create a .env file with the following environment variables:

```
ENV=dev
DB_CONN_STR=mongodb+srv://clusterURLXXX
DB_PASS=XXXXXX
DB_USER=XXXXXX
SECRET=XXXXXXX
```
Make sure to also add these to your production environment and change the ENV variable to ```production```.

Once you've done that run the dev script to get started which will concurrently run the express server and React development server.
```
cd ..
npm run dev 
```

Feel free to check out some of my other work her eon GitHub or [view my portfolio site](https://thecodingforge.com.au/). Click on the screen and navigate to the 'Work' folder.

