const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  category: { 
    type: String, 
    required: true, 
    enum: ['Technical', 'HR', 'DSA', 'DBMS'] 
  },
  topic: String, // e.g., 'React.js'
  questionText: { type: String, required: true },
  options: [
    {
      answerText: String,
      isCorrect: Boolean,
    }
  ],
  explanation: String, // Helpful for the 40% efficiency boost
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Question', questionSchema);
