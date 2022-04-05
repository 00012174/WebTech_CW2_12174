const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const port = process.env.PORT || 3000


const errorController = require('./controllers/error')
const mainRoutes = require('./routes/main');
const editRoutes = require('./routes/edit-student')
//const mainJs = require('./js/main')
const newStudentRoutes = require('./routes/new-student');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'pug')
app.set('views', 'views')

app.use('/admin', newStudentRoutes.routes);
app.use(mainRoutes);
app.use(editRoutes)

app.use(errorController.Error);


app.listen(3000)