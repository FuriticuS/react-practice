import {useState} from "react";
import Button from "../button/Button.jsx";
import InfoBlock from "../info/InfoBlock.jsx";
import Intro from "../intro/Intro.jsx";
import {difference, info} from '../../assets/info/info.jsx'
import TabNavigation from "../navigation/TabNavigation.jsx";
import Feedback from "../feedback/FeedBack.jsx";

export default function Main() {
  const [tab, setTab] = useState('main')
  const [textButtonType, setTextButtonType] = useState(null);

  let tabContent = null;
  if (textButtonType) {
    tabContent = <p>Текст кнопки {textButtonType}</p>
  }

  const handleClick = (type) => {
    console.log("click", type);
    setTextButtonType(type);
  }

  return (
    <main>
      <h1>Hello React</h1>

      <TabNavigation active={tab} onChange={(current)=> setTab(current)}/>

      {tab === "main" && (<>
        <Intro/>

        <Button
          isActive={textButtonType === difference.way}
          title="Доступность"
          functionClick={() => handleClick(difference.way)}/>
        <Button
          isActive={textButtonType === difference.go}
          functionClick={() => handleClick(difference.go)}>Популярность</Button>

        {/*{ textButtonType ? <p>Текст кнопки {textButtonType}</p> : null }*/}

        {tabContent}

        <InfoBlock info={info}/>
      </>)}

      {tab === 'feedback' && <Feedback/>}
    </main>
  )
}