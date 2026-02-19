import './button.css'

export default function Button(props) {
  function mouseLeave() {
    console.log(111);
  }

  const mouseEnter = () => {
    console.log('mouse enter');
  }

  return (
    <button
      className="button active"
      onClick={props.functionClick}
      onMouseLeave={mouseLeave}
      onMouseEnter={mouseEnter}
      onDoubleClick={() => console.log('double click')}>
      {props.title || props.children}
    </button>
  )
}