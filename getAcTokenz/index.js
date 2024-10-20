const express = require('express');
const app = express();
const PORT = 4000;

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/getres', (req, res) => {
    // Sample data to return
    const responseData = {
        status: 'success',
        message: 'This is your endpoint response!',
        data: {
            exampleKey: 'exampleValue',
            timestamp: new Date().toISOString(),
        },
    };

    // Send a 200 OK response with JSON data
    res.status(200).json(responseData);

    // Log the Content-Type of the response
    console.log('Response Type:', res.get('Content-Type'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});