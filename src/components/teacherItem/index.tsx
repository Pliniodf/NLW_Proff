import React from "react";

import whatsappIcon from '../../assets/images/icons/whatsapp.png'

import './styles.css'

function TeacherItem() {
  return (
    <article className="teacher-item">
          <header>
            <img src="https://avatars.githubusercontent.com/u/93495052?v=4" alt="Plinio" />
            <div>
              <strong>Plinio </strong>
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
              <img src={whatsappIcon} alt="WhatsApp" />
              Entrar em contato
            </button>
          </footer>
        </article>
  )
}

export default TeacherItem;