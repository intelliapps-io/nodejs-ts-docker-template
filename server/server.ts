import * as express from "express";

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World for Docker!\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);