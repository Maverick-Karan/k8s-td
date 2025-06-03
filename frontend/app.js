// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios');

const app = express();
const PORT = 3000;

// URL of the Flask backend service
const FLASK_BACKEND_URL = 'http://backend:5000/submit';

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files from 'public' folder
app.use(express.static('public'));

// Set EJS as the template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Render form page
app.get('/', (req, res) => {
    res.render('index', { error: null });
});

// Handle form submission
app.post('/submit', async (req, res) => {
    const { name, age } = req.body;

    try {
        // Send POST request to Flask backend
        const response = await axios.post(FLASK_BACKEND_URL, { name, age });

        if (response.status === 200) {
            // Redirect to success page
            res.redirect('/success');
        } else {
            // Display error message on the same page
            res.render('index', { error: 'Submission failed' });
        }
    } catch (err) {
        const error = err.response?.data?.error || 'Error connecting to backend';
        res.render('index', { error });
    }
});

// Render success page
app.get('/success', (req, res) => {
    res.render('success');
});

// Start server
app.listen(PORT, () => {
    console.log(`Frontend running on http://localhost:${PORT}`);
});
