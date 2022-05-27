import React, { FormEvent, useState } from "react";
import Input from "../../components/Input";
import PageHeader from "../../components/PageHeader";
import Textarea from "../../components/Textarea";
import Select from "../../components/Select";

import warningIcon from "../../assets/images/icons/warning.png"

import './styles.css'


function TeacherForm() {
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [bio, setBio] = useState('');
  
  const [subject, setSubject] = useState('');
  const [cost, setCost] = useState('');

  
  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: '', to: '' }
  ])

  function addNewScheduleItem(){
    setScheduleItems([
      ...scheduleItems,
      { week_day: 0, from: '', to: '' }
    ]);
  }

  function handleCreateClass(e: FormEvent) {
    e.preventDefault();

    console.log({
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost
    });
  }
 
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader 
        title="Que incrível que você quer dar aulas." 
        description="O primeiro passo é preencher esse formulário de inscrição">

      </PageHeader>

      <main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Seus dados</legend>

            <Input 
              name="name" 
              label="Nome Completo" 
              value={name} 
              onChange={(e) => {setName(e.target.value)}}
              />
            <Input 
              name="avatar" 
              label="Avatar"
              value={avatar} 
              onChange={(e) => {setAvatar(e.target.value)}} 
              />
            <Input 
              name="whatsapp" 
              label="Whatsapp" 
              value={whatsapp} 
              onChange={(e) => {setWhatsapp(e.target.value)}}
              />
            <Textarea  
              name="bio" 
              label="Biografia" 
              value={bio} 
              onChange={(e) => {setBio(e.target.value)}}
              />

          </fieldset>

          <fieldset>
            <legend>Sobre Aula</legend>

            <Select 
              name="subject" 
              label="Matéria" 
              value={subject}
              onChange={(e) => {setSubject(e.target.value)}}
              options={[
                { value: 'Artes', label: 'Artes' },
                { value: 'Biologia', label: 'Biologia' },
                { value: 'Ciências', label: 'Ciências' },
                { value: 'Educação Fisica', label: 'Educação Fisica' },
                { value: 'Física', label: 'Física' },
                { value: 'Geografia', label: 'Geografia' },
                { value: 'História', label: 'História' },
                { value: 'Matemática', label: 'Matemática' },
                { value: 'Português', label: 'Português' },
                { value: 'Química', label: 'Química' },
              ]}
            />
            
            <Input 
              name="cost" 
              label="Custo da sua hora por aula" 
              value={cost}
              onChange={(e) => {setCost(e.target.value)}}
              />
          </fieldset>

          <fieldset>
            <legend>
              Horários disponíveis
              <button type="button" onClick={addNewScheduleItem}>
                + Novo horário
              </button>
            </legend>
            
            {scheduleItems.map(scheduleItem => {
              return (
                <div key={scheduleItem.week_day} className="schedule-item">
            <Select 
              name="week_day" 
              label="Dia da Semana" 
              options={[
                { value: '0', label: 'Domingo' },
                { value: '1', label: 'Segunda-feira' },
                { value: '2', label: 'Terça-feira' },
                { value: '3', label: 'Quarta-feira' },
                { value: '4', label: 'Quinta-feira' },
                { value: '5', label: 'Sexta-feira' },
                { value: '6', label: 'Sabado' },
              ]}
            />
            <Input name="from" label="Das" type="time" />
            <Input name="to" label="Até" type="time" />
            </div>
              )
            })}
          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="Aviso importante" height={35} />
              Importante! <br />
              Preencha todos os dados
            </p>
            <button type="button">
              Salvar cadastro
            </button>
          </footer>
        </form>
      </main>
    </div>
  )
}

export default TeacherForm;
