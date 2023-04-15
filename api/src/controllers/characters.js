// JavaScript source code
const axios = require('axios');
require('dotenv').config();

const URL = process.env.API_URL;
//const EMAIL = process.env.EMAIL;
//const PASSWORD = process.env.PASSWORD;

const STATUS_OK = 200;
const STATUS_NOT_FOUND = 404;
const STATUS_SERVER_ERROR = 500;

async function getCharById(req, res) {
    try {
        const { id } = req.params;
        const { data } = await axios.get(`${URL}${id}`)
            if (data.name) {
                const character = {
                    id: data.id,
                    status: data.status,
                    name: data.name,
                    species: data.species,
                    origin: data.origin?.name,
                    image: data.image,
                    gender: data.gender,
                    location: data.location?.name
                };
                res.status(STATUS_OK).json(character)
                
            }
            else {
                res.status(STATUS_NOT_FOUND).send("Character Not Found");
            }
    }
    catch (err) {
        res.status(STATUS_SERVER_ERROR).json({ message: err.message });
    }
}

function getAllChar(req, res) {
    axios.get(`${URL}`)
        .then(response => {
        if (response.data) {
            const characters = response.data.results.map(ch => {
                const character = {
                    id: ch.id,
                    status: ch.status,
                    name: ch.name,
                    species: ch.species,
                    origin: ch.origin?.name,
                    Image: ch.image,
                    gender: ch.gender
                };
                return character;
            });
            res.status(STATUS_OK).json(characters);
            } else { res.status(STATUS_NOT_FOUND).send("Character Not Found"); }
        })
        .catch(err => {
            res.status(STATUS_SERVER_ERROR).json({ message: err.message });
        });
}

module.exports = {
    getCharById,
    getAllChar
};