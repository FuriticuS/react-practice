import './info-block.css'

export default function InfoBlock(props) {
  return (
    <ul className="info-block">
      {props.info.map(item => {
        return (
          <li key={item.title}>
            <h5>{item.title}</h5>
            <p>{item.description}</p>
          </li>
        )
      })}
    </ul>
  )
}