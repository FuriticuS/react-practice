import './header.css'
import logoUrl from '/src/assets/images/vite.svg?url'

export default function Header() {
  const logoText = 'Logo'
  const time = new Date().toLocaleString()

  return (
    <header>
      <img src={logoUrl} alt={logoText}/>
      <h3>React Vite practice</h3>
      <span>Time now {time}</span>
    </header>
  )
}