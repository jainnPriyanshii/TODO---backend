import express from 'express'
import deleteTask from '../controllers/delete.controller'

const router = express.Router();

router.delete('/tasks/:id', deleteTask);

export default router;
