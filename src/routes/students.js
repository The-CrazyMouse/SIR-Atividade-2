import express from 'express';
import db from '../db/db.js'; // Importa o banco de dados lowDB

const router = express.Router();

// GET /students - Retrieve all students
router.get('/', async (req, res) => {
    await db.read();
    res.json(db.data.students);
});

// GET /students/:id - Retrieve a student by ID
router.get('/:id', async (req, res) => {
    await db.read();
    const student = db.data.students.find(s => s.id === parseInt(req.params.id));
    if (student) {
        res.json(student);
    } else {
        res.status(404).json({ message: 'Student not found' });
    }
});

// POST /students - Add a new student
router.post('/', async (req, res) => {
    const newStudent = { id: Date.now(), ...req.body };
    await db.read();
    db.data.students.push(newStudent);
    await db.write();
    res.status(201).json(newStudent);
});

// PUT /students/:id - Update a student by ID
router.put('/:id', async (req, res) => {
    await db.read();
    const student = db.data.students.find(s => s.id === parseInt(req.params.id));
    if (student) {
        Object.assign(student, req.body); // Update fields
        await db.write();
        res.json(student);
    } else {
        res.status(404).json({ message: 'Student not found' });
    }
});

// DELETE /students/:id - Remove a student by ID
router.delete('/:id', async (req, res) => {
    await db.read();
    const index = db.data.students.findIndex(s => s.id === parseInt(req.params.id));
    if (index !== -1) {
        const deletedStudent = db.data.students.splice(index, 1);
        await db.write();
        res.json(deletedStudent);
    } else {
        res.status(404).json({ message: 'Student not found' });
    }
});

export default router;
