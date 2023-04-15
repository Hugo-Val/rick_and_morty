// JavaScript source code
require('dotenv').config();

const STATUS_OK = 200;
const STATUS_NOT_FOUND = 404;
const STATUS_SERVER_ERROR = 500;

let myFavorites = [];

function handleFavorites(swap) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (swap) resolve(myFavorites);
            reject("not found favorites");
        }, 1000);
    });
}

async function postFav(req, res) {
    const favorites = await handleFavorites(true);
    const { id, name, status, species, gender, origin, image } = req.body;
    try {
        if (!id || !name || !image) {
            return res
                .status(STATUS_NOT_FOUND)
                .json({ message: "Missing required fields" });
        }
        const character = {
            id,
            name,
            status,
            species,
            gender,
            origin,
            image
        };
        favorites.push(character);
        res.status(STATUS_OK).json(favorites);
    } catch (err) {
        res.status(STATUS_SERVER_ERROR).json({ message: err.message });
    }
}

function deleteFav(req, res) {
    const { id } = req.params;
    try {
        if (!id) {
            return res
                .status(STATUS_NOT_FOUND)
                .json({ message: "id not found" });
        }
        const newFavorites = myFavorites.filter(fav => fav.id !== Number(id));
        myFavorites = newFavorites;
        res.status(STATUS_OK).json(myFavorites);
    } catch (err) {
        res.status(STATUS_SERVER_ERROR).json({ message: err.message });
    }
}

module.exports = {
    postFav,
    deleteFav
};