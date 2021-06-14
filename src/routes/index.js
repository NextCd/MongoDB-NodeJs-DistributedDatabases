const express = require('express');
const router = express.Router();
const Task = require('../models/commit');
const Student = require('../models/student');

router.get('/', async (req, res) => {
  const students = await Student.find();
  res.render('index', {
    students
  });
});

router.post('/add', async (req, res, next) => {
  const student = new Student(req.body);
  total = (student.Grade1 + student.Grade2 + student.Grade3)/3;
  student.Total = total.toFixed(2);
  await student.save();
  res.redirect('/');
});

router.get('/turn/:id', async (req, res, next) => {
  let { id } = req.params;
  const student = await Student.findById(id);
  student.status = !student.status;
  await student.save();
  res.redirect('/');
});

//solicita la edición
router.get('/edit/:id', async (req, res, next) => {
  const student = await Student.findById(req.params.id);
  res.render('edit', { student });
});


//Genera la edición 
router.post('/edit/:id', async (req, res, next) => {
  const { id } = req.params;
  const student = await Student.findById(id);
  total = (student.Grade1 + student.Grade2 + student.Grade3)/3;
  student.Total = total.toFixed(2);
//aqui va el update del total
  await Student.update({_id: id}, req.body);
  console.log(student)
  res.redirect('/');
});

router.get('/delete/:id', async (req, res, next) => {
  let { id } = req.params;
  await Student.remove({_id: id});
  res.redirect('/');
});


module.exports = router;