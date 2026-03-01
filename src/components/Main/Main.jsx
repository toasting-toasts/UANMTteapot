import styles from './Main.module.scss';
import SScrollbar from '../Side-Scrollbar/Side-Scrollbar';
import { Outlet  } from 'react-router';

function Main() {
    return (<>

    <div className={styles.scrollbar}>
        <SScrollbar/>
    </div>
    <main>    
        <Outlet/>
    </main>
    
    </>);
}

export default Main;