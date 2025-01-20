const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
let messages = [{ id: 1, text: 'Hello, world!' }];

// GET /messages - Fetch all messages
app.get('/messages', (req, res) => {
  res.json(messages);
});


// Listen on all network interfaces (0.0.0.0) to make the app publicly accessible
app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running at http://0.0.0.0:${port}`);
});
