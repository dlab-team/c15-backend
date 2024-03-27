import models from "../models/index.js";
const { database } = models;

await database.sync({ force: process.env.npm_config_reset })
    .then(() => {
    console.log("Database synchronized successfully");
    process.exit();
    })
    .catch((err) => {
    console.log("Failed to sync db: " + err);
    });
