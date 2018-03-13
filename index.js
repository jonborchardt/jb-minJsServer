const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3030;

app.use(bodyParser.json());

app.get('/players', function (req, res) {
  res.status(200).send('Hello World!');
});

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));

// use ChromeRestClient (chrome extension to test put/push, etc)