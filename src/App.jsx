import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import Main from "./components/main/Main.jsx";
import {Fragment} from "react";
import './App.css'

export default function App() {
  return (
    <Fragment>
      <Header/>
      <Main />
      <Footer title="footer" description="text"/>
    </Fragment>
  )
}