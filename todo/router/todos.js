const express = require('express')
const router = express.Router()
const Todo = require('../model/todo')



// GET ALL
router.get('/', async (req, res) => {
    try {
        const todos = await Todo.find()
        res.json(todos)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// DELETE ALL 
router.delete('/', async (req, res) => {
    try {
        await Todo.deleteMany();
        res.json("All todos were deleted");
    } catch (error) {
        res.status(500).json({ message: error.message })   
    }
})



// GET BY ID
router.get('/:id', async (req, res) => {
    try {
        const id = await Todo.findById(req.params.id);
        res.json(id);
    } catch (error) {
        res.status(404).json({ message: "Task with this id was not found." })
    }
})



// CREATE
router.post('/', async (req, res) => {
    const todo = new Todo({
        text: req.body.text,
        completed: req.body.completed
    })

    try {
        const newTodo = await todo.save()
        res.json(newTodo)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})



// DELETE BY ID
router.delete('/:id', async (req, res) => {
    id = await Todo.findById(req.params.id)
    if(id == null) return res.status(404).json({ message: 'Cannot find list' })

    await Todo.deleteOne(id)
    res.json({ message: 'Deleted Todo'})
})



// ========== FOOTER ==========
module.exports = router