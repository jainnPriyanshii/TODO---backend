import task from '../models/task.models'

const deleteTask = async (req, res) => {
    try {
        const deletedTask = await task.findByIdAndDelete(req.params.id);
        if (deletedTask) {
            res.status(204).end();
            res.status(404).json({ message: 'Task not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export default deleteTask;
