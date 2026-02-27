import Button from "../button/Button.jsx";

export default function TabNavigation(props) {
  return (
    <div>
      <Button
        isActive={props.active === 'main'}
        functionClick={() => props.onChange('main')}>
        Главная
      </Button>
      <Button
        isActive={props.active === 'feedback'}
        functionClick={() => props.onChange('feedback')}>
        Обратная связь
      </Button>
      <Button
        isActive={props.active === 'contacts'}
        functionClick={() => props.onChange('contacts')}>
        Контакты
      </Button>
      <Button
        isActive={props.active === 'effects'}
        functionClick={() => props.onChange('effects')}
        title="Эффекты"
      />
    </div>
  )
}