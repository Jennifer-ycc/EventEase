
Runs the app in the development mode.\
to view it in your browser.

EventEase – A Collaborative Event Planning and Tracking Web App

EventEase is a user-friendly web application designed to help individuals and small businesses plan and manage events seamlessly. The platform offers features like task assignment, budget tracking, RSVP management, and customizable event templates to ensure successful event execution.

Features

Task Management: Assign tasks and track their progress to ensure nothing is overlooked.
Budget Tracker: Set and manage budgets for different event categories.
RSVP Tracking: Easily manage attendees and track responses.
Customizable Templates: Use customizable templates to create events quickly.
Push Notifications: Stay updated with reminders for upcoming deadlines, tasks, and more.
User Authentication: Secure login system to protect user data.
Dark and Light Mode: Choose between dark and light themes for a personalized experience.
Tech Stack

Frontend: React, React Router, React Icons
Backend: Node.js, Express.js
Database: MongoDB
Authentication: JWT (JSON Web Token)
Styling: CSS, TailwindCSS (or your preferred styling method)
Deployment: Netlify (frontend), Heroku (backend)
Installation

Clone the Repository
git clone https://github.com/Jennifer-ycc/EventEase.git
cd eventease
Set Up the Backend
Navigate to the backend folder.
Install dependencies:
npm install
Set up environment variables:
Create a .env file in the backend folder and add the necessary environment variables like MongoDB URI, JWT secret, etc.
Start the server:
npm start
The backend will be running on http://localhost:5002.

Set Up the Frontend
Navigate to the frontend folder.
Install dependencies:
npm install
Start the development server:
npm start
The frontend will be running on http://localhost:3000.

Usage

Sign up or Log in to your account to start creating and managing events.
Customize your event by assigning tasks, setting up a budget, and adding attendees.
Use the RSVP tracker to keep track of guests and their responses.
Set up notifications to stay on top of deadlines and tasks.
Folder Structure

EventEase/
│
├── frontend/
│   ├── src/
│   │   ├── components/         # Reusable UI components
│   │   ├── pages/              # App pages (Ecommerce, Calendar, Customers, etc.)
│   │   ├── contexts/           # Context providers for state management
│   │   ├── App.js              # Main application file
│   │   └── index.js            # React entry point
│   ├── public/
│   └── package.json            # Frontend dependencies
│
├── backend/
│   ├── models/                 # Mongoose models
│   ├── routes/                 # API routes
│   ├── controllers/            # Route handlers
│   ├── .env                   # Environment variables
│   ├── server.js              # Main server file
│   └── package.json           # Backend dependencies
└── README.md                   # Project documentation


#Dec 10, 2024
Objective: Set up the project environment for EventEase (Frontend).

*Changes Made:
Installed necessary dependencies.
Set up basic folder structure and file organization.

--> Next Steps:
Start working on the Event model 
Implement the basic functionality to add and display events in the app.


Dec 18, 2025
Objective: Build the components for EventEase.
Started working on API routes to handle task creation and retrieval.

*Changes Made:
Developed a Task component that includes form, such as pages, apps and charts.

Started working on the API routes to handle task creation and retrieval.

**Challenges:
Encountered form validation issues when adding tasks. The form was not handling empty fields properly.

---> Next Steps:
Implement functionality to display tasks from the database on the frontend.
Work on task editing and deletion features.


Dec 22, 2024
Objective: Develop and integrate the RSVP Tracker for EventEase.

*Changes Made:
Created the RSVP Tracker component, allowing users to RSVP for events.
Updated the database schema to include RSVP status for each event.
Built API routes to handle RSVPs (GET, POST).

**Challenges:
Had trouble managing the RSVP state for multiple events. The UI wasn’t updating correctly when the user clicked RSVP.
Solution: Used React’s state management (using useState and useEffect) to track the RSVP status in real time and update the UI accordingly.

---> Next Steps:
Implement user authentication to manage individual user accounts and RSVPs.
Style the RSVP Tracker for a more user-friendly interface.

Dec 25, 2024
Objective: Improve UI/UX for EventEase, particularly the Event Dashboard.

*Changes Made:
Reworked the Event Dashboard layout to make it more visually appealing.
Added icons for different event statuses (e.g., "Upcoming", "In Progress", "Completed").
Applied CSS Flexbox to ensure responsive design for mobile devices.

**Challenges:
The responsive design was not working well on mobile screens, and some components were overflowing.
Solution: Tweaked the Flexbox layout and added media queries to handle different screen sizes properly.

--> Next Steps:
Refactor the Event Dashboard to fetch data dynamically from the backend.
Work on push notifications for event reminders and RSVP updates.

Dec 27, 2024
Objective: Add Notifications for events and tasks.

*Changes Made:
Integrated Push Notifications into the app, allowing users to receive notifications for upcoming events, task deadlines, and RSVPs.
Used Web Push API to send notifications from the backend to the frontend.
Created a Notification component to display notifications to the user.

**Challenges:
Push Notifications weren’t showing correctly on all browsers (e.g., some users didn’t receive notifications on Safari).
Solution: Checked service worker configuration and ensured the app registered the service worker properly on all browsers. Used browser compatibility checks.

--> Next Steps:

Work on adding authentication to personalize notifications (e.g., different notifications for each user).
Refine the notification UI and allow users to opt-in or opt-out.


Dec 28, 2024
Objective: Finalize and Optimize EventEase app performance.

*Changes Made:
Refactored backend routes for better performance (optimized database queries).
Reduced the size of frontend assets (images, icons) for faster loading.
Code splitting and lazy loading for React components to reduce initial load time.

**Challenges:
The large image files were causing slow loading times, especially on mobile devices.
Solution: Compressed images using tools like ImageOptim and implemented responsive images using the srcset attribute.

--> Next Steps:
Test performance improvements under real-world conditions (e.g., slower network, various device types).
Complete the user authentication feature and deploy the app to production.

Jan 20, 2025 
Objective: Set up the backend environment for EventEase.

*Changes Made:
Initialized the Node.js/Express backend.
Installed necessary dependencies like express, mongoose, and cors for backend setup.

**Challenges:
Encountered an issue with CORS when trying to connect the React frontend to the Express backend.
    Solution: Resolved by installing the cors middleware and configuring it in the backend server.

---> next steps:
Begin working on MongoDB database integration.
Created a MongoDB schema to store task data.

Jan 21, 2025
Progress:

Successfully connected to MongoDB after troubleshooting authentication issues.
Began working on deployment using Render.

**Challenges:
Encountered a build failure during the deployment process.

--> Next Steps:
Investigate and resolve the build failure to proceed with deployment.

