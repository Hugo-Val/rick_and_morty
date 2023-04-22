const { User } = require('../DB_connection');

const login = async (req, res) => {
const { email, password } = req.query;
    try {
        if (!email || !password ) {
            return res.status(400).json({ error: "Email or password is empty" });
        }
        const user = await User.findOne({
            where: {
                email,
                password,
            },
        });
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        res.status(200).json({ access : true });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = login;