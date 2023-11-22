// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();

// Use body-parser middleware to parse JSON
app.use(bodyParser.json());

// Handle post requests to /events
app.post('/events', (req, res) => {
    // Get event type and data from request body
    const { type, data } = req.body;

    // Handle comment creation event
    if (type === 'CommentCreated') {
        // Get comment data from request body
        const { id, content, postId } = data;

        // Add status property to comment data
        data.status = content.includes('orange') ? 'rejected' : 'approved';

        // Send comment moderation event to event bus
        axios.post('http://localhost:4005/events', {
            type: 'CommentModerated',
            data: {
                id,
                postId,
                content,
                status: data.status
            }
        });
    }

    // Send response
    res.send({});
});

// Listen on port 4003
app.listen(4003, () => {
    console.log('Listening on port 4003');
});