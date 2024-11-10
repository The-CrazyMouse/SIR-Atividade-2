# Practical Activity #2 (RESTful API)
Esta informação em português [README.md](README.md)

## **Objective:**
In this practical ac tivity, the goal is to develop a RESTful API to manage information for a fictional application.

The API should support CRUD operations (Create, Read, Update, Delete) and can be implemented using the lowDB library, a document-based database managed directly in JavaScript.

This activity aims to reinforce the mastery of concepts such as route handling and RESTful API development.

## **Project Requirements**

**Project Setup**
- Set up a Node.js project with Express
- Install the lowDB library [lowDB GitHub](https://github.com/typicode/lowdb)
- Structure the application modularly, organizing routes
  - Consider using Express routers

**Data Model**
The API should simulate managing a resource, such as "Students," "Books," or "Courses." Define a basic data model, including:
- **ID**: A unique identifier (string or number).
- **Name**: A field representing the name of the resource.
- **Additional Attributes**: Add at least two more relevant attributes based on the chosen resource type (e.g., for Students, add "Course" and "Year").

**CRUD Route Implementation**
Implement the following routes in the API (assuming **students**):
- **GET /students** - Returns all items.
- **GET /students/{id}** - Returns a specific item by id.
- **POST /students** - Creates a new item.
- **PUT /students/{id}** - Updates the data of an existing item by id.
- **DELETE /students/{id}** - Removes a specific item by id.

The application should also have routes for other static HTML pages:
- **GET /** - Returns an API demo page (index.html)
- **GET /about** - Returns a page with author information
- **GET /doc** - Returns a page with brief documentation

**Validation and Error Handling**
- Implement data validations to ensure all required fields are provided.
- Return appropriate HTTP status codes [HTTP Status Codes Tutorial](https://www.restapitutorial.com/introduction/httpmethods).

**Data Persistence with lowDB**
- Use a JSON file for the data structure.
- Initialize the database with some sample data.
- Use lowDB to store data, configuring it to save data in a local JSON file.
- Read and write operations should handle the JSON file to ensure data persistence.

**Testing**
- Test the API using tools like cURL or Postman
- Test locally

**Demo**
- Implement a page that consumes the API and demonstrates all routes
- **Check the sampledemo folder** for possible starter code to the demo page

**Deployment**
- Deploy the work on [render.com](https://render.com)
  - Note: On render.com, file system changes (e.g., the JSON file used by lowdb) are lost with each redeploy/restart.

**Submission**
- Submit the code on a GitHub repository (classroom).
- Update the **README.md** file to include minimal project documentation:
  - Authorship, deployment link, data usage, implemented routes, other information
- On Moodle, provide the deployment URL and repository name.
- **Deadline**: November 10, 2024

**Checklist**
- **API Functionality**: The API should be fully functional, supporting all CRUD operations and ensuring data persistence.
- **Code Structure and Organization**: Code should be modular, easy to read, and follow development best practices.
- **Error Handling and Data Validation**: The API should handle errors and input validation properly, returning appropriate messages to the client.
- **Documentation and Testing**: Documentation should be clear, detailing the use of each route. Tests should ensure correct API functionality in common and edge-case scenarios.
- **Use of lowdb**: Effective use of lowdb to ensure data persistence.
