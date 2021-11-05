# Json-Web-Token authorization
## Overview
JWT is one of the most popular authorization procedure to confirm a user identity. In this project, the main focusing part is to verify a user by using JWT and allows the user to access database. User can post / get a movie description. I am assuming all the fields value in this project will be a proper valid data. Validation is not a concern for this project.

## Prerequisites
You should have NodeJs, ExpressJs and MongoDB installed in your local machine.

## Database Schema
We have user & movie schema. There is one to one way communication in movie to user schema. movie schema stores a reference user for a new records.

## How to run the project
1. Open the terminal

2. Clone the repository
```
git clone https://github.com/SakibAlEmran/JWT-Authorization.git
```
3. Go to working directory
```
cd JWT-Authorization/
```
4. Install Dependencies: we need to install npm bcrypt, dotenv, jsonwebtoken, mongoose packages.
```
npm install bcrypt dotenv jsonwebtoken mongoose
```
