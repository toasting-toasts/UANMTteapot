import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import './styles/common_style.scss';
import { BrowserRouter } from "react-router-dom";
import styles from './App.module.scss';
import Footer from "./components/Footer/Footer";

function App() {

  return (
    <div className={styles.app}>
    <BrowserRouter>
      <Header/>
      <Main/>
      <Footer/>
      
    </BrowserRouter>
    </div>
  )
}

export default App;