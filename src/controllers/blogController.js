import { Sequelize } from "sequelize";
import models from "../models/index.js";
import multer from "multer";
import upload from "../middleware/multerConfig.js";
import fs from 'fs';

const { BlogPost } = models;
const { User } = models;

// GET: Devuelve todos los post realizados
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

// POST: Endpoint para crear un post
async function create(req, res) {
    upload.single('image')(req, res, async (err) => {
        console.log(req.file)
        // Acá verificamos si existe algun error que nos devuelve Multer al intentar cargar la imagen
        if (err instanceof multer.MulterError || !req.body.title || !req.body.content) {
            return res.status(400).json({ message: `Error 400: Bad Request - ${err ? err : "Title or content is empty."}` });
        }
        try {
            // Si el usuario no envía imagen del blog, se le asignará automaticamente la imagen por defecto
            let imageFileName = req.file ? req.file.filename : 'default_image.jpeg';
            const newPost = await BlogPost.create({ ...req.body, image: imageFileName });
            res.json(newPost);
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: `Error: ${error.message}` });
        };
    });
};

// GET + ID: Ver el contenido de un blog en específico
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

// PUT + ID: Editar blog
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
            // Si el cliente no quiere cambiar su imagen, esta se mantendrá
            await blog.update({ ...req.body, image: req.file ? req.file.filename : blog.image });
            await blog.update({ updatedAt: Sequelize.literal('NOW()') });
            res.json(blog);
        });
    } catch (error) {
        res.status(400).json({ message: `Error: ${error.message}` });
    };
};

// DELETE + ID: Eliminar un blog en específico
async function destroy(req, res) {
    try {
        const blog = await BlogPost.findByPk(req.params.id);
        if (!blog) {
            return res.status(404).json({ message: `Error blog not found` })
        }
        const imagePath = `src/public/images/${blog.image}`;
        // acá verificamos si la imagen es la "por defecto"
        const isDefaultImage = blog.image === 'default_image.jpeg';
        // Si la imagen no es la imagen por defecto, eliminarla del servidor
        if (!isDefaultImage && fs.existsSync(imagePath)) {
            fs.unlinkSync(imagePath); // Eliminar el archivo de imagen
        }
        await blog.destroy();
        res.json({ message: 'Blog deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: `Error: ${error.message}` });
    };
};

export default { index, create, read, update, destroy };