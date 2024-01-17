const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyToken = (req, res, next) => {
    try {
        const token = req.header("auth-token");

        if (!token) return res.status(403).json({ error: "Access denied" });

        const verifiedToken = jwt.verify(token, process.env.SIGN);

        req.user = verifiedToken;
        next();
    } catch (error) {
        return next(error);
    }
};

module.exports = verifyToken;