
import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "•/pages/Login";
import NotFound from " /pages/NotFound";
import RegisterTeacherPage from "./pages/RegisterTeacher";


const AppRouter = () => {
  return (
    <Routes>
      
      <Route path="/" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;


