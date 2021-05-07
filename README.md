# Contact API - Back End
API for manage users contact information.

## Table of contents

- [Project description](#project-description)
- [Instructions](#instructions)
- [Project structure](#project-structure)
- [API routes](#api-routes)
- [Future updates](#future-updates)

## Project description
The purpose of this API is to store, consult, update and delete the user's contact information.
The information that this API stores is:
- User first name
- User last name
- User's company
- User's phone number
- User email

## Instructions
Download the project and run the command "npm install" to install all the dependencies used in this project, to run the api use the command "npm start".
The api is configured to run on port 3700.
This project requires you to connect to a SQL database, you can find it in the root of this repository as "contact.sql" and inside the configuration folder, there is a file to enter the data for the database.

## Project structure
The structure of this project consist in four folders:
- Config: Here is the database configuration data.
- Models: This folder has two files, the first one is db.js where the API makes the connection to the database. The second is user.mode.js, this file is responsible for making the queries to the database and returning the result.
- Controllers: In this folder is the controller, this file is in charge of returning the json responses and the status, it gets the parameters and/or request body and performs the queries. Also, here are the validations and error handling.
- Routes: In this file are the POST, GET, PUT and DELETE paths of the project.

Additionally, there is a server.js file in the root of the project, this file loads all the routes of the project, implements the middleware so that the API can receive json files, has the CORS settings and it sets the project port.

## API routes

### POST ```/user```

#### Description
Add a user's contact information, create a record of the name, last name, company, phone number and email.

#### Details
- Name, last name and email are required values.
- Company and phone number are optional values.
- Name and last name only accept text characters, not numbers.
- Company only accept alphanumeric characters.
- Phone number only accept numbers characters and is unique.
- Email only accept valid emails and is unique.

#### Request body
    {
        "name": string,
        "lastName": string,
        "company": string,
        "phoneNumber": string,
        "email": string
    }

#### Example response
    {
        "id": 1,
        "name": "Jonathan",
        "lastName": "Johnson",
        "company": "Google",
        "phoneNumber": "9991111877",
        "email": "jojo@gmail.com"
    }
    
### GET ```/user/:userId```

#### Description
Get the specific contact data of a user.

#### Details
Nothing.

#### Request body
Nothing.

#### Example response
    {
        "id": 1,
        "name": "Jonathan",
        "lastName": "Johnson",
        "company": "Google",
        "phoneNumber": "9991111877",
        "email": "jojo@gmail.com"
    }

### GET ```/user```

#### Description
Get the contact data of all registered users.

#### Details
Nothing.

#### Request body
Nothing.

#### Example response

    [
        {
            "id": 1,
            "name": "Jonathan",
            "lastName": "Johnson",
            "company": "Google",
            "phoneNumber": "9991111877",
            "email": "jojo@gmail.com"
        },
        {
            "id": 2,
            "name": "Omar",
            "lastName": "Romero",
            "company": "MM",
            "phoneNumber": "334234",
            "email": "omar@gmail.com"
        }
    ]

### GET ```/user/pagination/:page```

#### Description
Get the contact data of maximun ten registered users according to the page provided as a parameter.

#### Details
Nothing.

#### Request body
Nothing.

#### Example response

    {
        "products_page_count": 10,
        "page_number": "1",
        "users": [
            {
                "id": 1,
                "name": "Jonathan",
                "lastName": "Johnson",
                "company": "Google",
                "phoneNumber": "9991111877",
                "email": "jojo@gmail.com"
            },
            {
                "id": 2,
                "name": "Omar",
                "lastName": "Romero",
                "company": "MM",
                "phoneNumber": "334234",
                "email": "omar@gmail.com"
            },
            ...
        ]
    } 
    
### PUT ```/user/:userId```

#### Description
Update the contact data of a user.

#### Details
- Name, last name and email are required values.
- Company and phone number are optional values.
- Name and last name only accept text characters, not numbers.
- Company only accept alphanumeric characters.
- Phone number only accept numbers characters and is unique.
- Email only accept valid emails and is unique.

#### Request body
    {
        "name": string,
        "lastName": string,
        "company": string,
        "phoneNumber": string,
        "email": string
    }

#### Example response
    {
        "name": "Jonathan",
        "lastName": "Johnson",
        "company": "Google",
        "phoneNumber": "9991111877",
        "email": "jojo@gmail.com"
    }

### DELETE ```/user/:userId```

#### Description
Deletes a record of a user's contact information from the database.

#### Details
Nothing.

#### Request body
Nothing.

#### Example response
    {
        message: "User with id 1 was deleted successfully"
    }

## Future updates
I considered some future implementations in case to continue with this project. The idea was to implement them this week, but due to lack of time that could not be possible:
- Create a DAO, the current code has the queries to the database in the model and it would be better to separate it.
- Implement singleton pattern in the DAO.
- Configuration file to run the project in local and for the deployment, the configuration file in this repository is local only.
- Make the API documentation with swagger.
- More validations.
- Filer by name and last name.
- Protection to SQL injection.
