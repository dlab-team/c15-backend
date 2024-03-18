import jwt from "jsonwebtoken";
import models from "../models/index.js";
const { User, InvalidToken } = models;

function validateUser (roles = [1, 2]) {
    return async (req, res, next) => {
        try {
            const token = req.header("authorization");
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            const invalidToken = await InvalidToken.findOne({
                where: { token: token },
                attributes: ['token']
            });
            const user = await User.findByPk(decoded.sub, { attributes: ['password_date', 'role_id'] });
            const password_date = Math.floor(user.password_date.getTime()/1000)
            if (invalidToken || decoded.iat < password_date) {
                return res.status(401).json({ message: 'Error 401: Unauthorized' });
            };
            if (req.params.id == decoded.sub || roles.includes(user.role_id)) {
                next();
            } else {
                return res.status(403).json({ message: 'Error 403: Forbidden' });
            };
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }
};

async function validateRecovery (req, res, next) {
    try {
        const token = req.header("authorization");
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findByPk(decoded.sub, { attributes: ['password_date'] });
        const password_date = Math.floor(user.password_date.getTime()/1000)
        if (!decoded.recovery || decoded.iat < password_date) {
            return res.status(401).json({ message: 'Error 401: Unauthorized' });
        };
        next();
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

export {
    validateUser,
    validateRecovery
};
