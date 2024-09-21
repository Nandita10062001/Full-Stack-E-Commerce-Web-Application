import express from 'express';
import {registerController, loginController, testController} from '../controllers/auth_controller.js';
import { isAdmin, requireSignIn } from '../middlewares/auth_middleware.js';

//router object
const router = express.Router();

//routing
//Register || Method POST
router.post('/register', registerController);

//LOGIN || Method POST
router.post('/login', loginController);

//test routes
router.get('/test',requireSignIn, isAdmin, testController);
export default router;