const Student = require("../models/student")

exports.GetAddStudent = (req, res, next) => {
    res.render('edit-student', { path: '/edit-student' })
}

exports.GetEditStudent = (req, res, next) => {
    const editMode = req.query.edit
    if (!editMode) {
        return res.render('/')
    }
    const studID = req.params.studentID
    Student.findById(studID, student => {
        res.render('edit-student', { path: '/edit-student', pageTitle: 'Edit Student', editing: editMode, Student: student })

    })

}



exports.PostAddStudent = (req, res, next) => {
    const name = req.body.name
    const surname = req.body.surname
    const address = req.body.address
    const phone = req.body.phone
    const dob = req.body.dob
    const status = req.body.status
    const student = new Student(null, name, req.body.surname, req.body.address, req.body.phone,
        req.body.dob, req.body.status)
    console.log(student)
    student.save()
    res.redirect('/');
}

exports.PostEditStudent = (req, res, next) => {
    const studID = req.body.studentID
    const updStudent = new Student(studID, req.body.name, req.body.surname, req.body.address, req.body.phone,
        req.body.dob, req.body.status)
    updStudent.save();
    res.redirect('/')
}


exports.GetStudent = (req, res, next) => {
    const ID = req.params.studentID
    Student.findById(ID, student => {
        res.render('/edit-student')
    })
    res.redirect('/')
}

exports.GetMain = (req, res, next) => {
    Student.fetchAll(students => {
        res.render('main', { Students: students, path: "/" });
    });

}
exports.PostDeleteStudent = (req, res, next) => {
    const studID = req.body.studentId
    console.log(studID)
    Student.deleteById(studID)
    res.redirect('/')
}

