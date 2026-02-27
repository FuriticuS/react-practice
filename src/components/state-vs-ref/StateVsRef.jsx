import {useRef, useState} from "react";

export default function StateVsRef() {
  const input = useRef(null);
  const [show, setShow] = useState(false);
  const [value, setValue] = useState('')

  function handleKeyDown(event) {
    if(event.key === 'Enter') {
      setValue(input.current.value ?? '');
      setShow(true)
    }
  }

  return (
    <div>
      <h3>Input value - {show && value}</h3>
      <input
        type="text"
        className="control"
        ref={input}
        onKeyDown={handleKeyDown}
      />
    </div>
  )
}