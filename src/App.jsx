import Header from "./components/header/Header.jsx";
import './App.css'
import Footer from "./components/footer/Footer.jsx";

export default function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <h1>Hello React</h1>
      </main>
      <Footer title="footer" description="text"/>
    </div>
  )
}