import React from "react";

import Input from "../../components/Input";
import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/teacherItem";

import './styles.css'


function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponiveis.">
      <form id="search-teachers">
          <Input name="subject" label="Materia" />
          <Input name="week_day" label="Dia da Semana" />
          <Input type="time" name="time" label="Hora" />
        </form>
      </PageHeader>

      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>
    </div>
  )
}

export default TeacherList;
