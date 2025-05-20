const express = require('express');
const cors = require('cors')
const cryptoController = require('./controller/crypto');
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors())

app.get('/', (req, res) => {
    res.send('S')
    
});

app.post('/crypto', cryptoController.cryptoPassword)

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
});