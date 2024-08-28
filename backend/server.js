const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const audioRoutes = require('./routes/audioRoutes');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables from .env file

const app = express();

// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing (CORS) to allow requests from different origins
app.use(express.json()); // Parse incoming requests with JSON payloads
app.use('/uploads', express.static('uploads')); // Serve static files from the "uploads" folder (for accessing uploaded files)

app.use(bodyParser.json()); // Parse JSON data in request body
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded data (form data) with extended option

// Connect to MongoDB using the URI from the environment variables
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected')) // Log success message if connection is successful
  .catch(err => console.log('Error connecting to MongoDB:', err)); // Log error message if connection fails

// Routes
app.use('/api/audio', audioRoutes); // Mount the audio routes at the "/api/audio" path

// Start server
const PORT = process.env.PORT || 5000; // Define the port to listen on, default to 5000 if not provided in environment variables
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`); // Log that the server is running and which port it's listening on
});
