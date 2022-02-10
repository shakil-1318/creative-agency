import * as React from "react";
import './App.css';
import Home from './Pages/Home/Home/Home';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Course from "./Pages/Courses/Courses/Course";
import NotFound from "./Pages/NotFound/NotFound";
import Login from "./Pages/LoginSystem/Login/Login";
import Registration from "./Pages/LoginSystem/Registration/Registration";



function App() {
  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/course" element={<Course />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
