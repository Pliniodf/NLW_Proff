import React from "react";
import { Link } from "react-router-dom";

import logoImg from '../../assets/images/logo.png'
import backIcon from '../../assets/images/icons/back.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'

import './style.css'
import PageHeader from "../../components/PageHeader";

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponiveis.">
      <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Materia</label>
            <input type="text" id="subject" />
          </div>

          <div className="input-block">
            <label htmlFor="week_day">Dia da Semana</label>
            <input type="text" id="week_day" />
          </div>

          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input type="text" id="time" />
          </div>
        </form>
      </PageHeader>

      <main>
        <article className="teacher-item">
          <header>
            <img src="https://avatars.githubusercontent.com/u/93495052?v=4" alt="Plinio" />
            <div>
              <strong>Plinio</strong>
              <span>Química</span>
            </div>
          </header>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              <br /><br />
             Quae expedita optio recusandae. Veritatis eum animi ut voluptatem voluptate atque, hic libero officia distinctio repellendus ratione, praesen</p>
            
          <footer>
            <p>
            Preço/hora
            <strong>R$ 80,00</strong>
            </p>
            <button type="button">
              <img src="{whatsappIcon}" alt="Entrar em contato" />
            </button>
          </footer>
        </article>
      </main>
    </div>
  )
}

export default TeacherList;
