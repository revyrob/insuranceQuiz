import { BrowserRouter, Routes, Route } from "react-router-dom";
import GameIntro from "./pages/GameIntro";
import Homepage from './pages/Homepage';
import NotFound from "./pages/NotFound";
import Quiz from './pages/Quiz';


function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />

      <Route path="/gameIntro" element={<GameIntro />} />

      <Route path="/quiz" element={<Quiz />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
  
  );
}

export default App;
