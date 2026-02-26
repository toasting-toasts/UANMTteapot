import styles from './Main.module.scss';
import SScrollbar from '../Side-Scrollbar/Side-Scrollbar';

function Main() {
    return (
        <main className={styles.wrapper}>
            <SScrollbar/>
        </main>
    );
}

export default Main;