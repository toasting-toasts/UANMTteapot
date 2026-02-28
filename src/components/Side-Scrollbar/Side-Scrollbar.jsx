import styles from './Side-Scrollbar.module.scss';
import { NavLink } from 'react-router';
import pages from '../../data/pages';

function SScrollbar() {
    return ( 
        <div className={styles.scrollbar_wrapper}>
            {pages.map((page) => {
            return (
                <NavLink 
                    to={page.path} 
                    key={page.id} 
                    className={({isActive}) => isActive ? styles.active : styles.link}
                >
                    {page.name}
                </NavLink>
                );
            })}
        </div>
    );

}

export default SScrollbar;