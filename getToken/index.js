const { GoogleAuth } = require('google-auth-library');
const path = require('path');
const fs = require('fs');

// Path to your actual service account key file
const SERVICE_ACCOUNT_FILE = path.join(__dirname, 'serviceAccountKey.json');

// Check if the service account file exists
if (!fs.existsSync(SERVICE_ACCOUNT_FILE)) {
    console.error('Service account key file not found at:', SERVICE_ACCOUNT_FILE);
    process.exit(1); // Exit the process if the file is missing
}

// Define the required scopes
const SCOPES = [
    'https://www.googleapis.com/auth/userinfo.email',
    'https://www.googleapis.com/auth/firebase.database'
];

// Function to get the access token
async function getAccessToken() {
    const auth = new GoogleAuth({
        keyFile: SERVICE_ACCOUNT_FILE,
        scopes: SCOPES,
    });

    const client = await auth.getClient();
    const accessToken = await client.getAccessToken();

    return accessToken.token;
}

// Main function to get and display the access token
async function main() {
    try {
        const token = await getAccessToken();
        console.log('Access Token:', token);
    } catch (error) {
        console.error('Error getting access token:', error);
    }
}

// Execute the main function
main();
