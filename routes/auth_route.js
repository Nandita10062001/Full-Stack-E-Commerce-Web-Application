import express from 'express';
import {registerController, loginController} from '../controllers/auth_controller.js';

//router object
const router = express.Router();

//routing
//Register || Method POST
router.post('/register', registerController);

//LOGIN || Method POST
router.post('/login', loginController);

export default router;