import './button.css'

export default function Button(props) {
  const { functionClick,
    isActive,
    title,
    children,
    className,
    ...rest} = props

  function mouseLeave() {
    console.log(111);
  }

  const mouseEnter = () => {
    console.log('mouse enter');
  }

  return (
    <button
      {...rest}
      className={`button ${isActive ? 'active' : ''} ${className ?? ''}`.trim()}
      onClick={functionClick}
      onMouseLeave={mouseLeave}
      onMouseEnter={mouseEnter}
      onDoubleClick={() => console.log('double click')}>
      {title || children}
    </button>
  )
}