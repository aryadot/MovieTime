# MovieTime

Sure, here's a concise README file based on the key points from the tutorial:

---

# Movie Search App

A React application to search for and display movie information using the OMDB API. Built with React Hooks (useState, useEffect, useReducer).

## Features
- Search for movies by title
- Display movie title, year, and poster
- Loading spinner during API requests
- Error handling for failed API requests

## Technologies
- React
- React Hooks: useState, useEffect, useReducer
- OMDB API

## Setup
### Prerequisites
- Node.js (≥ 6)
- npm

### Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/movie-search-app.git
    cd movie-search-app
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Get your OMDB API key from [OMDB API](http://www.omdbapi.com/apikey.aspx).

4. Create a `.env` file in the root directory and add your API key:
    ```env
    REACT_APP_OMDB_API_KEY=your_api_key
    ```

5. Start the development server:
    ```bash
    npm start
    ```

6. Open your browser and navigate to `http://localhost:3000`.

## Components
### App
- The parent component that handles the API requests and manages state using `useReducer`.

### Header
- Renders the app header.

### Movie
- Renders individual movie information (title, year, poster).

### Search
- Contains the search input and button, uses `useState` for managing input state.

## Hooks Used
- **useState**: Adds state to functional components.
- **useEffect**: Performs side effects like data fetching.
- **useReducer**: Manages complex state with a reducer function and actions.

## Usage
1. Enter a movie title in the search bar.
2. Click the "SEARCH" button.
3. View the search results below the search bar.

## Contributing
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Enjoy using the Movie Search App! If you have any questions or feedback, feel free to reach out.

---
