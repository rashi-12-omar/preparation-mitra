import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import QuizEngine from './components/Quiz/QuizEngine';
import Navbar from './components/UI/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/quiz/technical" element={<QuizEngine category="Technical" />} />
          <Route path="/quiz/hr" element={<QuizEngine category="HR" />} />
          <Route path="/mock-interview" element={<div>WebRTC Component Here</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
