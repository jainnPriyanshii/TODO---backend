import mongoose from 'mongoose'

const taskSchema = new mongoose.Schema({
    title:{
        type : string,
        required: true,
    },

    description:{
        type : string,
        required: true,
    },

    todo:{
        type:string,
        required: true
    },

    duedate:{
        type:Date,
        required:true
    },

    duedate:{
        type:string,
        required:true
    }
});

const task = mongoose.model('task',taskSchema) 


export default task;