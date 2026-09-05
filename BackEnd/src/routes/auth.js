import express from 'express';
import { signup, login, logout, updateProfile } from '../controllers/auth.js';
const router = express.Router();
import { protectRoute } from '../middleware/auth.js';
import { arcjetProtection } from '../middleware/arcjet.js';

router.post('/signup', arcjetProtection ,signup);
router.post('/login', arcjetProtection , login);
router.post('/logout', arcjetProtection , logout);
router.put('/update-profile', arcjetProtection , protectRoute , updateProfile);
router.get('/check', arcjetProtection , protectRoute, (req, res) => res.status(200).json(req.user));


export default router;