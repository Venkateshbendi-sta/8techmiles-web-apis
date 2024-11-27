const express = require("express");
const {getProducts, getProduct, postCourse, updateCourse,deleteCourse} = require("../controllers/course.controller")
const route = express.Router();


route.get('/',getProducts)
route.get('/:id',getProduct )
route.post('/',postCourse)
route.put('/:id',updateCourse)
route.delete(':/id', deleteCourse)

module.exports = route;