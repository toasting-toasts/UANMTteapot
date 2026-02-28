import styles from "./Footer.module.scss"

function Footer(){
    return (
        <footer className={styles.footer}>
            <p>Всі права не захищені. Не захищено авторськими правами. © {new Date().getFullYear()} Newmy. Посилання на джерело: <a href="https://github.com/toasting-toasts/Newmy-UA" target="_blank" rel="noopener noreferrer">GitHub</a></p>

            <div>
                Особлива дяка:
                <ul>
                    
                    <li><a href="https://github.com/toasting-toasts" target="_blank" rel="noopener noreferrer">toasting-toasts</a> - старший розробник</li>
                    <li><a href="https://github.com/wasserwan" target="_blank" rel="noopener noreferrer">wasserwan</a> - молодший розробник</li>
                    <li><a href="https://github.com/flowlly7n7" target="_blank" rel="noopener noreferrer">flowlly7n7</a> - дизайнер???</li>
                    <li><a href="https://www.instagram.com/aperepelytsia_official/" target="_blank" rel="noopener noreferrer">Андрій </a> - мовознавець</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;