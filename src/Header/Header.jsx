import styles from "./Header.module.scss"
function Header() {

    return (
        <header className={styles.header}>
        <img src="#" alt="No image loaded/bad connection"/>
  
        <nav>
          <p>Login</p>
          <p>Register</p>
          <p>emptyfornow</p>
        </nav>
      </header>
    )
  }

export default Header;