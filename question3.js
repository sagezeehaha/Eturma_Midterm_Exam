const express = require('express');
const app = express();

// Define the /test route
app.get('/test', (req, res) => {
    res.json({ message: 'Express is working! Eturma Bonch Reuben R.' });
});

// Start the server on port 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
