import Header from "./components/header/Header.jsx";
import './App.css'
import Footer from "./components/footer/Footer.jsx";
import Button from "./components/button/Button.jsx";
import {useState} from "react";

export default function App() {
  const [textButtonType, setTextButtonType] = useState(null);

  const difference = {
    way: 'text 1',
    go: 'text 2',
  }

  let tubContent = null;
  if(textButtonType) {
    tubContent = <p>Текст кнопки {textButtonType}</p>
  }

  const handleClick = (type) => {
    console.log("click", type);
    setTextButtonType(type);
  }

  return (
    <div className="app">
      <Header />
      <main>
        <h1>Hello React</h1>

        <Button title="Доступность" functionClick={() => handleClick(difference.way)}/>
        <Button functionClick={() => handleClick(difference.go)}>Популярность</Button>

        {/*{ textButtonType ? <p>Текст кнопки {textButtonType}</p> : null }*/}

        { tubContent }
      </main>
      <Footer title="footer" description="text"/>
    </div>
  )
}