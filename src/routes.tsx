import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Landing from "./pages/Landing";
import TeacherList from "./pages/TeacherList";
import TeacherForm from "./pages/theacherForm";

const Routes = () => {
  return (
    <BrowserRouter>
     <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/study" component={TeacherList} />
      <Route path="/give-classes" component={TeacherForm} />
     </Switch>
    </BrowserRouter>
  )
}

export default Routes;

//npm uninstall react-router-dom@5.2
//npm uninstall @types/react-router-dom
//npm npm install react-router-dom@5.2
//npm install @types/react-router-dom