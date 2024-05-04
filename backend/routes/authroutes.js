import express from 'express';
import { login,logout,register } from '../controllers/authcontroller.js';
const router=express.Router();

router.post('/login',login)

router.post('/signup',register)

router.post('/logout',logout);

export default router;