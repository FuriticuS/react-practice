import logoUrl from '/src/assets/images/vite.svg?url'
import {useEffect, useState} from "react";
import './header.css'

export default function Header() {
  const [timeType, setTimeType] = useState(()=> new Date())
  const logoText = 'Logo'

  useEffect(() => {
    const timer = setInterval(() => setTimeType(new Date()), 1000);

    return () => clearInterval(timer);
  }, [])

  return (
    <header>
      <img src={logoUrl} alt={logoText}/>
      <h3>React Vite practice</h3>
      <span>Time now {timeType.toLocaleString()}</span>
    </header>
  )
}