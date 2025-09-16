import todojdSchema from '../models/todojd.js'

//get all todos
export const getTodos = async (req, res) => {
    try{
        const todos = await todojdSchema.find();
        res.status(200).json(todos);
    }
    catch(err){
        res.status(404).json({message: err.message});
    }
}

//create a todo
export const createTodo = async (req, res) => {
    try{
        const {title, description, completed} = req.body;
        const newTask = new todojdSchema({title, description, completed});
        await newTask.save();
        res.status(201).json({status: 201, data: newTask});    }
    catch(err){
        res.status(409).json({message: err.message});
    }
}

//update a todo
export const updateTodo = async (req,res) => {
    try{
        const {id} = req.params;
        const {title, description, completed} = req.body;
        const updatedTask = await todojdSchema.findByIdAndUpdate(
            id,
            {title, description, completed},
            { new: true }
        );
        res.status(200).json({status: 200, data:updatedTask});
    }
    catch(err){
        res.status(409).json({ error: err.message});
    }
}

//delete a todo
export const deleteTodo = async (req, res) => {
    try{
        const {id} = req.params;
        const deletedTask = await todojdSchema.findByIdAndDelete(id);
        res.status(200).json({status: 200, data:deletedTask});
    }
    catch(err){
        res.status(409).json({ error: err.message});
    }
}