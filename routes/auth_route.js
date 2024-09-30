import express from 'express';
import {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
} from '../controllers/auth_controller.js';
import { isAdmin, requireSignIn } from '../middlewares/auth_middleware.js';

//router object
const router = express.Router();

//routing
//Register || Method POST
router.post('/register', registerController);

//LOGIN || Method POST
router.post('/login', loginController);

//FORGOT PASSWORD || POST
router.post('/forgot-password', forgotPasswordController);

//test routes
router.get('/test', requireSignIn, isAdmin, testController);

//protected route auth user
router.get('/user-auth', requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

//protected route auth admin
router.get('/admin-auth', requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

export default router;
