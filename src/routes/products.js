import express from 'express';
import ProductsController from '../controllers/products';

const router = express.Router();
const productController = new ProductsController();
router.get('/', (req, res) => productController.get(req, res));

export default router;