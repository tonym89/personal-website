const express = require('express');
const app = express();

app.get('/hey', (req, res) => res.send({ message: 'hey' }))

app.listen(8080)
