import { Router } from "express";
const router = Router();
import controller from '../controllers/{something}';

router.get("/", async (req, res, next) => {
    try {
        //const something = await controller.get{something}();
       // res.send({ success: true, something });
    } catch (error) {
        next(error);
    }
});

export default router;