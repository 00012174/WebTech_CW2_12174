
const express = require('express');

const studentController = require('../controllers/students')

const router = express.Router();

const students = [];

router.get('/new-student', studentController.GetAddStudent);

router.post('/new-student', studentController.PostAddStudent);

exports.routes = router;
exports.students = students;