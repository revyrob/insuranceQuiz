import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "./pages/Add";
import GameIntro from "./pages/GameIntro";
import Homepage from './pages/Homepage';
import NotFound from "./pages/NotFound";
import Questions from "./pages/Questions";
import Quiz from './pages/Quiz';


function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />

      <Route path="/questions" element={<Questions />} />

      <Route path="/gameIntro" element={<GameIntro />} />

      <Route path="/quiz" element={<Quiz />} />
      <Route path="/add" element={<Add />} />


      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
  
  );
}

export default App;
