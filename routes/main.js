
const express = require('express');

const studentController = require('../controllers/students')

const router = express.Router();

router.get('/', studentController.GetMain);

router.get('/edit-student/:studentID', studentController.GetEditStudent)
router.post('/delete-student', studentController.PostDeleteStudent)


router.get('/:studentID', studentController.GetStudent)

router.post('/edit-student', studentController.PostEditStudent)

module.exports = router;
