const fs = require('fs')
const path = require('path')


const getStudentsFromFile = cb => {
    fs.readFile(p, (err, content) => {
        if (err) {
            cb([]);
        } else {
            cb(JSON.parse(content));
        }
    });
};

const p = path.join(path.dirname(process.mainModule.filename), 'data', 'students.json');

module.exports = class Student {
    constructor(id, name, surname, address, phone, dob, status) {
        this.id = id
        this.name = name
        this.surname = surname
        this.address = address
        this.phone = phone
        this.dob = dob
        this.status = status
    }

    save() {
        getStudentsFromFile(students => {
            if (this.id) {
                console.log("Hello")
                const existingStudentID = students.findIndex(stud => stud.id === this.id)
                const updStudents = [...students]
                updStudents[existingStudentID] = this
                fs.writeFile(p, JSON.stringify(updStudents), err => {
                    console.log(err)
                })
            }
            else {
                this.id = Math.random().toString()
                students.push(this)
                fs.writeFile(p, JSON.stringify(students), err => {
                    console.log(err)
                })
            }

        })
    }

    static fetchAll(cb) {
        getStudentsFromFile(cb)
    }
    static findById(id, cb) {
        getStudentsFromFile(students => {
            const student = students.find(p => p.id === id)
            cb(student)
        })
    }

    static deleteById(id) {
        getStudentsFromFile(students => {
            const updStudent = students.filter(p => p.id !== id)
            fs.writeFile(p, JSON.stringify(updStudent), err => {
                if (!err) {
                    console.log(id)
                }
            })
        })
    }
}