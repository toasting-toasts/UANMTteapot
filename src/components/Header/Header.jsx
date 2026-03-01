import { NavLink } from "react-router";
import styles from "./Header.module.scss"
function Header() {

    return (
      <header className={styles.header}>
        <img src="#" alt="No image loaded yet/bad connection" onClick={() => window.location.href = '/home'}/>

        <nav>
          <NavLink to="/home">На головну</NavLink>
          <NavLink to="/login">Увійти</NavLink>
          <NavLink to="/register">Зареєструватись</NavLink>
        </nav>
      </header>
    )
  }

export default Header;