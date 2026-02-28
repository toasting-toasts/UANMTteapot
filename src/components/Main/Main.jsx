import styles from './Main.module.scss';
import SScrollbar from '../Side-Scrollbar/Side-Scrollbar';
import { Route, Routes } from "react-router";
import pages from '../../data/pages';
import Home from '../../Pages/Home/Home';

function Main() {
    return (<>

    <div className={styles.scrollbar}>
        <SScrollbar/>
    </div>
    <main>    
        <Routes>
            <Route path="/home" element={<Home/>} />
            {pages.map((page) => {
                return (
                    <Route path={page.path} element={page.component} key={page.id}/>
                );
            })}
        </Routes>
    </main>
    
    </>);
}

export default Main;