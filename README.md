# RandomJokeController Documentation

## Introduction

The `RandomJokeController` class provides methods to fetch jokes and download random images from the API-Ninjas service using Axios in a Node.js environment.

### Technologies Used:
- Node.js
- Axios
- fs (File System)
- path

### Dependencies:
- axios: "^0.24.0"
- uuid: "^8.3.2" (for generating unique filenames)

## Installation

To use the `RandomJokeController` class, ensure Node.js and npm (Node Package Manager) are installed. Install dependencies using the following command:

```bash
npm install axios uuid
```

## Class: RandomJokeController

### Constructor

```javascript
constructor()
```
- Initializes an instance of the `RandomJokeController` class.

### Method: getJokes

```javascript
async getJokes(req, res)
```
- **Description**: Fetches a list of jokes from the API-Ninjas service.
- **Endpoint**: `GET /api/jokes`
- **Parameters**:
  - `req`: Express request object.
  - `res`: Express response object.
- **Returns**:
  - JSON response with a list of jokes or an error message.
- **Usage**:
  ```javascript
  const response = await axios.get('https://api.api-ninjas.com/v1/jokes', {
      headers: { 'X-Api-Key': 'YOUR_API_KEY' }
  });
  ```

### Method: getRandomImages

```javascript
async getRandomImages(req, res)
```
- **Description**: Downloads a random image from the API-Ninjas service.
- **Endpoint**: `GET /api/randomimage`
- **Parameters**:
  - `req`: Express request object.
  - `res`: Express response object.
- **Returns**:
  - Image file (JPEG) or an error message.
- **Usage**:
  ```javascript
  const response = await axios.get('https://api.api-ninjas.com/v1/randomimage', {
      headers: {
          'X-Api-Key': 'YOUR_API_KEY',
          'Accept': 'image/jpg'
      },
      responseType: 'stream'
  });
  ```
- **File Storage**:
  - Saves each image with a unique filename in the `./Images` directory using `uuidv4()`.

### Error Handling

- Handles HTTP errors (status codes) and network exceptions gracefully.
- Returns appropriate error messages with status codes.

## Example Usage

```javascript
import RandomJokeController from './RandomJokeController.js';

const randomJokeController = new RandomJokeController();

// Example route setup using Express
app.get('/api/jokes', (req, res) => randomJokeController.getJokes(req, res));
app.get('/api/randomimage', (req, res) => randomJokeController.getRandomImages(req, res));
```

## Notes

- Ensure proper API key management to avoid unauthorized access.
- The `uuid` module is used to generate unique filenames for downloaded images.
