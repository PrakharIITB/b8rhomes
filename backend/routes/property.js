import express from 'express';
import { getData, getProperties } from '../controllers/property.js';

const router = express.Router();

router.get("/", getProperties);
router.post("/getProperty", getData);

export default router;