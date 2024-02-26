import { Sequelize } from "sequelize";
import models from "../models/index.js";
const { BlogPost } = models;
const { User } = models;

// GET: Devuelve todos los post realizados
async function index(req, res, next) {
    try {
        const blogs = await BlogPost.findAll({
            include: [{
                model: User,
                attributes: ['id', 'name', 'last_name', 'email']
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
    if (!req.body.title || !req.body.content) {
        return res.status(400).json({ message: 'Error 400: Bad Request' });
    }
    try {
        const newPost = await BlogPost.create(req.body);
        res.json(newPost);
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: `Error: ${error.message}` });
    };
};

// GET + ID: Ver el contenido de un blog en específico
async function read(req, res) {
    try {
        const blog = await BlogPost.findByPk(req.params.id, {
            include: [{
                model: User,
                attributes: ['id', 'name', 'last_name', 'email']
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
    if (req.body.title == '' || req.body.content == '' || req.body.id_user == '') {
        return res.status(400).json({ message: 'Error 400: Bad Request' });
    }
    try {
        const blog = await BlogPost.findByPk(req.params.id);
        if (!blog) { return res.status(404).json({ message: `Error blog not found` }) }
        //   console.log(req.body)
        await blog.update(req.body);
        // Actualiza el campo 'updatedAt' con la fecha y hora actual
        await blog.update({ updatedAt: Sequelize.literal('NOW()') });
        res.json(blog);
    } catch (error) {
        res.status(400).json({ message: `Error: ${error.message}` });
    };
};

// DELETE + ID: Eliminar un blog en específico
async function destroy(req, res) {
    try {
        const blog = await BlogPost.findByPk(req.params.id);
        if (!blog) { return res.status(404).json({ message: `Error blog not found` }) }
        blog.destroy();
        res.json({ message: 'Blog deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: `Error: ${error.message}` });
    };
};

export default { index, create, read, update, destroy };