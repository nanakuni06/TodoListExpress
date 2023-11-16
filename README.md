# TodoListExpress

- `POST /auth/register	`

  REST API to register user

  > Register User

  _Request Body_

  ```json
  {
    "name": "Your Name",
    "username": "yourusername",
    "email": "youremail@mail.com",
    "password": "yourpassword"
  }
  ```

  _Path Example_

  ```
  POST https://drab-hippo.cyclic.app/auth/register
  ```

  _Response (201)_

  ```json
  {
    "status": true,
    "code": 201,
    "message": "Register succesfull"
  }
  ```

  _Response (400 - Bad Request)_

  ```json
  {
    "status": false,
    "code": 400,
    "message": "Invalid request"
  }
  ```

---

- `POST /auth/login	`

  REST API to login user

  > Login User

  _Request Body_

  ```json
  {
    "username": "yourusername",
    "password": "yourpassword"
  }
  ```

  _Path Example_

  ```
  POST https://drab-hippo.cyclic.app/auth/login
  ```

  _Response (200)_

  ```json
  {
    "status": true,
    "code": 200,
    "message": "Login succesfull",
    "userID": 1,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJuYW5ha3VuaUBnbWFpbC5jb20iLCJpYXQiOjE3MDAxNTA2Mjd9.Xqs8K9nk1zdQWW9q52yPAFvP_cGixX7BygkK01dtCyk"
  }
  ```

  _Response (400 - Bad Request)_

  ```json
  {
    "status": false,
    "code": 400,
    "message": "Username or password incorrect"
  }
  ```

---

- `POST /todos	`

  REST API to create todo

  > Create Todo List

  _Request Header_

  | Key           |        Value        |       Location |
  | :------------ | :-----------------: | -------------: |
  | Authorization | Bearer <your_token> | Request header |

  _Request Body_

  ```json
  {
    "value": "Menulis",
    "userID": "1"
  }
  ```

  _Path Example_

  ```
  POST https://drab-hippo.cyclic.app/todos
  ```

  _Response (201)_

  ```json
  {
    "status": true,
    "code": 201,
    "message": "Success create todo"
  }
  ```

  _Response (400 - Bad Request)_

  ```json
  {
    "status": false,
    "code": 400,
    "message": "Invalid request"
  }
  ```

---

- `GET /todos	`

  REST API to show list of todo

  > Get All Todo

  _Request Header_

  | Key           |        Value        |       Location |
  | :------------ | :-----------------: | -------------: |
  | Authorization | Bearer <your_token> | Request header |

  _Path Example_

  ```
  GET https://drab-hippo.cyclic.app/todos
  ```

  _Response (200)_

  ```json
    {
      "id": 15,
      "value": "Belajar coding",
      "status": false,
      "userID": 1,
      "createdAt": "2023-11-13T14:48:06.000Z",
      "updatedAt": "2023-11-13T14:48:06.000Z"
    },
    {
      "id": 16,
      "value": "Belajar Node JS",
      "status": false,
      "userID": 1,
      "createdAt": "2023-11-13T14:48:36.000Z",
      "updatedAt": "2023-11-13T14:48:36.000Z"
    },
    {
      "id": 17,
      "value": "Belajar Express JS",
      "status": false,
      "userID": 1,
      "createdAt": "2023-11-13T14:48:36.000Z",
      "updatedAt": "2023-11-13T14:48:36.000Z"
    },
    {
      "id": 18,
      "value": "Belajar Sequelize",
      "status": false,
      "userID": 1,
      "createdAt": "2023-11-13T14:48:36.000Z",
      "updatedAt": "2023-11-13T14:48:36.000Z"
    }
  ```

  _Response (500 - Internal Server Error)_

  ```json
  {
    "status": false,
    "code": 500,
    "message": "Internal server error"
  }
  ```

---

- `GET /todos/:id`

  REST API to show detail todo

  > Get Todo By Id

  _Request Header_

  | Key           |        Value        |       Location |
  | :------------ | :-----------------: | -------------: |
  | Authorization | Bearer <your_token> | Request header |

  _Path Example_

  ```
  GET https://drab-hippo.cyclic.app/todos/15
  ```

  _Response (200)_

  ```json
  {
    "status": true,
    "code": 200,
    "message": "Success Get Todo ID 15",
    "data": {
        "id": 15,
        "value": "Belajar coding",
        "status": false,
        "userID": 1,
        "createdAt": "2023-11-13T14:48:06.000Z",
        "updatedAt": "2023-11-13T14:48:06.000Z"
    }
  }
  ```

  _Response (404 - Data not found)_

  ```json
  {
    "status": false,
    "code": 400,
    "message": "Data not found"
  }
  ```

  ***

- `UPDATE /todos/:id`

  REST API to update todo

  > Update Todo

  _Request Header_

  | Key           |        Value        |       Location |
  | :------------ | :-----------------: | -------------: |
  | Authorization | Bearer <your_token> | Request header |

  _Request Body_

  ```json
  {
    "value": "Belajar Algoritma"
  }
  ```

  _Path Example_

  ```
  PUT https://drab-hippo.cyclic.app/todos/15
  ```

  _Response (200)_

  ```json
  {
    "status": true,
    "code": 200,
    "message": "Success update todo id: 15"
  }
  ```

  _Response (400 - Bad Request)_

  ```json
  {
    "status": false,
    "code": 400,
    "message": "Invalid request"
  }
  ```

  ***

- `DELETE /todos/:id`

  REST API to delete todo by id

  > Delete Todo by id

  _Request Header_

  | Key           |        Value        |       Location |
  | :------------ | :-----------------: | -------------: |
  | Authorization | Bearer <your_token> | Request header |

  _Path Example_

  ```
  DELETE https://drab-hippo.cyclic.app/todos/15
  ```

  _Response (200)_

  ```json
  {
    "status": true,
    "code": 200,
    "message": "Success delete todo id: 15"
  }
  ```

  _Response (404 - Data not found)_

  ```json
  {
    "status": false,
    "code": 404,
    "message": "Data not found"
  }
  ```

  ***

- `DELETE /todos`

  REST API to delete all todo

  > Delete all Todo

  _Request Header_

  | Key           |        Value        |       Location |
  | :------------ | :-----------------: | -------------: |
  | Authorization | Bearer <your_token> | Request header |

  _Path Example_

  ```
  DELETE https://drab-hippo.cyclic.app/todos
  ```

  _Response (200)_

  ```json
  {
    "status": true,
    "code": 200,
    "message": "Success delete all todo"
  }
  ```

  _Response (500 - Internal Server Error)_

  ```json
  {
    "status": false,
    "code": 500,
    "message": "Internal server error"
  }
  ```

  ***