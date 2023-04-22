const { Favorite } = require('../DB_connection');

const deleteFav = async (req, res) => {
    const { id } = req.params;
    try {
        if (!id) {
            return res.status(401).json({ error: "Missing data" });
        }
        const favToDelete = await Favorite.destroy({
            where: {
                id,
            },
        });
        res.status(200).json(favToDelete);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = deleteFav;