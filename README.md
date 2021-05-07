# Contact API - Back End
API for manage users contact information.

## Table of contents

- [Project description](#project-description)
- [Instructions](#instructions)
- [Project structure](#project-structure)
- [API routes](#api-routes)
- [Future updates](#future-updates)

## Project description

## Instructions

## Project structure

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
