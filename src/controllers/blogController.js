import { Sequelize } from "sequelize";
import models from "../models/index.js";
import multer from "multer";
import upload from "../middleware/multerConfig.js";
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';

const { BlogPost, User } = models;

async function index(req, res, next) {
    try {
        const blogs = await BlogPost.findAll({
            include: [{
                model: User,
                attributes: ['id', 'first_name', 'last_name', 'email']
            }],
            order: [['createdAt', 'DESC']]
        });
        res.json(blogs);
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: `Error: ${error.message}` });
    };
};

async function getImage(req, res) {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const imageName = req.params.imageName;
    const projectRoot = dirname(__dirname);
    const imagePath = path.join(projectRoot, 'public', 'images', imageName);
    res.sendFile(imagePath, (err) => {
        if (err) {
            res.status(404).json({ error: 'Image not found' });
        }
    });
};

async function create(req, res) {
    upload.single('image')(req, res, async (err) => {
        // console.log(req.file)
        console.log(req.body)
        if (err instanceof multer.MulterError || !req.body.title || !req.body.content) {
            return res.status(400).json({ message: `Error 400: Bad Request - ${err ? err : "Title or content is empty."}` });
        }
        try {
            let imageFileName = req.file ? req.file.filename : 'default_image.jpeg';
            const newPost = await BlogPost.create({ ...req.body, image: imageFileName });
            res.json(newPost);
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: `Error: ${error.message}` });
        };
    });
};

async function read(req, res) {
    try {
        const blog = await BlogPost.findByPk(req.params.id, {
            include: [{
                model: User,
                attributes: ['id', 'first_name', 'last_name', 'email']
            }]
        });
        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' })
        }
        // console.log(blog.dataValues);
        res.json(blog.dataValues);
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: `Error: ${error.message}` });
    };
};

async function update(req, res) {
    try {
        upload.single('image')(req, res, async (err) => {
            if (err instanceof multer.MulterError) {
                return res.status(400).json({ message: `Error 400: Bad Request - ${err}` });
            }
            const blog = await BlogPost.findByPk(req.params.id);
            if (!blog) {
                return res.status(404).json({ message: `Error blog not found` })
            }
            await blog.update({ ...req.body, image: req.file ? req.file.filename : blog.image });
            await blog.update({ updatedAt: Sequelize.literal('NOW()') });
            res.json(blog);
        });
    } catch (error) {
        res.status(400).json({ message: `Error: ${error.message}` });
    };
};

async function destroy(req, res) {
    try {
        const blog = await BlogPost.findByPk(req.params.id);
        if (!blog) {
            return res.status(404).json({ message: `Error blog not found` })
        }
        const imagePath = `src/public/images/${blog.image}`;
        const isDefaultImage = blog.image === 'default_image.jpeg';
        if (!isDefaultImage && fs.existsSync(imagePath)) {
            fs.unlinkSync(imagePath);
        }
        await blog.destroy();
        res.json({ message: 'Blog deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: `Error: ${error.message}` });
    };
};

export default { index, create, read, update, destroy, getImage };