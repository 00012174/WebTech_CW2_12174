
const express = require('express');

const studentController = require('../controllers/students')

const router = express.Router();

router.get('/edit-student/:studentID', studentController.GetEditStudent)

router.post('/edit-student', studentController.PostEditStudent)

module.exports = router;