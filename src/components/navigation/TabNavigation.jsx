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
    </div>
  )
}