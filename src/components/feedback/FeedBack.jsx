import Button from "../button/Button.jsx";
import {useState} from "react";

export default function Feedback() {
  const [name, setName] = useState('');
  const [reason, setReason] = useState('error');
  const [hasError, setHasError] = useState(false);

  function handleNameShange(event) {
    const name = event.target.value
    setName(name.trim());
    setHasError(name.trim().length === 0);
  }

  function toggleError() {
    setHasError((prev) => !prev);
  }

  return (
    <div>
      <h3>Обратная связь</h3>

      <Button functionClick={toggleError}>Toggle Error</Button>

      <form>
        <label htmlFor="name">ФИО</label>
        <input
          type="text"
          id="name"
          value={name}
          style={{
            border: hasError ? '1px solid red' : null
          }}
          onChange={handleNameShange}
        />

        <label htmlFor="reason">Причина обращения</label>
        <select
          id="reason"
          value={reason}
          onChange={event => setReason(event.target.value)}>
          <option value="error">Ошибка</option>
          <option value="help">Нужна помощь</option>
          <option value="suggest">Предложение</option>
        </select>

        <Button title="Отправить" disabled={hasError} isActive={!hasError}/>
      </form>

      <pre>ФИО:{name} <br/>Селект:{reason}</pre>
    </div>
  )
}