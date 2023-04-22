const { Favorite } = require('../DB_connection');

const postFav = async (req, res) => {
    const { name, origin, status, image, species, gender } = req.body;
    try {
        if (!name || !image || !origin || !status || !species || !gender) {
            return res.status(401).json({ error: "Missing data" });
        }
        const newFav = await Favorite.create({
            name,
            origin,
            status,
            image,
            species,
            gender,
        });
        res.status(200).json(newFav);
    } catch (error) {
    res.status(500).json({ error: error.message });
    }
}

module.exports = postFav;


        


