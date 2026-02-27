import {useState} from "react";
import Button from "../button/Button.jsx";
import StateVsRef from "../state-vs-ref/StateVsRef.jsx";

export default function Contacts() {
  const [form, setForm] = useState({
    name: '',
    hasError: false,
  });

  function handleNameChange(event) {
    const name = event.target.value;
    setForm((prev) => ({
        ...prev,
        name: name.trim(),
        hasError: name.trim().length === 0
      })
    )
  }

  return (
    <div>
      <h3>Контакты</h3>

      <form style={{marginBottom: '1rem'}}>
        <label htmlFor="fio">ФИО</label>
        <input
          type="text"
          id="fio"
          value={form.name}
          style={{
            border: form.hasError ? '1px solid red' : null
          }}
          onChange={handleNameChange}
        />

        <Button title="Отправить" disabled={form.hasError} isActive={!form.hasError}/>
      </form>

      <p style={{marginBottom: '1rem'}}>{form.name}</p>

      <hr/>

      <StateVsRef />
    </div>
  )
}