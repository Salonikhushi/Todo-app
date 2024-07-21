# Todo-app
todo-app backend

This is the backend for the Todo App, providing API endpoints for managing todos.

**Table of Contents**

-Getting Started

-Prerequisites

-Installation
-Running the Server
-API Endpoints
-Running Tests
-Project Structure
-Contributing
-License

**Getting Started**
These instructions will get you a copy of the backend project up and running on your local machine for development and testing purposes.

**Prerequisites**
-Node.js
-npm (Node package manager)
-MongoDB (for the database)
-Express

**Installation**
1.Clone the repository:git clone https://github.com/Salonikhushi/Todo-app.git
2.Move to the todo-app directory: cd todo-app
4.Install the dependencies:
npm install
npm install express mongoose dotenv cors nodemon
npm install swagger-jsdoc swagger-ui-express
5.Create a .env file in the root of the project and add your MongoDB URI:
PORT=5000
MONGO_URI=<your-mongodb-connection-string>

**Running the Server**
1.Move to backend folder: cd backend
2.Start the backend server with the following command: npm start dev
3.The server will start on http://localhost:5000.

**API Endpoints**
`GET /api/todos: Fetch all todos.
`POST /api/todos: Add a new todo.
`PATCH /api/todos/:id: Update an existing todo.
`DELETE /api/todos/:id: Delete a todo.

**Running Tests**
To run the tests using Mocha or Chai, follow these steps:
1.Install Mocha/Chai: npm install --save-dev mocha chai supertest
2.Write your tests in the test directory. Ensure your test files have the .test.js extension.
3.Run the tests: 
cd backend
npx mocha tests/todo.test.js
The test command should be specified in the package.json file as follows:
"scripts": {
  "test": "mocha"
}

**Project Structure**
todo-app/
│
├── backend/
│   ├── controllers/
│   │   └── todoController.js
│   ├── models/
│   │   └── Todo.js
│   ├── routes/
│   │   └── todoRoutes.js
│   ├── tests/
│   │   └── todo.test.js
│   ├── .env
│   ├── app.js
│   ├── package.json
│   ├── package-lock.json
├── .gitignore
└── README.md

controllers/todoControllers.js: Defines the logic for handling CRUD operations for todos, including fetching all todos, creating a new todo, updating an existing todo, and deleting a todo.
models/Todo.js: Mongoose schema and model for todos.
routes/todos.js: Express routes for the todo API.
test/todo.test.js: Mocha tests for the todo API.
.env: Environment variables.
app.js: Entry point for the backend server.
package.json: Contains the project dependencies and scripts.

**Contributing**
1.Fork the repository
2.Create your feature branch (git checkout -b feature/new-feature)
3.Commit your changes (git commit -m 'Add some new feature')
4.Push to the branch (git push origin feature/new-feature)
5.Open a pull request

**License**
This project is licensed under the MIT License - see the LICENSE file for details.









