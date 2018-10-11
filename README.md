
# Project Name
Street-Art-Hunter
## Description

App for find, visit and share street art in Barcelona

## User Stories

-  **404:** As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault
-  **HomePage:** As a user I want to see the title of the app and what is about it 
-  **Signup:** As an anon I can sign up in the platform so that I can start using the platform
-  **Login:** As a user I can login to the platform so that I can start using the platform
-  **Profile:** As a user I can see my profile so that I cant see my information
-  **Logout:** As a user I can logout from the platform so no one else can use it
-  **Create StreetArt:** As a user I can add a street art piece so that I can share it with the community
-  **Detail StreetArt:** As a user I can see a specific street art so that a can see the details
-  **List StreetArt:** As a user I want to see all the street art pieces so that a can discover new pieces
   
## Backlog

-  **Picture upload:** As a user I want to upload a picture to my profile
-  **Geolocation:** As a user I want to pick the location of the piece of street art on a map
-  **Query by distance:** As a user I want to see the closest pieces to my current position
-  **Add to favorites:** As a user I want to add other pictures to my list of favorites

# Client

## Routes
- 404 - Not found
- / - Homepage
- /signup - Signup form
- /login - Login form
- /streetart - StreetArt list
- /streetart/create - Create a new street art piece
- /streetart/:id - Street art piece details
- /profile/me - Profile page

## Pages

- Homepage (public)
- Sign in (anon only)
- Log in (anon only)
- Street Art List (public only)
- Street Art Create (user only)
- Street Art Detail (user only)
- Profile (user only)
- 404 (public)

## Components

- Street Art card component
  - Input: streetart
  - Output: none

## Services

- Auth
  - auth.login(user)
  - auth.signup(user)
  - auth.logout()
  - auth.me()
  - auth.getUser() // synchronous
- Streetart
  - StreetArt.list()
  - StreetArt.create(data)
  - StreetArt.getOne(id)

# Server

## Models

User model

```
username - String // required
password - String // required
favorites - [ObjectID<StreetArt>] // Backlog
```

StreetArt model

```
name - String 
author - String
picture - String  // Backlog
latitude -  String  // Backlog
longitde - String  // Backlog
```

## API Endpoints/Backend Routes

### Auth
- GET /auth/me
- POST /auth/signup
  - body:
    - username
    - password
- POST /auth/login
  - body:
    - username
    - password
- POST /auth/logout
  - body: (empty)

### Streetart
- GET /streetArt
  - Validation: any 
  - Authorization: any
  - Data:
    -name
    -latitude
    -longitude
    -picture
    
  - returns an array of streetart
  
- POST /streetArt
  - Validation: CurrentUser
  - Authorization: CurrentUser
  - Data:
    -new.name
    -new.latitude
    -new.longitude
    -new.picture
  - returns an object
  
  
  - body:
    - name
    - author
    - picture // Backlog
    - latitude // Backlog
    - longitude // Backlog
- GET /streetArt/:id

    - Validation: CurrentUser
  - Authorization: CurrentUser
  - Data:
    -this.name
    -this.latitude
    -this.longitude
    -this.picture
  - returns an object

## Links

### Trello/Kanban

[Link to your trello board](https://trello.com) or picture of your physical board

### Git

The url to your repository and to your deployed project

[Client repository Link](http://github.com)
[Server repository Link](http://github.com)

[Deploy Link](http://heroku.com)

### Slides

The url to your presentation slides

[Slides Link](http://slides.com)
