const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/student_tasks', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

// Define Schema and Models for courses and tasks

// Define routes
app.post('/addTask', async (req, res) => {
    // Handle adding a task to the database
});

app.get('/courses/:courseId/tasks', async (req, res) => {
    const courseId = req.params.courseId;
    try {
        // Fetch tasks associated with the courseId from the database
        // Send JSON response with tasks
    } catch (error) {
        console.error('Error fetching tasks:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Import required modules

// Middleware to parse incoming JSON requests
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Define routes
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Define other routes as needed

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
