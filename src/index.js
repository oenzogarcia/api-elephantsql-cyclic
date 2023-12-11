const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const knex = require('./conexao');

const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
    try {
        const animes = await knex('animes').select('*');
        return res.json(animes);
    } catch (error) {
        console.log(error.message);
    }

});

app.get('/animes', async (req, res) => {
    try {
        const animes = await knex('animes').select('*');
        return res.json(animes);
    } catch (error) {
        console.log(error.message);
    }

});

app.listen(process.env.PORT, () => {
    console.log(`Servidor em pé na porta: ${process.env.PORT}`)
});