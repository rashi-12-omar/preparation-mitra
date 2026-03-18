const express = require('express');
const router = express.Router();
const Question = require('../models/Question');

// GET questions by category
router.get('/:category', async (req, res) => {
  try {
    const questions = await Question.find({ category: req.params.category }).limit(20);
    res.json(questions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new question (for admin/seeding)
router.post('/add', async (req, res) => {
  const question = new Question(req.body);
  try {
    const newQuestion = await question.save();
    res.status(201).json(newQuestion);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
