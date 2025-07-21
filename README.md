# SMART Goal Planner
A beautiful financial goal tracking application that helps you visualize and achieve your savings targets with ease.

# Features
Create & manage multiple savings goals

 Track deposits and progress visually

 Deadline awareness with smart notifications

 Dashboard overview of all your goals

 Color-coded status (On track, Approaching, Overdue)

 Fully responsive design

# Quick Start
Prerequisites
Node.js (v16+)
npm or yarn

# Installation
# Clone the repository
git clone https://github.com/Donaldson17/smart-goal-planner.git
cd smart-goal-planner

# Install dependencies
npm install

# Start the application
npm run dev

Running the App
Start the mock API server (in one terminal):
npm run server
Start the React app (in another terminal):
npm start
The app will open at http://localhost:3000 with the API running at http://localhost:3001/goals

# Tech Stack
Frontend: React.js, CSS3

Backend: JSON Server (mock API)

Build Tool: Create React App

UI: Custom responsive design

# Project Structure
smart-goal-planner/
├── public/               # Static files
├── src/
│   ├── components/       # Reusable components
│   ├── App.js            # Main component
│   ├── index.js          # Entry point
│   └── styles.css        # Global styles
├── db.json               # Mock database
└── package.json

# Key Components
Goal Dashboard: Visual overview of all goals

Progress Tracker: Interactive progress bars

Goal Editor: Create/edit goals with ease

Deposit System: Track contributions

Smart Alerts: Deadline notifications

# API Endpoints
All endpoints available at http://localhost:3001/goals:
Method	Endpoint	 Description
GET	    /goals	     Get all goals
POST    /goals       Create new goal
PUT     /goals/:id   Update existing goal
PATCH   /goals/:id   Make  deposit
DELETE  /goals/:id   Delete

# Customization
Easily customize by modifying:

Colors in styles.css

Goal categories in GoalForm.js

Default values in db.json

# Contributing
Contributions are welcome! Please follow these steps:

Fork the repository

Create your feature branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add some amazing feature')

Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request
#  License
Distributed under the MIT License. See LICENSE for more information.
