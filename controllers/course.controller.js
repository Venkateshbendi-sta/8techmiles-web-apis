const course = require("../models/course.model.js");

const getProducts = async (req, res) => {
  try {
    const coureRef = await course.find({});
    res.status(200).json(coureRef);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const courseRef = await course.findById(id);
    res.status(200).json(courseRef);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const postCourse = async (req, res) => {
  try {
    const courseRef = await course.create(req.body);
    res.status(200).json(courseRef);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const courseUpdateRef = await course.findByIdAndUpdate(id, req.body);
    if (!courseUpdateRef) {
      return res.status(404).json({ message: "not found data" });
    }
    const upadteCoures = await course.findById(id);
    res.status(200).json({ upadteCoures });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const cours = await course.findByIdAndDelete(id);
    if (!cours) {
      res.status(404).json({ message: "not Couyrse found" });
    }
    res.status(200).json({ message: "deeleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = {
  getProducts,
  getProduct,
  postCourse,
  updateCourse,
  deleteCourse,
};
