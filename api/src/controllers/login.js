// JavaScript source code
require('dotenv').config();

const DB_EMAIL = process.env.DB_EMAIL;
const DB_PASSWORD = process.env.DB_PASSWORD;

const STATUS_OK = 200;
const STATUS_NOT_FOUND = 404;
const STATUS_SERVER_ERROR = 500;

function login(req, res) {
    const { email, password } = req.query;
    try {
        if (!email || !password) {
            return res
                .status(STATUS_NOT_FOUND)
                .json({ message: "There isn't a password or email" });
        }
        if (email === DB_EMAIL && password === DB_PASSWORD) {
            res.status(STATUS_OK).json({ access: true });
        } else {
            res.status(STATUS_OK).json({ access: false });
        }
    } catch (err) {
        res.status(STATUS_SERVER_ERROR).json({ message: err.message });
    }
}

module.exports = {
    login
};