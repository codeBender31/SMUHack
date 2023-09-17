import twilio from 'https://cdn.jsdelivr.net/npm/twilio@5.39.0/dist/twilio.min.js';
// Import the Twilio library
 // const twilio = require('twilio');
// Your Twilio account SID and authentication token
const accountSid = 'ACc9e5ba46f556939d783038cc0cb69cb2';
const authToken = '10568bd3d06366c179ba9f9c4175dca5';

// Create a Twilio client
const client = twilio(accountSid, authToken);

// Define the recipient's phone number and the message you want to send
const recipientPhoneNumber = '+14696505404'; // Replace with the recipient's actual phone number
const message = 'Hey CBRE Floor Manager, we need you to inspect machine #12626. Active fault code P0101. Possible open circuit.';

// Get references to the button and status paragraph
const sendSmsButton = document.getElementById('sendSmsButton');
const smsStatus = document.getElementById('smsStatus');

// Add a click event listener to the button
sendSmsButton.addEventListener('click', () => {
  // Send the SMS
  client.messages
    .create({
      body: message,
      from: '+18449912339', // Replace with your Twilio phone number
      to: recipientPhoneNumber,
    })
    .then(message => {
      smsStatus.textContent = `Message sent with SID: ${message.sid}`;
    })
    .catch(error => {
      smsStatus.textContent = `Error sending message: ${error.message}`;
    });
});
