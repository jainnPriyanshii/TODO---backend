import task from '../models/task.models'

const addTask = async (req, res) => {
    const task = new task({
        title: req.body.title,
        description: req.body.description,
        todo: req.body.todo,
        duedate : req.body.duedate,
        status : req.body.status
    });

    try {
     const newTask = await task.save();
        res.status(201).json(newTask);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

export default addTask;


