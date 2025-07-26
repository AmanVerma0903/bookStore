import express from 'express';

import { login, signUp } from '../controller/user.controller.js';

const router = express.Router();;

router.post('/signup',signUp); //post bacuse humlog data bhej rhe hai
router.post('/login',login);

export default router;