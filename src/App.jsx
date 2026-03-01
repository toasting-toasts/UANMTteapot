import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import LoginPage from "./components/Auth/LoginPage";
import RegisterPage from "./components/Auth/RegisterPage";

import styles from './App.module.scss';
import './styles/common_style.scss';

import pages from "./data/pages";

import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";



function App() {

  return (
    <div className={styles.app}>
    <BrowserRouter>

      <Header/>


      <Routes>
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage/>} />

        <Route path="/" element={<Main/>} >
          <Route path="/home" element={pages[0].component} />
          {pages.map((page) => {
              return (
                  <Route path={page.path} element={page.component} key={page.id}/>
              );
          })}
        </Route>

      </Routes>


      <Footer/>
      
    </BrowserRouter>
    </div>
  )
}

export default App;