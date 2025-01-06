const express = require('express');
const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

const readline = require('readline');

// Setup Express app
const app = express();
const port = 3000;

// Load client secrets from the client_secret file
const credentials = JSON.parse(fs.readFileSync('client_secret_568217282248-614p0l5gnacikld9bas46ovakmc38np3.apps.googleusercontent.com.json')); // <-- Updated to your correct filename

// Create an OAuth2 client
const { client_id, client_secret, redirect_uris } = credentials.web; // <-- Changed to 'web' instead of 'installed'
const oAuth2Client = new google.auth.OAuth2(
  client_id, client_secret, redirect_uris[0]
);

// Scopes for Gmail API
const SCOPES = ['https://www.googleapis.com/auth/gmail.send'];

// Token file location
const TOKEN_PATH = 'token.json';

// Step 1: Get Authorization URL and Authenticate User
app.get('/', (req, res) => {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });

  // Send the URL to the user to start the OAuth flow
  res.send(`<a href="${authUrl}">Authenticate with Google</a>`);
});

// Step 2: OAuth Callback (Exchange code for tokens)
app.get('/oauth2callback', async (req, res) => {
  const code = req.query.code;

  try {
    // Exchange the authorization code for an access token
    const { tokens } = await oAuth2Client.getToken(code);
    oAuth2Client.setCredentials(tokens);

    // Save the token to a file for later use
    fs.writeFileSync(TOKEN_PATH, JSON.stringify(tokens));

    res.send('Authentication successful! Now you can send an email. <a href="/sendEmail">Send Email</a>');
  } catch (error) {
    console.error('Error during authentication', error);
    res.status(500).send('Error during authentication');
  }
});

// Step 3: Send Email (Use Gmail API)
app.get('/sendEmail', async (req, res) => {
  try {
    // Get the saved token
    const token = fs.readFileSync(TOKEN_PATH);
    const credentials = JSON.parse(token);
    oAuth2Client.setCredentials(credentials);

    const gmail = google.gmail({ version: 'v1', auth: oAuth2Client });
    console.log("in mail")
    // Create email message
    const email = createEmail(
      'rusil.varu55@gmail.com', // recipient email
      'rusilvaru555@gmail.com', // sender email
      'Test Email', // subject
      'This is a test email sent from the Gmail API using Node.js.' // body
    );

    // Send the email using Gmail API
    const sendMessage = await gmail.users.messages.send({
      userId: 'me',
      resource: {
        raw: email,
      },
    });

    res.send('Email sent successfully!');
  } catch (error) {
    console.error('Error sending email', error);
    res.status(500).send('Error sending email');
  }
});

// Create an email in base64 encoding format
function createEmail(to, from, subject, body) {
  const message = [
    `To: ${to}`,
    `From: ${from}`,
    `Subject: ${subject}`,
    '',
    body,
  ].join('\n');

  // Base64 encode the email message
  return Buffer.from(message).toString('base64').replace(/\+/g, '-').replace(/\//g, '_');
}

// Start Express server on port 3000
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
  console.log('Open the following link to authenticate:', `http://localhost:${port}`);
});
