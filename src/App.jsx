import Header from "./components/header/Header.jsx";
import './App.css'
import Footer from "./components/footer/Footer.jsx";
import Button from "./components/button/Button.jsx";
import {useState} from "react";
import {difference, info} from './assets/info/info.jsx'
import InfoBlock from "./components/info/InfoBlock.jsx";

export default function App() {
  const [textButtonType, setTextButtonType] = useState(null);

  let tubContent = null;
  if (textButtonType) {
    tubContent = <p>Текст кнопки {textButtonType}</p>
  }

  const handleClick = (type) => {
    console.log("click", type);
    setTextButtonType(type);
  }

  return (
    <div className="app">
      <Header/>
      <main>
        <h1>Hello React</h1>

        <Button
          isActive={textButtonType === difference.way}
          title="Доступность"
          functionClick={() => handleClick(difference.way)}/>
        <Button
          isActive={textButtonType === difference.go}
          functionClick={() => handleClick(difference.go)}>Популярность</Button>

        {/*{ textButtonType ? <p>Текст кнопки {textButtonType}</p> : null }*/}

        {tubContent}

        <InfoBlock info={info}/>
      </main>
      <Footer title="footer" description="text"/>
    </div>
  )
}