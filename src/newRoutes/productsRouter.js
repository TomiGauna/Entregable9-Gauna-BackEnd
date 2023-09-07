import { Router } from "express";
import { getAllProducts, getProdById, addProduct, updateProduct, deleteProduct  } from "../controllers/productsController.js";
import { isAdminMiddleware } from "../config/passport.config.js";
import { addLogger } from "../utils/loggers.js";


const router = Router();

router.use(addLogger);

router.get('/', getAllProducts);
router.get('/:pid', getProdById);
router.post('/', isAdminMiddleware, addProduct);
router.put('/:updId', isAdminMiddleware, updateProduct);
router.delete('/:removedId', isAdminMiddleware, deleteProduct);

export default router