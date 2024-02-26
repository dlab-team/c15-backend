import jwt from "jsonwebtoken";
import models from "../models/index.js";
const { InvalidToken } = models;

async function userIdAccess (req, res, next) {
    try {
        const token = req.header("authorization");
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const invalidToken = await InvalidToken.findOne({
            where: { token: token },
            attributes: ['token']
        });
        if (invalidToken) {
            return res.status(401).json({ message: 'Unauthorized' });
        };
        if (req.params.id != decoded.sub) {
            return res.status(403).json({ message: 'Forbidden' });
        };
        next();
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

export default userIdAccess;
