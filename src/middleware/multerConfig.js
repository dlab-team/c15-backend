import multer from "multer";

const storage = multer.diskStorage({
    destination: 'src/public/images',
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname); // Nombre de archivo único
    }
});

const upload = multer({
    storage,
    limits: {
        fileSize: 1000000 // Límite máximo 1MB por imagen
    }
});

export default upload;