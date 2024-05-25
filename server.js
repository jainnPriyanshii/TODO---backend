
import express from "express";
import mongoose from "mongoose";
import 'dotenv/config.js'
import bodyParser from "body-parser";
// import addTask from '../api/controller/add.controller';
import addController from '../api/controller/add.controller'; 
import update from '../api/controller/update.controller';
import deleteTask from '../api/controller/delete.controller';
import cors from "cors"
import dotenv from 'dotenv';
import addTask from "./api/controller/add.controller";



const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;


dotenv.config();

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Failed to connect to MongoDB', err));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors()); 

app.get('/tasks', async (req, res) => {
    try {
        const tasks = await tasks.find();
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


app.get('/tasks/:id', async (req, res) => {
    try {
        const task = await task.findById(req.params.id);
        if (task) {
            res.json(task);
        } else {
            res.status(404).json({ message: 'Task not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.post('/tasks', addTask);


app.put('/tasks/:id', update);


app.delete('/tasks/:id', deleteTask);

app.use(addRoute);
app.use(updateRoute);
app.use(deleteRoute);



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
