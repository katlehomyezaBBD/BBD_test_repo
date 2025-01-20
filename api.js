const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
let messages = [{ id: 1, text: 'Hello, world!' }];

// GET /messages - Fetch all messages
app.get('/messages', (req, res) => {
  res.json(messages);
});


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
