import * as React from "react";

import './App.css';
import Home from './Pages/Home/Home/Home';
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import AuthProvider from "./context/AuthProvider/AuthProvider";
import Course from "./Pages/Courses/Courses/Course";



function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/course" element={<Course />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;
