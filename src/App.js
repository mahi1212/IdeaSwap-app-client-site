import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Courses from './Pages/Courses/Courses/Courses';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path ="/" element={<Home></Home>} />
          <Route path="/home" element={<Home></Home>} />
          <Route path="courses" element={<Courses/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
