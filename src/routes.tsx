import React from "react";
import { BrowserRouter, Route, Routes as RoutesRouter } from "react-router-dom"
import Landing from "./pages/Landing";
import TeacherList from "./pages/TeacherList";
import TeacherForm from "./pages/theacherForm";

const Routes = () => {
  return (
    <BrowserRouter>
      <RoutesRouter>
          <Route path="/*" element={<Landing />} />
          <Route path="/study" element={<TeacherList />} />
          <Route path="/give-classes" element={<TeacherForm />} />
      </RoutesRouter>
    </BrowserRouter>
  )
}

export default Routes;

//npm uninstall react-router-dom@5.2
//npm uninstall @types/react-router-dom
//npm npm install react-router-dom@5.2
//npm install @types/react-router-dom