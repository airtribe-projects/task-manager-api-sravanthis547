# Task Manager API

A simple and efficient Task Manager REST API built with Express.js. This API allows you to create, read, update, and manage tasks with ease.

## Description

This is **Assignment 1 for Backend Engineering Launchpad** - A Node.js application that provides REST API endpoints to manage tasks with features like creating tasks, retrieving tasks, updating task status, and more.

## Features

- Get all tasks
- Get a specific task by ID
- Create a new task
- Update task details (mark as completed)
- Delete a task
- Error handling and validation

## Requirements

- **Node.js**: >= 18.0.0
- **npm**: Latest version

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd task-manager-api-sravanthis547
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and configure the following:
   ```
   PORT=3000
   ```

## Usage

### Start the Server

```bash
npm start
```

The server will start on the port specified in your `.env` file (default: 3000).

### API Endpoints

#### 1. Get All Tasks

- **Endpoint**: `GET /tasks`
- **Description**: Retrieve all tasks
- **Response**: Array of task objects

**Example**:

```bash
curl http://localhost:3000/tasks
```

#### 2. Get Task by ID

- **Endpoint**: `GET /tasks/:id`
- **Description**: Retrieve a specific task by its ID
- **Parameters**:
  - `id` (number): Task ID
- **Response**: Task object
- **Error**: Returns 404 if task not found

**Example**:

```bash
curl http://localhost:3000/tasks/1
```

#### 3. Create a Task

- **Endpoint**: `POST /tasks`
- **Description**: Create a new task
- **Request Body**:
  ```json
  {
    "title": "Task Title",
    "description": "Task Description",
    "completed": false
  }
  ```
- **Required Fields**: `title`, `description`
- **Response**: Created task object with ID
- **Error**: Returns 400 if required fields are missing

**Example**:

```bash
curl -X POST http://localhost:3000/tasks \
  -H "Content-Type: application/json" \
  -d '{"title": "Buy groceries", "description": "Milk, eggs, bread"}'
```

#### 4. Update a Task

- **Endpoint**: `PATCH /tasks/:id`
- **Description**: Update a task (mark as completed)
- **Parameters**:
  - `id` (number): Task ID
- **Request Body**:
  ```json
  {
    "completed": true
  }
  ```
- **Response**: Updated task object
- **Error**: Returns 404 if task not found, 400 if `completed` is not boolean

**Example**:

```bash
curl -X PATCH http://localhost:3000/tasks/1 \
  -H "Content-Type: application/json" \
  -d '{"completed": true}'
```

#### 5. Delete a Task

- **Endpoint**: `DELETE /tasks/:id`
- **Description**: Delete a task by its ID
- **Parameters**:
  - `id` (number): Task ID
- **Response**: Success message or 404 if task not found

## Project Structure

```
task-manager-api-sravanthis547/
├── app.js                 # Main application file
├── package.json           # Project dependencies and scripts
├── readme.md              # Project documentation
├── task.json              # Sample task data
├── controllers/
│   └── taskcontroller.js  # Task business logic
├── middleware/
│   └── logger.js          # Logging middleware
├── routes/
│   └── taskrouter.js      # Task API routes
└── test/
    └── server.test.js     # Unit tests
```

## Dependencies

- **express**: ^4.18.2 - Fast, unopinionated web framework
- **body-parser**: Built-in with Express for parsing request bodies

### Dev Dependencies

- **supertest**: ^6.3.4 - HTTP assertion library
- **tap**: ^18.6.1 - Testing framework

## Testing

Run the test suite uisng postman

## Task Structure

Each task object has the following structure:

```json
{
  "id": 1,
  "title": "Task Title",
  "description": "Task Description",
  "completed": false
}
```

### Fields

- **id** (number): Unique identifier for the task
- **title** (string): Title of the task (required)
- **description** (string): Detailed description of the task (required)
- **completed** (boolean): Status of task completion (default: false)

## Middleware

### Logger Middleware

The application includes a custom logger middleware that logs incoming HTTP requests to help with debugging and monitoring.
