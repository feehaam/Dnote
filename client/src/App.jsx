import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Homepage } from "./pages/Homepage";
import { Navigation } from "./shared/Navigation";

function App() {
  return (
    <>
      <Navigation/>
      <BrowserRouter>
        <Routes>
         <Route path='/' element={<Homepage/>}/>
         <Route path='/dnote' element={<Homepage/>}/>
         
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
