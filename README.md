# Hamagram (In Development)

A blogging platform for hamsters built with the MERN stack and deployed to heroku. [View the live app here](https://hamagram.herokuapp.com/)

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
- Tested deployment works to heroku with current architecture so I don't need t restructure anything later
- Set up MongoDB connection (storing environment variables in .env (dotenv)) Also added these into the heroku environment variables
- I'm using MongoDB Atlas with their free tier but I had to open the access to all IP adresses as Heroku's ip's are dynamic (would like to do this differently with a proper app)