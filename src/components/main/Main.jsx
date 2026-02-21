import {useState} from "react";
import Button from "../button/Button.jsx";
import InfoBlock from "../info/InfoBlock.jsx";
import Intro from "../intro/Intro.jsx";
import {difference, info} from '../../assets/info/info.jsx'

export default function Main() {
  const [textButtonType, setTextButtonType] = useState(null);

  let tubContent = null;
  if (textButtonType) {
    tubContent = <p>Текст кнопки {textButtonType}</p>
  }

  const handleClick = (type) => {
    console.log("click", type);
    setTextButtonType(type);
  }

  return(
    <main>
      <h1>Hello React</h1>

      <Intro />

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
  )
}