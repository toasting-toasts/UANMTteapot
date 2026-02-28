import { NavLink } from "react-router";
import styles from "./Header.module.scss"
function Header() {

    return (
      <header className={styles.header}>
        <img src="#" alt="No image loaded yet/bad connection" onClick={() => window.location.href = '/home'}/>

        <nav>
          <p>Login</p>
          <p>Register</p>
          <p> ~PLACEHOLDER~ </p>
        </nav>
      </header>
    )
  }

export default Header;