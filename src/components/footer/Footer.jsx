import './footer.css'

export default function Footer(props) {
  return (
    <footer>
      <h5>{props.title}</h5>
      <span>{props.description}</span>
    </footer>
  )
}