import Button from "../button/Button.jsx";

export default function Feedback() {

  return (
    <div>
      <h3>Обратная связь</h3>

      <form>
        <label htmlFor="name">ФИО</label>
        <input type="text" id="name"/>

        <label htmlFor="reason">Причина обращения</label>
        <select id="reason">
          <option value="error">Ошибка</option>
          <option value="help">Нужна помощь</option>
          <option value="suggest">Предложение</option>
        </select>

        <Button title="Отправить"/>
      </form>
    </div>
  )
}