import express from 'express';
import { isAdmin, requireSignIn } from '../middlewares/auth_middleware.js';
import {
  createProductController,
  deleteProductController,
  getProductController,
  getSingleProductController,
  productCountController,
  productFilterController,
  productListController,
  productPhotoController,
  updateProductController,
} from '../controllers/productController.js';
import formidable from 'express-formidable';

const router = express.Router();

//routes
router.post(
  '/create-product',
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);

//update product
router.put(
  '/update-product/:pid',
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);

//get-products
router.get('/get-product', getProductController);

//single product
router.get('/get-product/:slug', getSingleProductController);

//get photo
router.get('/product-photo/:pid', productPhotoController);

//delete product
router.delete('/delete-product/:pid', deleteProductController);

//filter product
router.post('/product-filters', productFilterController);

//product-count
router.get('/product-count', productCountController);

//product-per-page
router.get('/product-list/:page', productListController);

export default router;
