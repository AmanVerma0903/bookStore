import express from 'express';

import { login, signUp } from '../controller/user.controller.js';

const router = express.Router();;

// GET route to show available endpoints
router.get('/', (req, res) => {
  res.json({
    message: 'BOOKLY User API',
    endpoints: {
      signup: 'POST /user/signup',
      login: 'POST /user/login'
    },
    usage: {
      signup: 'Send POST request with {fullname, email, password}',
      login: 'Send POST request with {email, password}'
    }
  });
});

router.post('/signup',signUp); //post bacuse humlog data bhej rhe hai
router.post('/login',login);

export default router;