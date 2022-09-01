
import './App.css';
import Dictionary from "./dictionary/Dictionary";
import Images from "./dictionary/pictionary/Images";
import { BrowserRouter, Routes, Route } from "react-router-dom";





function App() {
  return (
  
      <BrowserRouter>
      <Routes>
         <Route path="/" element={<Dictionary />}>
          <Route index element={<Dictionary />}/>
          <Route path="pictionary" element={<Images />}/>
        </Route>
      </Routes>
      </BrowserRouter>

  );
}

export default App;
