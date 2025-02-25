# Job Portal API

This is a Job Portal API built with Node.js, Express, and MongoDB. The API allows users to perform CRUD operations on job postings.

## Features

- Create a new job posting
- Retrieve all job postings
- Retrieve a specific job posting by ID
- Update a job posting by ID
- Delete a job posting by ID

## Prerequisites

- Node.js
- MongoDB
- Postman (for testing the API)

## Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/your-username/job-portal-api.git
    ```

2. Navigate to the project directory:

    ```sh
    cd job-portal-api
    ```

3. Install the dependencies:

    ```sh
    npm install
    ```

4. Create a [.env](http://_vscodecontentref_/0) file in the root directory and add your MongoDB connection string and port:

    ```env
    PORT=3000
    MONGODB_URI=your-mongodb-connection-string
    ```

## Usage

1. Start the server:

    ```sh
    npm start
    ```

2. The server will be running on `http://localhost:3000`.

3. Use Postman to test the API endpoints.

## API Endpoints

### Create a new job posting

- **URL:** `/jobs/add`
- **Method:** `POST`
- **Body:**

    ```json
    {
        "Role": "Software Engineer",
        "Type": "FullTime",
        "Experience": 3,
        "Level": "Mid-senior"
    }
    ```

### Retrieve all job postings

- **URL:** `/jobs/get`
- **Method:** `GET`

### Retrieve a specific job posting by ID

- **URL:** `/jobs/get/:id`
- **Method:** `GET`

### Update a job posting by ID

- **URL:** `/jobs/update/:id`
- **Method:** `PUT`
- **Body:** (fields to update)

    ```json
    {
        "Role": "Senior Software Engineer"
    }
    ```

### Delete a job posting by ID

- **URL:** `/jobs/delete/:id`
- **Method:** `DELETE`

## Project Structure
