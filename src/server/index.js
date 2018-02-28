import express from 'express';
import render from './render';

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send(render());
});
app.use('/assets', express.static('assets'));
app.use('/js', express.static('dist'));

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
