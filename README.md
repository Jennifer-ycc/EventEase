# Getting Started with Create React App

This project was bootstrapped with [Create React App]

## Available Scripts

In the project directory, you can run:

### `npm start`

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
The backend will be running on http://localhost:5000.

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
Contributing

We welcome contributions to make EventEase even better! Here’s how you can contribute:

Fork the repository.
Create a new branch (git checkout -b feature-branch).
Make your changes.
Commit your changes (git commit -am 'Add new feature').
Push to the branch (git push origin feature-branch).
Create a new Pull Request.




