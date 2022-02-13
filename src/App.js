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
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import PrivateRoute from "./Pages/LoginSystem/PrivateRoute/PrivateRoute";


function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/course" element={<PrivateRoute>
              <Course />
            </PrivateRoute>} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
