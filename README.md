# CS 465 Full Stack Development Reflection

# Architecture

Throughout this project, I worked with multiple frontend development approaches. The customer-facing portion of the application initially used Express-generated HTML pages that were rendered on the server. These pages provided content directly from the backend to the browser. As the project evolved, I also worked with JavaScript to add functionality and interactivity to the user experience.

The most significant frontend approach was the Single-Page Application (SPA) built with Angular. Unlike traditional server-rendered pages, the SPA loads a single HTML page and dynamically updates content without requiring full page refreshes. This creates a faster and more responsive user experience. The SPA communicates with backend API endpoints to retrieve and update data while maintaining a seamless interface for users and administrators.

The backend used a NoSQL MongoDB database because it stores data as flexible JSON-like documents rather than requiring a rigid relational schema. MongoDB worked well for the Travlr Getaways application because trip information, user data, and application content could be stored and retrieved efficiently. Its flexibility also made development easier as application requirements changed throughout the project.

# Functionality

JSON and JavaScript are closely related but serve different purposes. JavaScript is a programming language used to create application functionality, while JSON (JavaScript Object Notation) is a lightweight data format used to store and transfer information. JSON acts as the bridge between the frontend and backend because data can be sent from the MongoDB database through the API and delivered to the Angular frontend in a format that is easy to process and display.

Throughout development, code was refactored to improve organization, functionality, and efficiency. Rather than duplicating similar code across multiple pages, reusable components were created within the Angular application. Reusable UI components provide several benefits, including reducing duplicate code, simplifying maintenance, improving consistency across the application, and making future updates easier to implement. Refactoring also improved readability and allowed the application to scale more effectively.

# Testing

Testing a full stack application requires validating API methods, endpoints, and security features. API methods such as GET, POST, PUT, and DELETE perform different actions when interacting with application data. Endpoints define the specific URLs where these requests are sent and processed by the backend.

Testing ensures that each endpoint returns the correct data and handles requests properly. As security was added to the application, testing became more complex because authentication and authorization had to be verified in addition to basic functionality. Secure endpoints must prevent unauthorized access while allowing authenticated users to perform approved actions. This requires testing both successful and unsuccessful login attempts, protected routes, and token-based authentication to ensure the application remains secure.

# Reflection

This course has helped me move closer to my professional goal of advancing my software development skills and becoming a stronger candidate for software engineering opportunities. Prior to this course, my experience with full stack development was limited. Through this project, I gained practical experience working with the MEAN stack, including MongoDB, Express, Angular, and Node.js.

I developed skills in frontend development, backend API creation, database integration, authentication, application architecture, and version control using Git and GitHub. I also learned how the different layers of a full stack application interact with one another and how data flows from the database to the user interface.

The most valuable outcome of this course was gaining hands-on experience building a complete web application from beginning to end. Understanding how to design, develop, test, secure, and deploy a full stack application has increased my confidence and expanded my technical skill set. These experiences have made me a more marketable candidate by providing practical knowledge that can be applied directly in professional software development environments.
