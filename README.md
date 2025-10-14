# ThinkBoard

ThinkBoard is a full-stack MERN (MongoDB, Express, React, Node.js) application for taking notes. It features a clean and modern user interface and a robust backend with rate limiting.

## Features

*   **CRUD Operations**: Create, Read, Update, and Delete notes.
*   **Responsive Design**: A mobile-first design that works on all screen sizes.
*   **Rate Limiting**: The backend API is protected against brute-force attacks with a rate limiter.
*   **User-Friendly Interface**: Built with Tailwind CSS and daisyUI for a great user experience.
*   **Real-time Feedback**: Uses `react-hot-toast` for instant user notifications.

## Tech Stack

### Frontend

*   **Framework**: [React](https://reactjs.org/)
*   **Build Tool**: [Vite](https://vitejs.dev/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/) & [daisyUI](https://daisyui.com/)
*   **Routing**: [React Router](https://reactrouter.com/)
*   **HTTP Client**: [Axios](https://axios-http.com/)

### Backend

*   **Runtime**: [Node.js](https://nodejs.org/)
*   **Framework**: [Express](https://expressjs.com/)
*   **Database**: [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/)
*   **Rate Limiting**: [Upstash Redis](https://upstash.com/)

## Getting Started

### Prerequisites

*   Node.js (v18 or later)
*   npm
*   MongoDB instance (local or cloud)

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/LaurensiusDani/Thinkboard-MERN-Stack-.git
    cd Thinkboard-MERN-Stack-
    ```

2.  **Setup Backend:**
    *   Navigate to the backend directory: `cd backend`
    *   Install dependencies: `npm install`
    *   Create a `.env` file in the `backend` directory and add the following variables:
        ```env
        MONGO_URI=<YOUR_MONGODB_CONNECTION_STRING>
        UPSTASH_REDIS_REST_URL=<YOUR_UPSTASH_REDIS_URL>
        UPSTASH_REDIS_REST_TOKEN=<YOUR_UPSTASH_REDIS_TOKEN>
        ```

3.  **Setup Frontend:**
    *   Navigate to the frontend directory: `cd ../frontend`
    *   Install dependencies: `npm install`

### Running the Application

1.  **Start the backend server:**
    *   In the `backend` directory, run:
        ```sh
        npm run dev
        ```
    *   The server will start on `http://localhost:5001`.

2.  **Start the frontend development server:**
    *   In the `frontend` directory, run:
        ```sh
        npm run dev
        ```
    *   The application will be available at `http://localhost:5173`.

## Available Scripts

### Root Directory

*   `npm start`: Starts the backend server for production.
*   `npm run build`: Installs dependencies for both frontend and backend, and builds the frontend for production.

### Frontend Directory

*   `npm run dev`: Starts the Vite development server.
*   `npm run build`: Builds the React app for production.
*   `npm run lint`: Lints the project files.

### Backend Directory

*   `npm run dev`: Starts the backend server with `nodemon`.
*   `npm start`: Starts the backend server with `node`.

## API Endpoints

The following API endpoints are available:

| Method   | Endpoint         | Description              |
| :------- | :--------------- | :----------------------- |
| `GET`    | `/api/notes`     | Get all notes            |
| `GET`    | `/api/notes/:id` | Get a single note by ID  |
| `POST`   | `/api/notes`     | Create a new note        |
| `PUT`    | `/api/notes/:id` | Update an existing note  |
| `DELETE` | `/api/notes/:id` | Delete a note            |
