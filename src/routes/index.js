//import express from "express";
//import task from "../models/tasks"
const express = require('express');
//const task = require('../models/tasks');
const router = express.Router()

//utilizamos el task.js
const user = require('../models/user')

//rutas o endpoints
//async promesa de asincronia
router.get('/', async (req, res) => {
    //generar un arreglo de registros con todos los documentos de la coleccion task
    res.render('login')
}); 
// agrega una tarea
  router.post('/login', async (req, res, next) => {
    
    await task.save();
    res.redirect('/');
  });

  router.get('/turn/:id', async (req,res,next)=>{
    let {id} = req.params;
    const task = await Task.findById(req.params.id)
    task.status = !task.status;
    await task.save();
    res.redirect('/')

  
    
  })
  router.get('/edit/:id', async (req, res, next) => {
    const task = await Task.findById(req.params.id);
    res.render('edit',{task})
    //res.redirect('/')
  });
  
  router.post('/edit/:id', async (req, res, next) => {
    const { id } = req.params;
    await Task.updateOne({_id: id}, req.body);
    res.redirect('/');
  });
  
   //eliminar una tarea por id
router.get('/delete/:id', async (req, res, next) => {
  let { id } = req.params;
  await Task.deleteOne({_id: id});
  res.redirect('/');
});

module.exports = router;
