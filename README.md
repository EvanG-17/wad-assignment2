# Assignment 2 - Web API.

Name: Evan Geary

## Features.

 
 + Login Page
 + Signup/Register
 + Protected Routes
 

## Setup requirements.

cd into movies-api and npm run dev

## API Configuration

Describe any configuration that needs to take place before running the API. For example, creating an `.env` file and what variables to put in it. Give an example of how this might be done.

REMEMBER: DON'T PUT YOUR OWN USERNAMES/PASSWORDS/AUTH KEYS IN THE README OR ON GITHUB, just placeholders as indicated below:

______________________
NODEENV=development
PORT=8080
HOST=
mongoDB=YourMongoURL
seedDb=true
secret=YourJWTSecret
______________________

## API Design
Give an overview of your web API design, perhaps similar to the following: 

- /api/movies | GET | Gets a list of movies 
- /api/movies/{movieid} | GET | Gets a single movie 
- /api/movies/{movieid}/reviews | GET | Get all reviews for movie 
- /api/movies/{movieid}/reviews | POST | Create a new review for Movie
- /api/users?action=register | POST | Registers a new user to the app.
- /api/users | POST | Logs in a new user if authentication is successful.


## Security and Authentication

Protected routes are Favourites, Upcoming and Popular.

## Integrating with React App

Describe how you integrated your React app with the API. List the views that use your Web API instead of the TMDB API. Describe any other updates to the React app from Assignment One.
Views that use Web API are login/signup 

