# backend

## Heroku Deployment Link
- https://airbnb-bw.herokuapp.com/
- GET 200 Message: Server is up and running!!

## Routes

### Register 
- https://airbnb-bw.herokuapp.com/api/auth/register
- Required: username, password
- POST 201: user created and returns id
- POST 500 Message: Error adding a new user to the database

## Login
- https://airbnb-bw.herokuapp.com/api/auth/login
- Required: username, password
- POST 201: Welcome message and token
- POST 401: Invalid Credentials 
- POST 500 Message: Error logging in

user: id, username, password 
