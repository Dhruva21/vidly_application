# vidly_application

- Backend application created using Express framework and integration testing is done using supertest.
- DataBase used for this project is MongoDB.
- Asynchronus java-script code is written.
- Necessary middleware functionality is used in the application. For example: for authorization, we need to have valid jwt token and also for error.
- Used REST API for all the endpoints. Used GET, POST, UPDATE, DELETE.
- Error handling is taken care by winston(dependency in javascript).
- All the user input through api is validated using JOI (dependency in javascript).

# API endpoints in this application:

- For genres
  - get all genres
  - post genre (authorization is required)
  - put genre(update)
  - delete genre (authorization is required)
  - get genre by id

- For movies
  - get all movies
  - post movie
  - put movie(update)
  - delete movie
  - get movie by id

- For rentals
  - get rentals
  - post
  - get rental by id

- For customers
  - get all customers
  - post customer
  - put customer by id(update by id)
  - delete customer
  - get customer by id

- For users
  - get all users(authorization is required)
  - post user

