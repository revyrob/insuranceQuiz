import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage';
import Quiz from './pages/Quiz';


function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />

      <Route path="/quiz" element={<Quiz />} />
    </Routes>
  </BrowserRouter>
  
  );
}

export default App;
