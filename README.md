# ThinkBoard

ThinkBoard is a full-stack web application for taking notes. It features a clean and modern user interface and a robust backend powered by Node.js, Express, and SQLite, with rate limiting support.

## Features

*   **CRUD Operations**: Create, Read, Update, and Delete notes.
*   **Responsive Design**: A mobile-first design that works on all screen sizes.
*   **SQLite Storage**: Local file-based SQL database storing notes with string UUIDs, completely self-contained.
*   **Resilient Rate Limiting**: Backend is protected against brute-force attacks via Upstash Redis. If Redis is offline or paused, the rate limiter automatically bypasses to keep the application functional.
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
*   **Database**: [SQLite](https://www.sqlite.org/) via `sqlite` (promises) and `sqlite3`
*   **Rate Limiting**: [Upstash Redis](https://upstash.com/) (with local bypass fallback)

## Getting Started

### Prerequisites

*   Node.js (v18 or later)
*   npm

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
        PORT=5001
        SQLITE_DB_PATH=database.sqlite
        
        # (Optional) Upstash Redis config for rate limiting
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
    *   The server will start on `http://localhost:5001` and automatically initialize the SQLite database table structure.

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
