# Hamagram (In Development)

A blogging platform for hamsters built with the MERN stack and deployed to heroku. [View the live app here](https://hamagram.herokuapp.com/) (Might take some time to load if the app is asleep).

## Getting Started
``` Install Instructions
git clone https://github.com/Yalgie/hamagram.git

cd hamagram
npm install

cd client
npm install

cd ..
npm run dev 
```

## Deployment
Automatic builds are triggered on heroku upon pushing to the master branch.

# Process & Notes
- Scaffolded the app with basic express app and CRA (create-react-app)
- Tested deployment works to heroku with current architecture so I don't need to restructure anything later
- Set up MongoDB connection (storing environment variables in .env (dotenv)) Also added these into the heroku environment variables
- I'm using MongoDB Atlas with their free tier but I had to open the access to all IP adresses as Heroku's ip's are dynamic (would like to only open them to the needed ip's)
- Refactored front end app a bit - deleted service workers and installed node-sass for styling
- Using bootstrap and font-awesome libraries with CDN's in public.html for speeding up prototyping
- Scaffolding react router - adding home page and 404 detection with switch component
- Adding in user creation api and database shema
- Built out test axios post request on react front end to test if api call works and saves to database - alternatively could have used something like Postman to do this but I need to build out the axios requests regardless
- Using cookie-session instead of saving session data on a database like redis - just for this prototype it's less overhead and easier to setup, not the most secure thing but for the purpose of this app I think it's fine.
- Was going to use MobX but realised I used CRA v1 and decoraters aren't supported so going to use Redux
- Set up redux to handle authentication state across the app.
- Using react hooks with form data and redux dispatch events
- Added authentication in and private routes that redirect if not authenticated
- Added flash messaging for signup form
- Starting to pass customized user data through