import express from 'express'
import updateTask from '../controllers/update.controller'

const router = express.Router();

router.put('/tasks/:id', updateTask);

export default router;
