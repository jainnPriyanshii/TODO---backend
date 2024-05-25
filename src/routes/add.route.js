import express from 'express'
import addTask from '../controllers/add.controller'

const router = express.Router();

router.post('/tasks', addTask);

export default router;


