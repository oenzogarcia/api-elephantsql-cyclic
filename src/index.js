const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
    return res.json('tudo ok');
});

app.listen(process.env.PORT, () => {
    console.log(`Servidor em pé na porta: ${process.env.PORT}`)
});